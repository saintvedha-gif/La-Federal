import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCart from "../components/FloatingCart";
import { useCart } from "../hooks/useCart";
import { useRevealAnimations } from "../hooks/useRevealAnimations";
import {
  getAdditionalOptions,
  itemHasAdditions,
  findProductBySlug,
  parsePrice
} from "../utils/menuCart";

function formatCOP(amount) {
  return "$" + amount.toLocaleString("es-CO");
}

export default function ProductDetail() {
  const { categoryId, productSlug } = useParams();
  const { category, product } = findProductBySlug(categoryId, productSlug);
  const additionalOptions = getAdditionalOptions();
  const { cart, addToCart, removeFromCart, deleteFromCart, clearCart, updateItemAdditions } = useCart();
  const [selectedAdditions, setSelectedAdditions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [addedOk, setAddedOk] = useState(false);
  const addedTimerRef = useRef(null);
  useRevealAnimations();

  useEffect(() => () => {
    if (addedTimerRef.current) {
      clearTimeout(addedTimerRef.current);
    }
  }, []);

  if (!category || !product) {
    return (
      <>
        <Navbar />
        <section className="section-inner product-detail-shell">
          <div className="product-not-found">
            <span className="section-tag">Producto no encontrado</span>
            <h1 className="section-title">No encontramos ese <em>producto</em></h1>
            <p className="section-body">Puede que el enlace no exista o que el producto haya cambiado.</p>
            <Link to="/menu" className="btn btn-primary">Volver al menu</Link>
          </div>
        </section>
      </>
    );
  }

  function updateAdditionQty(addition, delta) {
    setSelectedAdditions((prev) => {
      const current = prev[addition.name]?.qty || 0;
      const nextQty = Math.max(0, current + delta);
      const next = { ...prev };

      if (nextQty === 0) {
        delete next[addition.name];
      } else {
        next[addition.name] = {
          name: addition.name,
          price: addition.price,
          qty: nextQty
        };
      }

      return next;
    });
  }

  const selectedAdditionList = Object.values(selectedAdditions);
  const additionsTotal = selectedAdditionList.reduce(
    (sum, addition) => sum + (parsePrice(addition.price) * addition.qty),
    0
  );
  const unitPreview = parsePrice(product.price) + additionsTotal;
  const totalPreview = unitPreview * quantity;

  function handleAddToCart() {
    addToCart(product, selectedAdditions, quantity);
    setSelectedAdditions({});
    setQuantity(1);
    setAddedOk(true);

    if (addedTimerRef.current) {
      clearTimeout(addedTimerRef.current);
    }

    addedTimerRef.current = setTimeout(() => {
      setAddedOk(false);
    }, 1800);
  }

  return (
    <div className="menu-container">
      <p className={`product-added-toast${addedOk ? " is-visible" : ""}`} role="status" aria-live="polite">
        Agregado con exito
      </p>
      <Navbar />

      <section className="section-inner product-detail-shell">
        <div className="product-detail-back" data-animate>
          <Link to="/menu" className="btn btn-outline">Volver al menu</Link>
        </div>

        <div className="product-detail-grid">
          <article className="product-showcase" data-animate>
            <span className="section-tag">{category.title}</span>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-desc">{product.desc}</p>

            <div className="product-base-price-card">
              <span>Precio base</span>
              <strong>{product.price}</strong>
            </div>
          </article>

          <aside className="product-config-card" data-animate data-delay="1">
            <h2>Personaliza tu pedido</h2>

            <div className="product-qty-block">
              <span className="product-config-label">Cantidad</span>
              <div className="product-detail-qty-picker">
                <button type="button" className="product-detail-qty-btn" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
                <span className="product-detail-qty-value">{quantity}</span>
                <button type="button" className="product-detail-qty-btn" onClick={() => setQuantity((value) => value + 1)}>+</button>
              </div>
            </div>

            {itemHasAdditions(category.id) && (
              <div className="product-additions-block">
                <span className="product-config-label">Adicionales</span>
                <div className="product-additions-list">
                  {additionalOptions.map((addition) => {
                    const additionQty = selectedAdditions[addition.name]?.qty || 0;
                    return (
                      <div className={`product-addition-row${additionQty > 0 ? " is-selected" : ""}`} key={addition.name}>
                        <div className="product-addition-copy">
                          <span>{addition.name}</span>
                          <strong>{addition.price}</strong>
                        </div>
                        <div className="addition-qty-picker">
                          <button type="button" className="addition-qty-btn" onClick={() => updateAdditionQty(addition, -1)}>−</button>
                          <span className="addition-qty-value">{additionQty}</span>
                          <button type="button" className="addition-qty-btn" onClick={() => updateAdditionQty(addition, 1)}>+</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="product-detail-summary">
              <span>Resumen</span>
              <strong>{formatCOP(totalPreview)}</strong>
            </div>

            <button
              type="button"
              className="btn btn-primary product-detail-add-btn"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </aside>
        </div>
      </section>

      <FloatingCart
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onDelete={deleteFromCart}
        onClear={clearCart}
        onUpdateAdditions={updateItemAdditions}
      />
      <Footer />
    </div>
  );
}
