export const WHATSAPPS = [
  { name: "Gustavo", number: "5493584370092" },
  { name: "Luis",    number: "5493584856582" },
];

export function waLinkFor(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
