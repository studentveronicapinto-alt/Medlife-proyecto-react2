import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductIcon from '../components/ProductIcon';
import { useCart } from '../context/CartContext';
import '../styles/checkout.css';

const DOMICILIO = 6900;

export default function Checkout() {
  const { cart, changeQty, removeFromCart, clearCart, total, totalOriginal, formatPrice } = useCart();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('100456');
  const [errorMsg, setErrorMsg] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    address: '',
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
    cardName: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const ahorro = totalOriginal - total;
  const grandTotal = total + DOMICILIO;

  const handleRedimir = () => {
    if (!couponCode.trim()) return;
    setCouponMessage('¡Cupón aplicado con éxito!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.cardNumber.trim() ||
      !formData.cardExp.trim() ||
      !formData.cardCvc.trim() ||
      !formData.cardName.trim()
    ) {
      setErrorMsg('Completa todos los campos para continuar con el pago.');
      return;
    }

    clearCart();
    setOrderId(String(Math.floor(100000 + Math.random() * 900000)));
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <main className="pagos-section">
        {formSubmitted ? (
          <div className="success-state" style={{ display: 'block' }}>
            <div className="success-icon">✓</div>
            <h1>¡Pago realizado con éxito!</h1>
            <p>
              Tu orden #ML-{orderId} ha sido procesada con éxito.
              Hemos enviado los detalles y el comprobante a tu correo <strong>{formData.email}</strong>.
            </p>
            <Link to="/" className="go-farmacia-btn">
              Volver al Inicio
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div className="empty-state" style={{ display: 'block' }}>
            <h1>No tienes productos para pagar</h1>
            <p>Tu carrito está vacío. Agrega productos de la farmacia para proceder con el pago.</p>
            <Link to="/farmacia" className="go-farmacia-btn">
              Ir a la Farmacia
            </Link>
          </div>
        ) : (
          <div className="checkout-state" style={{ display: 'block' }}>
            <h1>Elige la forma en la que quieres pagar</h1>

            <div className="checkout-grid">
              {/* Columna izquierda: productos */}
              <div className="products-panel">
                <div id="payment-items">
                  {cart.map((item) => (
                    <div key={item.name} className="payment-item">
                      <div className="item-image">
                        {item.badge && <span className="badge">{item.badge}</span>}
                        <ProductIcon type={item.iconType} />
                      </div>

                      <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        <div className="item-price">{item.price}</div>
                        {item.priceOld && <div className="item-price-old">{item.priceOld}</div>}
                        <span className="item-tag">¡Aprovecha!</span>
                      </div>

                      <div className="item-qty">
                        <button
                          type="button"
                          className="qty-minus"
                          onClick={() => changeQty(item.name, -1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          className="qty-plus"
                          onClick={() => changeQty(item.name, 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-x"
                        onClick={() => removeFromCart(item.name)}
                        title="Eliminar producto"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  className="confirmar-metodo-btn"
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('email-input');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  CONFIRMAR MÉTODO DE PAGO ↓
                </button>
              </div>

              {/* Columna derecha: cupón + resumen + formulario */}
              <div className="payment-panel">
                <div className="coupon-row">
                  <svg viewBox="0 0 24 24" className="coupon-icon">
                    <rect
                      x="3"
                      y="9"
                      width="18"
                      height="6"
                      rx="3"
                      fill="none"
                      stroke="#1C86C4"
                      strokeWidth="1.8"
                      transform="rotate(-30 12 12)"
                    />
                  </svg>
                  <input
                    type="text"
                    id="coupon-input"
                    placeholder="Ingresa el cupón (ej: MEDLIFE20)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button type="button" className="redimir-btn" onClick={handleRedimir}>
                    Redimir
                  </button>
                </div>
                {couponMessage && (
                  <p style={{ color: '#27ae60', fontSize: '13px', fontWeight: 'bold', marginTop: '-14px', marginBottom: '14px' }}>
                    {couponMessage}
                  </p>
                )}

                <div className="summary-row">
                  <span>Costo de productos</span>
                  <span>{formatPrice(totalOriginal)}</span>
                </div>
                <div className="summary-row savings">
                  <span>Ahorro en productos</span>
                  <span>{ahorro > 0 ? '-' + formatPrice(ahorro) : formatPrice(0)}</span>
                </div>
                <div className="summary-row">
                  <span>Costo Domicilio</span>
                  <span>{formatPrice(DOMICILIO)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>

                <form id="pago-form" onSubmit={handleSubmit}>
                  <label className="field-label" htmlFor="email-input">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    placeholder="Ingrese su correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label className="field-label" htmlFor="address-input">
                    DIRECCIÓN DE ENVÍO
                  </label>
                  <input
                    type="text"
                    id="address-input"
                    name="address"
                    placeholder="Dirección, ciudad"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />

                  <label className="field-label" htmlFor="card-number">
                    DETALLES DE LA TARJETA
                  </label>
                  <div className="card-row">
                    <input
                      type="text"
                      id="card-number"
                      name="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                    />
                    <span className="card-brands">💳 VISA / MC</span>
                  </div>
                  <div className="card-row two">
                    <input
                      type="text"
                      id="card-exp"
                      name="cardExp"
                      placeholder="MM/YY"
                      value={formData.cardExp}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      id="card-cvc"
                      name="cardCvc"
                      placeholder="CVC"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <label className="field-label" htmlFor="card-name">
                    TITULAR DE LA TARJETA
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="cardName"
                    placeholder="Nombre completo del titular"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                  />

                  {errorMsg && <p className="form-error">{errorMsg}</p>}

                  <button type="submit" className="realizar-pago-btn">
                    REALIZAR PAGO ({formatPrice(grandTotal)})
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
