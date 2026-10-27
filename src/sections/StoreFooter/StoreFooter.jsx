// This section displays the creator credit, footer note, and brand watermark.
import { storeContent } from "../../data/storeContent";
import "./StoreFooter.css";

// This component keeps footer copy in the central store configuration.
export default function StoreFooter() {
  return (
    <footer className="store-footer">
      {/* This row right-aligns the creator credit and footer message. */}
      <div className="store-footer__content">
        <div className="store-footer__message">
          <p className="store-footer__creator">
            {storeContent.footer.creatorLabel}{" "}
            <span>{storeContent.footer.creatorName}</span>
          </p>
          <p className="store-footer__note">{storeContent.footer.copyright}</p>
        </div>
      </div>

      {/* This decorative layer adds glow orbs and geometric footer details. */}
      <div className="store-footer__artwork" aria-hidden="true">
        <span className="store-footer__orb store-footer__orb--orange" />
        <span className="store-footer__orb store-footer__orb--violet" />
        <span className="store-footer__orb store-footer__orb--teal" />
        <span className="store-footer__orbit" />
        <span className="store-footer__diamond" />
        <span className="store-footer__dots" />
      </div>

      {/* This decorative watermark sits below the readable footer content. */}
      <p className="store-footer__watermark" aria-hidden="true">
        {storeContent.footer.watermark}
      </p>
    </footer>
  );
}
