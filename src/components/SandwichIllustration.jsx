export default function SandwichIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 340 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 1. Sombra base en el piso */}
      <ellipse cx="170" cy="285" rx="120" ry="18" fill="rgba(0,0,0,0.12)" />

      {/* Grupo Principal de Sánduche - Coordenadas Isométricas */}
      <g transform="translate(170, 150)">
        
        {/* --- PAN INFERIOR (TAPA DE ABAJO) --- */}
        {/* Grosor de la corteza inferior */}
        <path d="M-105,35 Q-105,25 -85,20 L15,20 Q35,25 35,35 L35,65 Q35,80 15,85 L-85,85 Q-105,80 -105,65 Z" fill="#7B4A21" />
        {/* Cara superior de la tapa inferior (miga) */}
        <path d="M-105,35 Q-105,25 -85,20 L15,20 Q35,25 35,35 L35,60 Q35,75 15,80 L-85,80 Q-105,75 -105,60 Z" fill="#F4CC82" stroke="#6e431f" strokeWidth="4" />

        {/* --- CARNE INFERIOR (2 rodajas de salami superpuestas) --- */}
        <g transform="translate(0, -5)">
          {/* Sombra de la rodaja izquierda */}
          <ellipse cx="-60" cy="30" rx="30" ry="8" fill="#8B3A3A" />
          {/* Cara de la rodaja izquierda */}
          <ellipse cx="-60" cy="25" rx="30" ry="8" fill="#B84535" stroke="#63211A" strokeWidth="3" />
          {/* Sombra de la rodaja derecha */}
          <ellipse cx="-10" cy="40" rx="30" ry="8" fill="#8B3A3A" />
          {/* Cara de la rodaja derecha */}
          <ellipse cx="-10" cy="35" rx="30" ry="8" fill="#B84535" stroke="#63211A" strokeWidth="3" />
        </g>

        {/* --- QUESO (Con las puntas colgantes) --- */}
        <path d="M-100,5 L50,5 L65,35 L30,25 L0,45 L-40,25 L-110,40 Z" fill="#FFD60A" stroke="#B8860B" strokeWidth="3" strokeLinejoin="round" />

        {/* --- LECHUGA INFERIOR --- */}
        <path d="M-110,25 Q-90,10 -60,20 Q-30,30 0,20 Q30,10 55,25 L50,35 Q20,25 -10,35 Q-40,45 -80,35 Z" fill="#5C8B3B" stroke="#2D4C1E" strokeWidth="3" />

        {/* --- CARNE SUPERIOR (1 rodaja central) --- */}
        <ellipse cx="-15" cy="5" rx="30" ry="8" fill="#8B3A3A" transform="translate(0, 15)"/>
        <ellipse cx="-15" cy="0" rx="30" ry="8" fill="#B84535" stroke="#63211A" strokeWidth="3" transform="translate(0, 15)"/>

        {/* --- LECHUGA SUPERIOR --- */}
        <g transform="translate(0, -25)">
          <path d="M-110,25 Q-90,10 -60,20 Q-30,30 0,20 Q30,10 55,25 L50,35 Q20,25 -10,35 Q-40,45 -80,35 Z" fill="#76B041" stroke="#2D4C1E" strokeWidth="3" />
        </g>

        {/* --- PAN SUPERIOR (TAPA TIPO DOMO/BRIOCHE) --- */}
        <g transform="translate(0, -35)">
          {/* Grosor de la corteza superior */}
          <path d="M-105,-40 Q-105,-80 -35,-80 Q35,-80 35,-40 L35,0 Q35,15 15,20 L-85,20 Q-105,15 -105,0 Z" fill="#7B4A21" />
          {/* Cara frontal/miga del pan superior */}
          <path d="M-105,-40 Q-105,-75 -35,-75 Q35,-75 35,-40 L35,-10 Q35,5 15,10 L-85,10 Q-105,5 -105,-10 Z" fill="#F4CC82" stroke="#6e431f" strokeWidth="4" />
          {/* Brillo superior tipo cartoon */}
          <path d="M-80,-55 Q-35,-65 10,-55" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
        </g>

      </g>
    </svg>
  );
}