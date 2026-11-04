"use client";

import Lenis from "lenis";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type Phase = "idle" | "cover" | "reveal";
type Ctx = { navigate: (href: string, label: string) => void };

const TransitionCtx = createContext<Ctx>({ navigate: () => {} });
export const useTransition = () => useContext(TransitionCtx);

const COVER_MS = 650;
const REVEAL_MS = 750;

export function TransitionProvider({
  children,
  greetings,
}: {
  children: React.ReactNode;
  greetings: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const pending = useRef<string | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Défilement fluide
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const navigate = useCallback(
    (href: string, text: string) => {
      if (href === pathname || phase !== "idle") return;
      pending.current = href;
      setLabel(text);
      setPhase("cover");
      window.setTimeout(() => router.push(href), COVER_MS);
      // Filet de sécurité : si la page n'a pas changé à temps, on lève le
      // rideau quand même pour ne jamais laisser le site bloqué.
      window.setTimeout(() => {
        if (pending.current !== href) return;
        pending.current = null;
        setPhase("reveal");
      }, COVER_MS + 4000);
    },
    [pathname, phase, router]
  );

  // Nouvelle page affichée : on remonte en haut puis on lève le rideau.
  useEffect(() => {
    if (phase !== "cover" || pending.current === null) return;
    if (pathname !== pending.current) return;
    pending.current = null;
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    setPhase("reveal");
  }, [pathname, phase]);

  // Fin du lever de rideau. Effet séparé : sinon le passage à « reveal »
  // relance l'effet ci-dessus, dont le nettoyage annulait ce minuteur et
  // laissait le site bloqué (plus aucun lien ne répondait).
  useEffect(() => {
    if (phase !== "reveal") return;
    const id = window.setTimeout(() => setPhase("idle"), REVEAL_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      <Intro greetings={greetings} />
      <div className={`curtain curtain-${phase}`} aria-hidden>
        <span className="curtain-label">
          <span className="dot-accent" /> {label}
        </span>
      </div>
      {children}
    </TransitionCtx.Provider>
  );
}

// Écran d'accueil : « Bonjour · Hello · Hola », une seule fois par session.
function Intro({ greetings }: { greetings: string[] }) {
  const [state, setState] = useState<"hidden" | "show" | "leave">("hidden");
  const [i, setI] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("intro-seen") === "1";
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      /* navigation privée : on affiche l'intro */
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("show");
    const timers: number[] = [];
    greetings.forEach((_, k) => timers.push(window.setTimeout(() => setI(k), k * 380)));
    timers.push(window.setTimeout(() => setState("leave"), greetings.length * 380 + 250));
    timers.push(window.setTimeout(() => setState("hidden"), greetings.length * 380 + 1150));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [greetings]);

  if (state === "hidden") return null;
  return (
    <div className={`intro intro-${state}`} aria-hidden>
      <span className="intro-word">
        <span className="dot-accent" /> {greetings[i]}
      </span>
    </div>
  );
}

export function TLink({
  href,
  label,
  className,
  children,
  onClick,
  ...rest
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const { navigate } = useTransition();
  return (
    <a
      href={href}
      className={className}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href, label);
      }}
    >
      {children}
    </a>
  );
}
