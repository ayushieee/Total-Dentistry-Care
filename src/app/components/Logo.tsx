export function Logo({ className = "h-12 md:h-16" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 300 80" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tooth with Crown Icon */}
      <g transform="translate(10, 10)">
        {/* Crown */}
        <path 
          d="M15 8 L20 2 L25 8 L30 2 L35 8 L35 15 L15 15 Z" 
          fill="#8B7D6B"
          stroke="#8B7D6B"
          strokeWidth="1"
        />
        {/* Tooth */}
        <path 
          d="M18 15 C18 15 16 25 16 32 C16 38 20 42 25 42 C30 42 34 38 34 32 C34 25 32 15 32 15 Z" 
          fill="#FFFFFF"
          stroke="#8B7D6B"
          strokeWidth="2"
        />
        {/* Shine/highlight */}
        <circle cx="22" cy="25" r="2" fill="#E8E4DC" opacity="0.7" />
      </g>
      
      {/* TOTAL text */}
      <text 
        x="65" 
        y="32" 
        fontFamily="Arial, sans-serif" 
        fontSize="20" 
        fontWeight="700" 
        fill="#2C5F7C"
        letterSpacing="2"
      >
        TOTAL
      </text>
      
      {/* DENTISTRY text */}
      <text 
        x="65" 
        y="52" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="600" 
        fill="#8B7D6B"
        letterSpacing="3"
      >
        DENTISTRY
      </text>
      
      {/* CARE text */}
      <text 
        x="180" 
        y="52" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="600" 
        fill="#8B7D6B"
        letterSpacing="3"
      >
        CARE
      </text>
    </svg>
  );
}
