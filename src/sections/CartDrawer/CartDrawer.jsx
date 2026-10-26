// This section displays cart items, quantity controls, and order totals.
import { useEffect, useRef } from "react";
import { storeContent } from "../../data/storeContent";
import "./CartDrawer.css";

export default function CartDrawer({
  isOpen,
  items,
  totals,
  onClose,
  onRemove,
  onUpdateQuantity,
  onCheckout,
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousFocus = document.activeElement;

    // This handler closes the panel with Escape and contains keyboard focus.
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

  const formatPrice = (amount) =>
    new Intl.NumberFormat(storeContent.catalog.currencyLocale, {
      style: "currency",
      currency: storeContent.catalog.currencyCode,
    }).format(amount);

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

        {items.length === 0 ? (
          <p className="cart-drawer__message" role="status">
            {storeContent.cart.emptyMessage}
          </p>
        ) : (
          <>
            <ul className="cart-drawer__items">
              {items.map((item) => (
                <li className="cart-drawer__item" key={item.id}>
                  <img
                    className="cart-drawer__image"
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />

                  <div className="cart-drawer__item-details">
                    <h3 className="cart-drawer__item-title">{item.title}</h3>
                    <p className="cart-drawer__item-price">
                      {formatPrice(item.price)}
                    </p>

                    <div className="cart-drawer__item-actions">
                      <div
                        className="cart-drawer__quantity"
                        aria-label={`Quantity: ${item.quantity}`}
                      >
                        <button
                          className="cart-drawer__quantity-button"
                          type="button"
                          disabled={item.quantity <= 1}
                          aria-label={storeContent.cart.decreaseQuantityLabel.replace(
                            "{{title}}",
                            item.title,
                          )}
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </button>

                        <span aria-live="polite">{item.quantity}</span>

                        <button
                          className="cart-drawer__quantity-button"
                          type="button"
                          aria-label={storeContent.cart.increaseQuantityLabel.replace(
                            "{{title}}",
                            item.title,
                          )}
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="cart-drawer__remove"
                        type="button"
                        onClick={() => onRemove(item.id)}
                      >
                        {storeContent.cart.removeLabel}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="cart-drawer__totals">
              <div className="cart-drawer__total-row">
                <dt>{storeContent.cart.subtotalLabel}</dt>
                <dd>{formatPrice(totals.subtotal)}</dd>
              </div>

              <div className="cart-drawer__total-row">
                <dt>{storeContent.cart.shippingLabel}</dt>
                <dd>
                  {totals.shipping === 0
                    ? storeContent.cart.freeLabel
                    : formatPrice(totals.shipping)}
                </dd>
              </div>

              <div className="cart-drawer__total-row">
                <dt>{storeContent.cart.taxLabel}</dt>
                <dd>{formatPrice(totals.tax)}</dd>
              </div>

              <div className="cart-drawer__total-row cart-drawer__total-row--grand">
                <dt>{storeContent.cart.totalLabel}</dt>
                <dd>{formatPrice(totals.total)}</dd>
              </div>
            </dl>

            <button
              className="cart-drawer__checkout"
              type="button"
              onClick={onCheckout}
            >
              {storeContent.cart.checkoutLabel}
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
