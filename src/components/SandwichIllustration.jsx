export default function SandwichIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sombra */}
      <ellipse cx="140" cy="295" rx="90" ry="12" fill="rgba(0,0,0,0.15)" />

      {/* PAN INFERIOR */}
      <g>
        {/* Sombra del pan */}
        <path d="M60 200 Q50 190 50 170 Q50 150 80 145 L200 145 Q230 150 230 170 Q230 190 220 200" fill="#6B3410" />
        {/* Pan miga */}
        <path d="M60 190 Q50 185 50 170 Q50 155 80 150 L200 150 Q230 160 230 175 Q230 190 220 195" fill="#E8C66E" stroke="#8B5A2B" strokeWidth="3" />
        {/* Detalle de textura */}
        <ellipse cx="140" cy="168" rx="70" ry="8" fill="rgba(255,255,255,0.2)" />
      </g>

      {/* INGREDIENTES DEL MEDIO */}
      
      {/* LECHUGA 1 (verde claro) */}
      <g>
        <path d="M45 150 Q60 135 80 138 Q110 140 140 132 Q170 140 200 138 Q220 135 235 150 L235 162 Q220 170 140 175 Q60 170 45 162 Z" fill="#6FBC3A" stroke="#4A7D2B" strokeWidth="2.5" />
        <path d="M60 145 Q80 138 110 140 Q140 135 170 140 Q190 138 220 145" stroke="#4A7D2B" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>

      {/* CARNE ROJA 1 (jamón/salami) */}
      <g>
        <path d="M50 155 Q65 145 85 148 Q115 145 140 140 Q165 145 195 148 Q215 145 230 155 L230 166 Q215 175 140 180 Q65 175 50 166 Z" fill="#E74C3C" stroke="#A92E1F" strokeWidth="2.5" />
        <ellipse cx="85" cy="157" rx="8" ry="3" fill="rgba(255,255,255,0.15)" />
        <ellipse cx="195" cy="157" rx="8" ry="3" fill="rgba(255,255,255,0.15)" />
      </g>

      {/* LECHUGA 2 (verde más oscuro) */}
      <g>
        <path d="M48 162 Q65 150 88 153 Q120 150 140 145 Q160 150 192 153 Q215 150 232 162 L232 174 Q215 183 140 188 Q65 183 48 174 Z" fill="#7ECC49" stroke="#4A7D2B" strokeWidth="2.5" />
        <path d="M65 158 Q85 152 115 154 Q140 150 165 154 Q195 152 215 158" stroke="#4A7D2B" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>

      {/* QUESO (amarillo) */}
      <g>
        <path d="M55 170 Q70 160 95 163 Q125 160 140 156 Q155 160 185 163 Q210 160 225 170 L225 182 Q210 191 140 196 Q70 191 55 182 Z" fill="#FFE45C" stroke="#D4A520" strokeWidth="2.5" />
        <path d="M70 168 Q90 162 120 164 Q140 160 160 164 Q190 162 210 168" stroke="#D4A520" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>

      {/* CARNE ROJA 2 (jamón/salami más oscuro) */}
      <g>
        <path d="M52 177 Q68 167 90 170 Q122 167 140 162 Q158 167 190 170 Q212 167 228 177 L228 188 Q212 197 140 202 Q68 197 52 188 Z" fill="#C0392B" stroke="#8B2E1F" strokeWidth="2.5" />
        <ellipse cx="90" cy="178" rx="8" ry="3" fill="rgba(255,255,255,0.12)" />
        <ellipse cx="190" cy="178" rx="8" ry="3" fill="rgba(255,255,255,0.12)" />
      </g>

      {/* PAN SUPERIOR */}
      <g>
        {/* Pan miga */}
        <path d="M70 180 Q55 175 55 155 Q55 130 85 120 L195 120 Q225 130 225 155 Q225 175 210 180" fill="#E8C66E" stroke="#8B5A2B" strokeWidth="3" />
        {/* Sombra superior */}
        <path d="M75 168 Q80 140 85 125 L195 125 Q200 140 205 168" fill="#6B3410" opacity="0.4" />
        {/* Brillo */}
        <ellipse cx="140" cy="130" rx="55" ry="10" fill="white" opacity="0.25" />
      </g>

      {/* Contorno general del sándwich */}
      <g fill="none" stroke="#8B5A2B" strokeWidth="3" pointerEvents="none">
        <path d="M70 180 Q55 175 55 155 Q55 130 85 120 L195 120 Q225 130 225 155 Q225 175 210 180" />
        <path d="M60 190 Q50 185 50 170 Q50 155 80 150 L200 150 Q230 160 230 175 Q230 190 220 195" />
      </g>
    </svg>
  );
}