// This section introduces the store with decorative background artwork.
import { storeContent } from "../../data/storeContent";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <span className="hero__shape hero__shape--sun" aria-hidden="true" />
      <span className="hero__shape hero__shape--spark" aria-hidden="true">
        ✳
      </span>
      <span className="hero__shape hero__shape--orbit" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">{storeContent.hero.eyebrow}</p>
        <h1 className="hero__title" id="hero-title">
          {storeContent.hero.title}
        </h1>
        <p className="hero__description">{storeContent.hero.description}</p>
        <a className="hero__action" href="#catalog">
          {storeContent.hero.actionLabel}
          <span aria-hidden="true">↗</span>
        </a>
        <p className="hero__note">{storeContent.hero.note}</p>
      </div>

      <div className="hero__art" aria-hidden="true">
        <span className="hero__art-label">
          OBJECTS
          <br />
          WITH CHARACTER
        </span>
        <span className="hero__art-disc" />
        <span className="hero__art-stem" />
      </div>
    </section>
  );
}
