 // Configuración
    const WHATSAPP_NUMBER = '573135993021';

    // Productos
    const products = [
      { id: 1, name: 'Minipastel de Pollo', description: 'Deliciosos minipasteles rellenos de pollo', quantity: '30 unidades', price: 39000, promoPrice: 24000, category: 'pasteles', isBox: true },
      { id: 2, name: 'Miniempanada Papa-Tocineta', description: 'Crujientes empanadas con papa y tocineta', quantity: '40 unidades', price: 35000, promoPrice: 24000, category: 'empanadas', isBox: true },
      { id: 3, name: 'Miniempanada Carne-Papa', description: 'Empanadas de carne molida con papa', quantity: '40 unidades', price: 35000, promoPrice: 24000, category: 'empanadas', isBox: true },
      { id: 4, name: 'Miniempanada de Papa', description: 'Tradicionales empanadas de papa', quantity: '40 unidades', price: 27000, promoPrice: 24000, category: 'empanadas', isBox: true },
      { id: 5, name: 'Pastel de Pollo-Papa Personal', description: 'Pastel individual para disfrutar', quantity: '1 unidad', price: 5000, category: 'personales', isBox: false },
      { id: 6, name: 'Empanada Carne Desmechada-Papa', description: 'Empanada personal de carne desmechada', quantity: '1 unidad', price: 5000, category: 'personales', isBox: false },
      { id: 7, name: 'Empanada Carne Molida-Papa', description: 'Empanada personal de carne molida', quantity: '1 unidad', price: 4000, category: 'personales', isBox: false }
    ];

    // Formatear precio
    const formatPrice = (price) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);

    // Renderizar productos
    function renderProducts() {
      const container = document.getElementById('products');
      container.innerHTML = products.map(p => `
        <article class="product-card" data-category="${p.category}">
          ${p.isBox ? `<div class="promo-badge"><svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg><span>PROMO</span></div>` : ''}
          <div class="product-stripe"></div>
          <div class="product-content">
            <div class="product-header">
              <svg class="product-icon" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              <span class="product-quantity">${p.quantity}</span>
            </div>
            <h3 class="product-name">${p.name}</h3>
            <p class="product-description">${p.description}</p>
            <div class="product-footer">
              ${p.isBox ? `
                <div class="price-container">
                  <span class="product-price-old">${formatPrice(p.price)}</span>
                  <span class="product-price-promo">${formatPrice(p.promoPrice)}</span>
                </div>
              ` : `<span class="product-price">${formatPrice(p.price)}</span>`}
            </div>
          </div>
        </article>
      `).join('');
    }

    // Filtrar categorías
    function setupFilters() {
      const buttons = document.querySelectorAll('.category-btn');
      const cards = document.querySelectorAll('.product-card');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.category;
          cards.forEach(card => {
            card.classList.toggle('hidden', cat !== 'todos' && card.dataset.category !== cat);
          });
        });
      });
    }

    // WhatsApp
    function openWhatsApp() {
      const msg = encodeURIComponent('Hola! Me gustaría conocer más sobre sus productos de Santa Isabel');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    }

    // Init
    renderProducts();
    setupFilters();
