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
      {/* These extra background shapes add depth to the hero artwork. */}
      <span className="hero__shape hero__shape--halo" aria-hidden="true" />
      <span className="hero__shape hero__shape--diamond" aria-hidden="true" />
      <span className="hero__shape hero__shape--dots" aria-hidden="true" />
      <span className="hero__shape hero__shape--ring" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">{storeContent.hero.eyebrow}</p>
        {/* This heading highlights the closing phrase with the accent style. */}
        <h1 className="hero__title" id="hero-title">
          {storeContent.hero.titleLead}
          <span className="hero__title-accent">
            {storeContent.hero.titleAccent}
          </span>
        </h1>
        <p className="hero__description">{storeContent.hero.description}</p>
        <a className="hero__action" href="#catalog">
          {storeContent.hero.actionLabel}
          <span aria-hidden="true">↗</span>
        </a>
        <p className="hero__note">{storeContent.hero.note}</p>
      </div>

      <div className="hero__art" aria-hidden="true">
        {/* This label gives the hero artwork a concise store-themed message. */}
        <span className="hero__art-label">
          {storeContent.hero.artLabelTop}
          <br />
          {storeContent.hero.artLabelBottom}
        </span>
        <span className="hero__art-disc" />
        <span className="hero__art-stem" />
      </div>
    </section>
  );
}
