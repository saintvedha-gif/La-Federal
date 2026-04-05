import { useEffect } from "react";

/**
 * Observes todos los elementos con [data-animate] en la página actual
 * y agrega la clase .is-visible cuando entran al viewport.
 * Se limpia automáticamente al desmontar el componente (cambio de ruta).
 */
export function useRevealAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    // Mantener visible por defecto para evitar "parches" al recargar.
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
