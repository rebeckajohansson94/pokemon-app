// case-sats som ger en viss färg utefter pokemonens type, matchar färg med type som skickas i argumentet

export function getTypeColor(type: string) {
  switch (type) {
    case "water":
      return "#3A6FB0";
    case "fire":
      return "#C65A2E";
    case "grass":
      return "#4F9A4A";
    case "electric":
      return "#C9A227";
    case "psychic":
      return "#C94F75";
    case "poison":
      return "#7A4FA3";
    case "normal":
      return "#6E7FB8";
    case "ground":
      return "#B88A2E";
    case "rock":
      return "#7A7A7A";
    case "ice":
      return "#4FAFB0";
    case "bug":
      return "#7EA62A";
    case "ghost":
      return "#4F4F9A";
    case "dragon":
      return "#4A3AC2";
    case "dark":
      return "#4F4034";
    case "steel":
      return "#8F8FA8";
    case "fairy":
      return "#C97AC0";
    case "fighting":
      return "#9F3A2A";
    case "flying":
      return "#6F7FD1";
    case "stellar":
      return "#2FA0B5";
    case "unknown":
      return "#4F7F78";
    default:
      return "#3A6FB0";
  }
}
