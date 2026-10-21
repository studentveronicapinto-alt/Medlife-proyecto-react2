import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductIcon from '../components/ProductIcon';
import { productsData, searchSuggestions } from '../data/productsData';
import { useCart } from '../context/CartContext';
import '../styles/pharmacy.css';

export default function Pharmacy() {
  const { cart, addToCart, changeQty, count } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [wishlist, setWishlist] = useState({});

  // Helper to get cart quantity for a specific product
  const getQty = (productName) => {
    const item = cart.find((i) => i.name === productName);
    return item ? item.qty : 0;
  };

  const filteredProducts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return productsData;

    return productsData.filter((p) => {
      const name = p.name.toLowerCase();
      const brand = (p.brand || '').toLowerCase();
      if (name.includes(q) || brand.includes(q)) return true;
      const words = q.split(/\s+/).filter((w) => w.length >= 3);
      if (words.length > 0 && words.every((w) => name.includes(w) || brand.includes(w))) {
        return true;
      }
      return false;
    });
  }, [searchTerm]);

  const matchingSuggestions = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    return searchSuggestions.filter((s) => s.toLowerCase().includes(q));
  }, [searchTerm]);

  const handleSelectSuggestion = (s) => {
    setSearchTerm(s);
    setShowSuggestions(false);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Layout showGrayBar={false}>
      {/* Context bar with Cart link and Search */}
      <div className="context-bar">
        <Link to="/carrito" className="context-link cart-btn">
          🛒 CARRITO <span className="cart-count">{count}</span>
        </Link>

        <span className="context-text">
          {searchTerm.trim() ? (
            <>
              MOSTRANDO {filteredProducts.length} RESULTADOS
              <button
                type="button"
                className="reset-search"
                onClick={() => setSearchTerm('')}
              >
                ✕ Limpiar búsqueda
              </button>
            </>
          ) : (
            'PRODUCTOS RECOMENDADOS PARA TI'
          )}
        </span>

        <div className="search-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos, marcas..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button
            type="button"
            className="search-pill"
            onClick={() => setShowSuggestions(false)}
          >
            <svg viewBox="0 0 24 24" className="search-icon">
              <circle cx="10" cy="10" r="6" fill="none" stroke="#fff" strokeWidth="2" />
              <line x1="15" y1="15" x2="21" y2="21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            BÚSQUEDA
          </button>

          {showSuggestions && matchingSuggestions.length > 0 && (
            <div className="suggestions-box active">
              {matchingSuggestions.map((item, idx) => (
                <div
                  key={idx}
                  className="suggestion-item"
                  onMouseDown={() => handleSelectSuggestion(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="farmacia-section">
        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((p) => {
              const currentQty = getQty(p.name);
              const isWish = !!wishlist[p.id];

              return (
                <article key={p.id} className="product-card">
                  <div className="card-image">
                    {p.badge && <span className="badge">{p.badge}</span>}

                    {currentQty > 0 && (
                      <>
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => changeQty(p.name, -1)}
                          title="Disminuir"
                        >
                          −
                        </button>
                        <span className="qty-label">x{currentQty}</span>
                      </>
                    )}

                    <button
                      type="button"
                      className={`add-btn ${currentQty > 0 ? 'added' : ''}`}
                      onClick={() => addToCart(p)}
                      title="Agregar al carrito"
                    >
                      +
                    </button>

                    <ProductIcon type={p.iconType} />
                  </div>

                  {p.promoText && (
                    <div className="promo-banner">
                      <span className="promo-text">{p.promoText}</span>
                      <button
                        type="button"
                        className={`wish-btn ${isWish ? 'active' : ''}`}
                        onClick={() => toggleWishlist(p.id)}
                        title="Guardar en favoritos"
                      >
                        {isWish ? '♥' : '♡'}
                      </button>
                    </div>
                  )}

                  <span className="brand">{p.brand}</span>
                  <h3 className="product-name">{p.name}</h3>

                  <div className="price-row">
                    <span className="price">{p.price}</span>
                    {p.priceOld && <span className="price-old">{p.priceOld}</span>}
                  </div>

                  <div className="meta-row">
                    <span>{p.mlText}</span>
                    <span className="delivery">{p.deliveryText}</span>
                  </div>

                  <div className="rating">{p.rating}</div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </Layout>
  );
}
