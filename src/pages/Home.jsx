import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { siteData } from "../data/siteData";

const iconMap = {
  Pan: "🍞",
  Fresh: "🥩",
  Time: "🕐",
  Pin: "📍"
};

export default function Home() {
  const { business, home } = siteData;

  return (
    <>
      <Navbar />
      <section id="hero">
        <div className="hero-inner">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">{home.hero.eyebrow}</p>
              <h1 className="hero-title">
                {home.hero.titleTop}
                <br />
                <em>{home.hero.titleAccent}</em>
              </h1>
              <p className="hero-subtitle">{home.hero.subtitle}</p>
              <div className="hero-divider" />
              <p className="hero-info">{home.hero.info}</p>
              <div className="hero-cta-row">
                <Link to={home.hero.primaryCta.to} className="btn btn-primary">
                  {home.hero.primaryCta.label}
                </Link>
                <Link to={home.hero.secondaryCta.to} className="btn btn-outline">
                  {home.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Resumen del local">
              <div className="hero-aside-card">
                <span className="hero-aside-tag">Sanducheria artesanal</span>
                <h2>{business.name}</h2>
                <p>{business.slogan}</p>
                <div className="hero-aside-list">
                  <div>
                    <span>Direccion</span>
                    <strong>{business.address}</strong>
                  </div>
                  <div>
                    <span>Horario</span>
                    <strong>{business.schedule}</strong>
                  </div>
                  <div>
                    <span>WhatsApp</span>
                    <strong>{business.phoneDisplay}</strong>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="strip">
        {home.highlights.map((item) => (
          <div className="strip-item" key={item.label}>
            <div className="strip-icon" aria-hidden="true">{iconMap[item.icon] || "•"}</div>
            <div className="strip-label">{item.label}</div>
            <div className="strip-sub">{item.sub}</div>
          </div>
        ))}
      </div>

      <footer>
        <p>
          (c) 2026 <span>{business.name} {business.subtitle}</span> - {business.city}, {business.country} - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}
