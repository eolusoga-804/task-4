// This section displays the store brand and short footer note.
import { storeContent } from "../../data/storeContent";
import "./StoreFooter.css";

export default function StoreFooter() {
  return (
    <footer className="store-footer">
      <a
        className="store-footer__brand"
        href="/"
        aria-label={storeContent.brand}
      >
        {storeContent.brand}
      </a>
      <span className="store-footer__note">
        {storeContent.footer.copyright}
      </span>
    </footer>
  );
}
