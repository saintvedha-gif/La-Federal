import { useState } from "react";
import { siteData } from "../data/siteData";

function formatCOP(amount) {
  return "$" + amount.toLocaleString("es-CO");
}

export default function FloatingCart({ cart, onAdd, onRemove, onDelete, onClear }) {
  const [open, setOpen] = useState(false);
  const items = Object.values(cart);
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.unitTotal * i.qty, 0);

  function buildWhatsAppUrl() {
    const lines = items.map((item) => {
      const additionsText = item.additions?.length
        ? `\n   + ${item.additions.map((addition) => `${addition.name} x${addition.qty}`).join(", ")}`
        : "";
      return `• ${item.name} x${item.qty}  —  ${formatCOP(item.unitTotal * item.qty)}${additionsText}`;
    });
    const msg = [
      "Hola! Me gustaría hacer el siguiente pedido 🥪",
      "",
      ...lines,
      "",
      `*Total estimado: ${formatCOP(totalPrice)}*`,
      "",
      "Por favor confirmar disponibilidad. ¡Gracias!"
    ].join("\n");
    return `https://wa.me/${siteData.business.phoneRaw}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <div className="cart-float">
      {open && (
        <div className="cart-panel" role="dialog" aria-modal="true" aria-label="Tu pedido">
          <div className="cart-panel-head">
            <h3>Tu pedido</h3>
            <div className="cart-head-actions">
              {items.length > 0 && (
                <button className="cart-clear" onClick={onClear}>
                  Vaciar
                </button>
              )}
              <button
                className="cart-close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar carrito"
              >
                ✕
              </button>
            </div>
          </div>

          {items.length === 0 ? (
            <p className="cart-empty">Agrega productos desde el menú para armar tu pedido.</p>
          ) : (
            <>
              <ul className="cart-list">
                {items.map((item) => (
                  <li key={item.key} className="cart-item">
                    <div className="cart-item-info">
                      <div className="cart-item-copy">
                        <span className="cart-item-name">{item.name}</span>
                        {item.additions?.length > 0 && (
                          <span className="cart-item-additions">
                            + {item.additions.map((addition) => `${addition.name} x${addition.qty}`).join(", ")}
                          </span>
                        )}
                      </div>
                      <span className="cart-item-subtotal">
                        {formatCOP(item.unitTotal * item.qty)}
                      </span>
                    </div>
                    <div className="cart-qty-row">
                      <button
                        className="cart-qty-btn"
                        onClick={() => onRemove(item.key)}
                        aria-label={`Quitar uno de ${item.name}`}
                      >
                        −
                      </button>
                      <span className="cart-qty">{item.qty}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() => onAdd(item)}
                        aria-label={`Agregar otro ${item.name}`}
                      >
                        +
                      </button>
                      <button
                        className="cart-delete-btn"
                        onClick={() => onDelete(item.key)}
                        aria-label={`Eliminar ${item.name} del carrito`}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <span>Total estimado</span>
                <strong>{formatCOP(totalPrice)}</strong>
              </div>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn cart-whatsapp"
              >
                Pedir por WhatsApp
              </a>
            </>
          )}
        </div>
      )}

      <button
        className={`cart-fab${open ? " cart-fab--active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar carrito" : `Ver pedido${totalItems > 0 ? ` — ${totalItems} productos` : ""}`}
      >
        <span aria-hidden="true">{open ? "✕" : "🛒"}</span>
        {!open && totalItems > 0 && (
          <span className="cart-badge" aria-hidden="true">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
