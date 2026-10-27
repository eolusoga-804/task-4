// This section adds a short editorial note between the catalog and footer.
import { storeContent } from "../../data/storeContent";
import "./ClosingNote.css";

// This component presents the store's closing message.
export default function ClosingNote() {
  return (
    <section className="closing-note" aria-labelledby="closing-note-title">
      {/* This label identifies the short editorial message. */}
      <p className="closing-note__eyebrow">
        {storeContent.closingNote.eyebrow}
      </p>

      {/* This block pairs the title with its supporting sentence. */}
      <div className="closing-note__content">
        <h2 className="closing-note__title" id="closing-note-title">
          {storeContent.closingNote.title}
        </h2>
        <p className="closing-note__description">
          {storeContent.closingNote.description}
        </p>
      </div>
    </section>
  );
}
