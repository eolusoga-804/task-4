// This component displays rotating messages while the catalog loads.
import { useEffect, useState } from "react";
import { storeContent } from "../../data/storeContent";
import "./ProductLoading.css";

export default function ProductLoading() {
  const messages = storeContent.catalog.loadingMessages;
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (messages.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setMessageIndex((currentIndex) => (currentIndex + 1) % messages.length);
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [messages.length]);

  const message = messages[messageIndex] ?? storeContent.catalog.loadingMessage;

  return (
    <div className="product-loading" role="status">
      <span className="product-loading__message">{message}</span>
      <div
        className="product-loading__track"
        role="progressbar"
        aria-label={storeContent.catalog.loadingLabel}
        aria-valuetext={message}
      >
        <span className="product-loading__fill" aria-hidden="true" />
      </div>
    </div>
  );
}
