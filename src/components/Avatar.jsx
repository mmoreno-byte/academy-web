// Avatar ilustrado de Marta, fundadora de Academia Lingua.
// Para sustituirlo por una foto real más adelante, basta con reemplazar el <svg> por:
// <img src="/avatar.jpg" alt="Retrato de Marta" className="avatar-photo" />
// y añadir en components.css:
//   .avatar-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

export default function Avatar({ size = 220 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Retrato ilustrado de Marta, fundadora de Academia Lingua"
    >
      {/* Fondo circular azul muy suave */}
      <circle cx="100" cy="100" r="100" fill="#E4EDF2" />

      {/* Torso / blusa coral */}
      <path
        d="M28 200
           C 28 148, 62 128, 100 128
           C 138 128, 172 148, 172 200 Z"
        fill="#F0763C"
      />

      {/* Cuello de la blusa */}
      <path
        d="M82 132 C 88 142, 112 142, 118 132 L 112 126 C 106 130, 94 130, 88 126 Z"
        fill="#1B4B6B"
      />

      {/* Cuello (piel) */}
      <rect x="88" y="112" width="24" height="24" rx="8" fill="#E3AE85" />

      {/* Cara */}
      <ellipse cx="100" cy="84" rx="40" ry="46" fill="#E9BE95" />

      {/* Sombra sutil bajo el mentón */}
      <ellipse cx="100" cy="116" rx="24" ry="5" fill="#D9A276" opacity="0.4" />

      {/* Orejas */}
      <ellipse cx="61" cy="87" rx="5.5" ry="8" fill="#E3AE85" />
      <ellipse cx="139" cy="87" rx="5.5" ry="8" fill="#E3AE85" />

      {/* Pendiente pequeño, detalle coral */}
      <circle cx="61" cy="94" r="2.2" fill="#F0763C" />
      <circle cx="139" cy="94" r="2.2" fill="#F0763C" />

      {/* Melena castaña, por detrás de la cara */}
      <path
        d="M56 90
           C 50 40, 80 20, 100 20
           C 120 20, 150 40, 144 90
           C 150 130, 138 160, 132 150
           C 138 110, 130 90, 122 78
           C 118 95, 110 100, 100 100
           C 90 100, 82 95, 78 78
           C 70 90, 62 110, 68 150
           C 62 160, 50 130, 56 90 Z"
        fill="#5B3A29"
      />

      {/* Raya y mechones frontales */}
      <path
        d="M100 26 C 92 28, 84 38, 82 52 C 90 44, 96 40, 100 40 C 104 40, 110 44, 118 52 C 116 38, 108 28, 100 26 Z"
        fill="#6B4530"
      />

      {/* Cejas */}
      <path d="M78 74 Q 85 70 93 73" stroke="#4A2F20" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M107 73 Q 115 70 122 74" stroke="#4A2F20" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Ojos */}
      <ellipse cx="85" cy="85" rx="4" ry="3.2" fill="#4A3324" />
      <ellipse cx="115" cy="85" rx="4" ry="3.2" fill="#4A3324" />
      <circle cx="86" cy="84" r="1.1" fill="#FFFFFF" />
      <circle cx="116" cy="84" r="1.1" fill="#FFFFFF" />

      {/* Nariz */}
      <path d="M100 89 Q 99 97 102 100" stroke="#C98F63" strokeWidth="1.4" fill="none" strokeLinecap="round" />

      {/* Sonrisa */}
      <path d="M89 106 Q 100 113 111 106" stroke="#A85D3A" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Rubor */}
      <ellipse cx="72" cy="98" rx="7" ry="4.5" fill="#F0763C" opacity="0.25" />
      <ellipse cx="128" cy="98" rx="7" ry="4.5" fill="#F0763C" opacity="0.25" />

      {/* Gafas redondas finas */}
      <circle cx="85" cy="86" r="12" fill="none" stroke="#1B4B6B" strokeWidth="2" />
      <circle cx="115" cy="86" r="12" fill="none" stroke="#1B4B6B" strokeWidth="2" />
      <path d="M97 86 L 103 86" stroke="#1B4B6B" strokeWidth="2" />
      <path d="M73 84 L 67 82" stroke="#1B4B6B" strokeWidth="2" />
      <path d="M127 84 L 133 82" stroke="#1B4B6B" strokeWidth="2" />
      <path d="M80 82 Q 84 80 88 82" stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.6" />
    </svg>
  );
}
