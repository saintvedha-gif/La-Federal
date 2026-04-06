import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteData } from "../data/siteData";
import { useRevealAnimations } from "../hooks/useRevealAnimations";
import {
  formatBogotaTime,
  getBogotaWeekdayAndMinutes,
  isOpenNow
} from "../utils/businessHours";

export default function Contact() {
  const { business, contact } = siteData;
  const { weekday } = getBogotaWeekdayAndMinutes();
  const openNow = isOpenNow(contact.weeklyHours || []);
  const todaySchedule = (contact.weeklyHours || []).find((row) => row.dayKey === weekday);
  const currentTime = formatBogotaTime();
  const [loadMap, setLoadMap] = useState(false);
  useRevealAnimations();

  return (
    <>
      <Navbar />
      <section id="contact">
        <div className="section-inner">
          <div data-animate>
            <span className="section-tag">{contact.tag}</span>
            <h2 className="section-title">
              {contact.title} <em>{contact.titleAccent}</em>
            </h2>
          </div>

          <div className="contact-pro-grid">
            <div className="contact-stack">
              {contact.cards.map((item, i) => (
                <article className="contact-action-card" data-animate data-delay={String(i + 1)} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                  <a href={item.buttonUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                    {item.buttonLabel}
                  </a>
                </article>
              ))}
            </div>

            <div className="contact-stack">
              <article className="service-card" data-animate data-delay="1">
                <h3>Tipos de servicio</h3>
                <ul>
                  {contact.serviceTypes.map((service) => (
                    <li key={service.title}>
                      <div>
                        <strong>{service.title}</strong>
                        <span>{service.desc}</span>
                      </div>
                      <b aria-hidden="true">✓</b>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="contact-side">
                <div className="hours-card" aria-live="polite" data-animate data-delay="2">
                  <div className="hours-head">
                    <h3>Horarios de atencion</h3>
                    <span className={`status-pill ${openNow ? "open" : "closed"}`}>
                      {openNow ? "Abierto ahora" : "Cerrado ahora"}
                    </span>
                  </div>
                  <p className="hours-note">
                    Hora actual Cucuta: {currentTime}. {todaySchedule ? `Hoy: ${todaySchedule.display}` : "Sin horario cargado para hoy."}
                  </p>
                  <ul className="hours-list">
                    {contact.weeklyHours.map((row) => (
                      <li key={row.dayKey} className={row.dayKey === weekday ? "is-today" : ""}>
                        <span>{row.dayLabel}</span>
                        <strong>{row.closed ? "Cerrado" : row.display}</strong>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="order-box">
                  <h3>{contact.orderBox.title}</h3>
                  <p>{contact.orderBox.body}</p>
                  <a href={`tel:${business.phoneRaw}`} className="btn btn-gold">{contact.orderBox.buttonLabel}</a>
                </div>
              </div>
            </div>
          </div>

          <section className="map-card" aria-label="Mapa de ubicacion" data-animate>
            <h3>{contact.map.title}</h3>
            {loadMap ? (
              <iframe
                src={contact.map.embedUrl}
                title="Mapa de la ubicacion"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="map-placeholder">
                <p>Para mejor rendimiento, el mapa se carga solo cuando lo solicitas.</p>
                <button className="btn btn-outline" type="button" onClick={() => setLoadMap(true)}>
                  Cargar mapa
                </button>
                <a className="btn btn-gold" href={contact.cards[0].buttonUrl} target="_blank" rel="noreferrer">
                  Abrir en Google Maps
                </a>
              </div>
            )}
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
