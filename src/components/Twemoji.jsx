function toCodePoints(emoji) {
  return Array.from(emoji, (symbol) => symbol.codePointAt(0).toString(16)).join("-");
}

export default function Twemoji({ emoji, label, className = "twemoji" }) {
  if (!emoji) {
    return null;
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/${toCodePoints(emoji)}.svg`}
      alt={label || emoji}
      className={className}
      draggable="false"
      loading="lazy"
      decoding="async"
    />
  );
}