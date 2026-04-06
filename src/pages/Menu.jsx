import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { siteData } from "../data/siteData";
import { useRevealAnimations } from "../hooks/useRevealAnimations";
import FloatingCart from "../components/FloatingCart";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import Twemoji from "../components/Twemoji";
import {
  getAdditionalOptions,
  getVisibleCategories,
  slugify
} from "../utils/menuCart";

const categoryIconMap = {
  artesanales: "🥪",
  club: "🧈",
  kids: "🧒",
  papas: "🍟",
  bebidas: "🥤",
  cervezas: "🍺"
};

export default function Menu() {
  const categories = siteData.menu.categories;
  const additionalOptions = getAdditionalOptions();
  const visibleCategories = getVisibleCategories();
  const [active, setActive] = useState(visibleCategories[0]?.id || "");
  const selectedCategory = visibleCategories.find((category) => category.id === active);
  const { cart, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart();
  useRevealAnimations();

  return (
    <div className="menu-container">
      <Navbar />

      <header className="page-header" data-animate>
        <p className="page-header-tag">{siteData.menu.headerTag}</p>
        <h1>
          {siteData.menu.headerTitle} <em>{siteData.menu.headerAccent}</em>
        </h1>
        <p className="page-header-sub">{siteData.menu.headerSubtitle}</p>
      </header>

      <div className="tabs-wrapper">
        <div className="tabs">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              className={`tab ${active === category.id ? "active" : ""}`}
              onClick={() => setActive(category.id)}
            >
              <span className="tab-icon" aria-hidden="true">
                <Twemoji emoji={categoryIconMap[category.id] || "🍽️"} label={category.label} className="twemoji twemoji-tab" />
              </span>
              <span className="tab-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="section-inner">
        {selectedCategory?.items ? (
          <section className="cat-section">
            <div className="cat-header">
              <span className="cat-count">{selectedCategory.tag}</span>
              <h2 className="cat-title">{selectedCategory.title}</h2>
            </div>
            <div className="items-grid">
              {selectedCategory.items.map((item) => (
                <div key={item.name} className="item-card">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-desc">{item.desc}</p>
                  <div className="item-card-footer">
                    <span className="item-price">{item.price}</span>
                    <Link to={`/menu/${selectedCategory.id}/${slugify(item.name)}`} className="btn btn-outline item-open-btn">
                      Ver producto
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="cat-section">
            <h2 className="cat-title center">Proximamente</h2>
          </section>
        )}
      </main>

      <Footer />

      <FloatingCart
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onDelete={deleteFromCart}
        onClear={clearCart}
      />
    </div>
  );
}