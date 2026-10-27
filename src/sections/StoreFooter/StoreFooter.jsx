// This section displays the footer message and decorative full-width artwork.
import { storeContent } from "../../data/storeContent";
import "./StoreFooter.css";

// This component keeps readable footer content inside the shared page width.
export default function StoreFooter() {
  return (
    <footer className="store-footer">
      {/* This decorative layer spans the full footer background. */}
      <div className="store-footer__artwork" aria-hidden="true">
        <span className="store-footer__orb store-footer__orb--orange" />
        <span className="store-footer__orb store-footer__orb--violet" />
        <span className="store-footer__orb store-footer__orb--teal" />
        <span className="store-footer__orbit" />
        <span className="store-footer__diamond" />
        <span className="store-footer__dots" />
        {/* These extra shapes expand the footer's decorative artwork. */}
        <span className="store-footer__plus-sign" />
        <span className="store-footer__hexagon" />
        <span className="store-footer__ring-accent" />
        <span className="store-footer__stripe" />
      </div>

      {/* This inner container keeps footer copy within the 1140px page width. */}
      <div className="store-footer__inner">
        <div className="store-footer__content">
          <div className="store-footer__message">
            <p className="store-footer__creator">
              {storeContent.footer.creatorLabel}{" "}
              <span>{storeContent.footer.creatorName}</span>
            </p>
            <p className="store-footer__note">
              {storeContent.footer.copyright}
            </p>
          </div>
        </div>

        {/* This decorative watermark stays within the content container. */}
        <p className="store-footer__watermark" aria-hidden="true">
          {storeContent.footer.watermark}
        </p>
      </div>
    </footer>
  );
}
