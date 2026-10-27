// This section displays the store identity, creator credit, and footer note.
import { storeContent } from "../../data/storeContent";
import "./StoreFooter.css";

// This component keeps footer copy and branding in the central configuration.
export default function StoreFooter() {
  return (
    <footer className="store-footer">
      {/* This row places the brand on the left and the footer copy on the right. */}
      <div className="store-footer__content">
        <a
          className="store-footer__brand"
          href="/"
          aria-label={storeContent.brand}
        >
          <svg
            className="store-footer__icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 8H6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="1.7"
            />
            <circle cx="10" cy="19" r="1.3" fill="currentColor" />
            <circle cx="17" cy="19" r="1.3" fill="currentColor" />
          </svg>
          <span>{storeContent.brand}</span>
        </a>

        {/* This block right-aligns the creator credit and short store message. */}
        <div className="store-footer__message">
          <p className="store-footer__creator">
            {storeContent.footer.creatorLabel}{" "}
            <span>{storeContent.footer.creatorName}</span>
          </p>
          <p className="store-footer__note">{storeContent.footer.copyright}</p>
        </div>
      </div>

      {/* This decorative watermark sits below the readable footer content. */}
      <p className="store-footer__watermark" aria-hidden="true">
        {storeContent.footer.watermark}
      </p>
    </footer>
  );
}
