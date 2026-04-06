import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteData } from "../data/siteData";
import SandwichIllustration from "../components/SandwichIllustration";

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
              <h1 className="hero-title">{home.hero.titleTop} {home.hero.titleAccent}</h1>
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

            <div className="hero-img-wrap">
              <SandwichIllustration className="hero-sandwich" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
