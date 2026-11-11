import { Fragment } from "react";

// Texte qui apparaît mot par mot, en glissant vers le haut (animation CSS).
export default function WordsReveal({
  text,
  delay = 0,
  step = 0.04,
}: {
  text: string;
  delay?: number;
  step?: number;
}) {
  return (
    <>
      {text.replace(/ ([:;?!»])/g, "\u00a0$1").replace(/(«) /g, "$1\u00a0").split(" ").map((w, i, all) => (
        <Fragment key={i}>
          <span className="wr">
            <span className="wr-in" style={{ animationDelay: `${delay + i * step}s` }}>
              {w}
            </span>
          </span>
          {i < all.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
