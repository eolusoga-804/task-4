// This section displays the cart panel and manages its keyboard behavior.
import { useEffect, useRef } from "react";
import { storeContent } from "../../data/storeContent";
import "./CartDrawer.css";

export default function CartDrawer({ isOpen, itemCount, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousFocus = document.activeElement;

    // This handler closes the panel with Escape and keeps keyboard focus inside.
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusable = document.querySelectorAll(
          "#cart-drawer button:not([disabled]), #cart-drawer a[href]",
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    // This cleanup removes the listener and restores focus to the opener.
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const itemsMessage = storeContent.cart.itemsPresentMessage.replace(
    "{{count}}",
    itemCount,
  );

  return (
    <div
      className="cart-drawer__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <aside
        className="cart-drawer"
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className="cart-drawer__heading">
          <h2 className="cart-drawer__title" id="cart-drawer-title">
            {storeContent.cart.title}
          </h2>
          <button
            className="cart-drawer__close"
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={storeContent.cart.closeLabel}
          >
            ×
          </button>
        </div>

        <p className="cart-drawer__message" role="status">
          {itemCount === 0 ? storeContent.cart.emptyMessage : itemsMessage}
        </p>
      </aside>
    </div>
  );
}
