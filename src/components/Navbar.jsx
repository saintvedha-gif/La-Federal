import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteData } from "../data/siteData";
import { isOpenNow } from "../utils/businessHours";

export default function Navbar() {
  const { business, navigation, contact } = siteData;
  const [openNow, setOpenNow] = useState(() => isOpenNow(contact.weeklyHours || []));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const refresh = () => setOpenNow(isOpenNow(contact.weeklyHours || []));
    refresh();
    const timer = setInterval(refresh, 60000);
    return () => clearInterval(timer);
  }, [contact.weeklyHours]);

  return (
    <nav className={`navbar${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="navbar-top">
        <Link className="nav-logo" to="/" onClick={() => setIsMenuOpen(false)}>{business.name}</Link>
        <button
          type="button"
          className="nav-toggle"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul className="nav-links">
        {navigation.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
              end={item.to === "/"}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <span className={`status-pill nav-status-pill ${openNow ? "open" : "closed"}`} aria-live="polite">
        {openNow ? "Abierto ahora" : "Cerrado ahora"}
      </span>
    </nav>
  );
}
