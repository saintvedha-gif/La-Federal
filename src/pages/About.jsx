import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteData } from "../data/siteData";
import { useRevealAnimations } from "../hooks/useRevealAnimations";

export default function About() {
  const { about, business } = siteData;
  useRevealAnimations();

  return (
    <>
      <Navbar />
      <section id="about">
        <div className="section-inner">
          <div className="about-layout">
            <div data-animate>
              <span className="section-tag">{about.tag}</span>
              <h2 className="section-title">
                {about.title} <em>{about.titleAccent}</em>
              </h2>
              <p className="section-body">{about.body}</p>
              <div className="about-stats">
                {about.stats.map((stat, i) => (
                  <div className="stat-box" data-animate data-delay={String(i + 1)} key={stat.label}>
                    <div className="stat-num">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual" data-animate data-delay="2">
              <div className="about-card-stack">
                <div className="about-box">
                  <p className="about-quote">{about.quote}</p>
                  <span className="about-cite">- {about.cite}</span>
                </div>
                <div className="about-detail-card">
                  <span>Hecho en {business.city}</span>
                  <strong>{business.subtitle}</strong>
                  <p>Pan artesanal, producto fresco y una experiencia de local calida para volver.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
