import React, { useState, useEffect } from 'react';
import { priceToNumber, formatPrice } from '../utils/formatters';
import { CartContext } from './CartContextCore';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('medlife_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('medlife_cart', JSON.stringify(cart));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          brand: product.brand || 'Genérico',
          price: product.price,
          priceOld: product.priceOld,
          badge: product.badge,
          promoText: product.promoText,
          mlText: product.mlText,
          deliveryText: product.deliveryText,
          ratingText: product.rating,
          iconType: product.iconType,
          qty: 1
        }
      ];
    });
  };

  const changeQty = (name, delta) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (!existing) return prev;
      const newQty = existing.qty + delta;
      if (newQty <= 0) {
        return prev.filter((item) => item.name !== name);
      }
      return prev.map((item) =>
        item.name === name ? { ...item, qty: newQty } : item
      );
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  const total = cart.reduce((sum, item) => {
    return sum + priceToNumber(item.price) * item.qty;
  }, 0);

  const totalOriginal = cart.reduce((sum, item) => {
    const original = item.priceOld ? priceToNumber(item.priceOld) : priceToNumber(item.price);
    return sum + original * item.qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQty,
        removeFromCart,
        clearCart,
        count,
        total,
        totalOriginal,
        formatPrice,
        priceToNumber
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { useCart } from './useCart';
export { CartContext } from './CartContextCore';
