// This section displays the announcement above the storefront header.
import { storeContent } from "../../data/storeContent";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" role="note">
      <p className="announcement-bar__text">
        <span aria-hidden="true">✦</span> {storeContent.announcement}
      </p>
    </div>
  );
}
