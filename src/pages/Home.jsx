import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Twemoji from "../components/Twemoji";
import { siteData } from "../data/siteData";
import { useRevealAnimations } from "../hooks/useRevealAnimations";
import { slugify } from "../utils/menuCart";

export default function Home() {
  const { business, menu } = siteData;
  const featuredItems = menu.categories
    .filter((cat) => Array.isArray(cat.items) && cat.items.length > 0 && cat.id !== "adiciones")
    .flatMap((cat) => cat.items.slice(0, 2).map((item) => ({ ...item, categoryId: cat.id, categoryLabel: cat.label })))
    .slice(0, 3);

  useRevealAnimations();

  return (
    <>
      <Navbar />

      <section id="hero" className="home-neo-hero">
        <div className="home-neo-noise" aria-hidden="true" />
        <div className="home-neo-orb home-neo-orb-a" aria-hidden="true" />
        <div className="home-neo-orb home-neo-orb-b" aria-hidden="true" />

        <div className="section-inner home-neo-brand-bar" data-animate>
          <p className="home-neo-kicker">
            <span>La Federal</span>
            <strong>Sanducheria Artesanal</strong>
          </p>
        </div>

        <div className="section-inner home-neo-inner">
          <div className="home-neo-copy" data-animate>
            <h1 className="home-neo-title title-kinetic" data-animate data-delay="1">
              Sabor artesanal
              <span>hecho para antojar.</span>
            </h1>
            <p className="home-neo-lead">
              Pan artesanal tostado al momento, ingredientes frescos y salsas de la casa para comer rico todos los dias.
            </p>
            <div className="home-neo-actions">
              <Link to="/menu" className="btn btn-gold">Ver menu</Link>
              <a
                href={`https://wa.me/57${business.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn home-neo-btn-ghost"
              >
                Pedir por WhatsApp
              </a>
            </div>
            <div className="home-neo-chips" data-animate data-delay="2">
              <span>Sanduches artesanales</span>
              <span>Cocina al momento</span>
              <span>{business.schedule}</span>
            </div>
          </div>

          <aside className="home-neo-side" data-animate data-delay="3">
            <div className="home-neo-sandwich-wrap" aria-hidden="true">
              <div className="home-neo-sandwich-orbit" />
              <Twemoji emoji="🥪" label="Sanduche" className="twemoji home-neo-sandwich-emoji" />
            </div>
            <div className="home-neo-core">F E D E R A L</div>
            <p>Abierto todos los dias</p>
            <strong>4:30 pm - 10:30 pm</strong>
          </aside>
        </div>
      </section>

      <section className="section-inner home-neo-featured">
        <div className="home-neo-head" data-animate>
          <span className="section-tag">Seleccion de la casa</span>
          <h2 className="section-title title-slide-glow">Top picks <em>de hoy</em></h2>
        </div>

        <div className="home-neo-grid">
          {featuredItems.map((item, index) => (
            <article className="home-neo-card" data-animate data-delay={String(index + 1)} key={item.name}>
              <span className="home-neo-card-tag">{item.categoryLabel}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="home-neo-card-footer">
                <strong>{item.price}</strong>
                <Link to={`/menu/${item.categoryId}/${slugify(item.name)}`} className="btn btn-outline">Ver detalle</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-neo-band">
        <div className="home-neo-marquee" aria-hidden="true">
          <div className="home-neo-track">
            <span>La Federal</span>
            <span>Sanduches artesanales</span>
            <span>Pan artesanal</span>
            <span>Ingredientes frescos</span>
            <span>La Federal</span>
            <span>Sanduches artesanales</span>
            <span>Salsas de la casa</span>
            <span>Cocina al momento</span>
          </div>
        </div>

        <div className="section-inner home-neo-band-inner" data-animate>
          <h2 className="title-slide-glow">Moderno por fuera, brutal por dentro.</h2>
          <div className="home-neo-actions home-neo-actions-center">
            <Link to="/menu" className="btn btn-gold">Explorar carta</Link>
            <Link to="/contacto" className="btn home-neo-btn-ghost">Como llegar</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
