export function priceToNumber(priceText) {
  if (typeof priceText === 'number') return priceText;
  return Number((priceText || '').toString().replace(/[^\d]/g, '')) || 0;
}

export function formatPrice(n) {
  return '$' + Math.round(n).toLocaleString('es-CO');
}
