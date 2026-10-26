// This section simulates checkout and displays an order confirmation.
import { useEffect, useRef, useState } from "react";
import { storeContent } from "../../data/storeContent";
import "./CheckoutModal.css";

export default function CheckoutModal({ isOpen, onClose, onOrderComplete }) {
  const firstFieldRef = useRef(null);
  const continueButtonRef = useRef(null);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousFocus = document.activeElement;

    // This handler closes the modal with Escape and contains keyboard focus.
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusable = document.querySelectorAll(
          "#checkout-modal button:not([disabled]), #checkout-modal input",
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

    document.addEventListener("keydown", handleKeyDown);

    // This cleanup removes the listener and restores focus to the opener.
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  // This effect focuses the active form or confirmation action.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (orderNumber) {
      continueButtonRef.current?.focus();
    } else {
      firstFieldRef.current?.focus();
    }
  }, [isOpen, orderNumber]);

  if (!isOpen) {
    return null;
  }

  // This handler confirms the demo order without sending customer data.
  function handleSubmit(event) {
    event.preventDefault();
    setOrderNumber(Math.random().toString(36).slice(2, 8).toUpperCase());
  }

  return (
    <div
      className="checkout-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="checkout-modal"
        id="checkout-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        <button
          className="checkout-modal__close"
          type="button"
          onClick={onClose}
          aria-label={storeContent.checkout.closeLabel}
        >
          ×
        </button>

        {!orderNumber ? (
          <>
            <h2 className="checkout-modal__title" id="checkout-modal-title">
              {storeContent.checkout.title}
            </h2>

            <p className="checkout-modal__description">
              {storeContent.checkout.description}
            </p>

            <form className="checkout-modal__form" onSubmit={handleSubmit}>
              <label className="checkout-modal__field">
                <span>{storeContent.checkout.nameLabel}</span>
                <input
                  ref={firstFieldRef}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="checkout-modal__field">
                <span>{storeContent.checkout.emailLabel}</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>

              <button className="checkout-modal__submit" type="submit">
                {storeContent.checkout.submitLabel}
              </button>
            </form>
          </>
        ) : (
          <div className="checkout-modal__confirmation" role="status">
            <p className="checkout-modal__eyebrow">
              {storeContent.checkout.orderNumberLabel}
            </p>

            <h2 className="checkout-modal__title" id="checkout-modal-title">
              {storeContent.checkout.confirmationTitle}
            </h2>

            <p className="checkout-modal__description">
              {storeContent.checkout.confirmationMessage}
            </p>

            <p className="checkout-modal__order-number">{orderNumber}</p>

            <button
              className="checkout-modal__submit"
              ref={continueButtonRef}
              type="button"
              onClick={onOrderComplete}
            >
              {storeContent.checkout.continueLabel}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
