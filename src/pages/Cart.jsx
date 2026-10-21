import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FloatIAButton from '../components/FloatIAButton';
import ProductIcon from '../components/ProductIcon';
import { useCart } from '../context/CartContext';
import '../styles/pharmacy.css';
import '../styles/cart.css';

export default function Cart() {
  const { cart, changeQty, total, formatPrice, priceToNumber } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const navigate = useNavigate();

  const filteredCart = cart.filter((item) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      (item.brand || '').toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <div className="context-bar">
        <Link to="/farmacia" className="context-link cart-btn">
          ‹ SEGUIR COMPRANDO
        </Link>
        <span className="context-text active-page">CARRITO DE COMPRAS</span>

        <div className="search-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar en tu carrito..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>
      </div>

      <main className="carrito-section">
        {cart.length === 0 ? (
          <div className="empty-cart-msg">
            <p>Tu carrito está actualmente vacío.</p>
            <Link to="/farmacia">Ir a la Farmacia</Link>
          </div>
        ) : filteredCart.length === 0 ? (
          <div className="empty-cart-msg">
            <p>Ningún producto de tu carrito coincide con la búsqueda.</p>
            <button
              type="button"
              className="reset-search"
              onClick={() => setFilterQuery('')}
            >
              Mostrar todos
            </button>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {filteredCart.map((item) => (
                <article key={item.name} className="product-card">
                  <div className="card-image">
                    {item.badge && <span className="badge">{item.badge}</span>}
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => changeQty(item.name, -1)}
                      title="Disminuir"
                    >
                      −
                    </button>
                    <button
                      type="button"
                      className="add-btn added"
                      onClick={() => changeQty(item.name, 1)}
                      title="Aumentar"
                    >
                      +
                    </button>
                    <span className="qty-label">x{item.qty}</span>

                    <ProductIcon type={item.iconType} />
                  </div>

                  {item.promoText && (
                    <div className="promo-banner">
                      <span className="promo-text">{item.promoText}</span>
                    </div>
                  )}

                  <span className="brand">{item.brand || 'Genérico'}</span>
                  <h3 className="product-name">{item.name}</h3>

                  <div className="price-row">
                    <span className="price">{item.price}</span>
                    {item.priceOld && <span className="price-old">{item.priceOld}</span>}
                  </div>

                  <div className="meta-row">
                    <span>{item.mlText || ''}</span>
                    <span className="delivery">{item.deliveryText || ''}</span>
                  </div>

                  {item.ratingText && <div className="rating">{item.ratingText}</div>}
                </article>
              ))}
            </div>

            <button
              type="button"
              className="comprar-btn"
              onClick={() => setIsModalOpen(true)}
            >
              COMPRAR ({formatPrice(total)})
            </button>
          </>
        )}
      </main>

      {/* Modal de confirmación */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
        <div className="modal-box">
          <h2>Resumen del pedido</h2>
          <div className="modal-items">
            {cart.map((item) => {
              const unit = priceToNumber(item.price);
              return (
                <div key={item.name} className="modal-item">
                  <span className="modal-item-name">{item.name}</span>
                  <span className="modal-item-qty">x{item.qty}</span>
                  <span className="modal-item-price">{formatPrice(unit * item.qty)}</span>
                </div>
              );
            })}
          </div>

          <div className="modal-total">
            <span>Total estimado:</span>
            <span>{formatPrice(total)}</span>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="modal-cancel-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Seguir comprando
            </button>
            <button
              type="button"
              className="modal-confirm-btn"
              onClick={() => {
                setIsModalOpen(false);
                navigate('/pagos');
              }}
            >
              Confirmar pedido y pagar
            </button>
          </div>
        </div>
      </div>

      <FloatIAButton />
    </div>
  );
}
