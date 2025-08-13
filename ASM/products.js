const PRODUCTS = [
  { id: 1, title: 'Nike Sports T-Shirt', brand: 'Nike', price: 450000, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500' },
  { id: 2, title: 'Adidas Hoodie', brand: 'Adidas', price: 750000, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500' },
  { id: 3, title: 'Uniqlo Jeans', brand: 'Uniqlo', price: 1200000, img: 'img/Uniqlo_Jeans.jpg' },
  { id: 4, title: 'Nike Shorts', brand: 'Nike', price: 350000, img: 'img/Nike_Shorts.jpg' },
  { id: 5, title: 'Adidas Jacket', brand: 'Adidas', price: 1500000, img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500' },
  { id: 6, title: 'Uniqlo Polo Shirt', brand: 'Uniqlo', price: 500000, img: 'img/Uniqlo_Polo_Shirt.jpg' },
  { id: 7, title: 'Puma Track Pants', brand: 'Puma', price: 800000, img: 'https://images.unsplash.com/photo-1552903023-a1e0a8f7ec6f?w=500' },
  { id: 8, title: 'Zara Dress', brand: 'Zara', price: 1300000, img: 'https://images.unsplash.com/photo-1539008835657-9e8e4a4aef07?w=500' },
  { id: 9, title: 'H&M Sweater', brand: 'H&M', price: 650000, img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500' },
  { id: 10, title: 'Levi’s Denim Jacket', brand: 'Levi’s', price: 2000000, img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500' },
  { id: 11, title: 'Under Armour Tank Top', brand: 'Under Armour', price: 400000, img: 'https://images.unsplash.com/photo-1520975867597-0af37a22e31b?w=500' },
  { id: 12, title: 'Columbia Raincoat', brand: 'Columbia', price: 1800000, img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500' },
  { id: 13, title: 'North Face Windbreaker', brand: 'North Face', price: 2200000, img: 'https://images.unsplash.com/photo-1539008835657-9e8e4a4aef07?w=500' },
  { id: 14, title: 'Champion Sweatpants', brand: 'Champion', price: 900000, img: 'https://images.unsplash.com/photo-1552903023-a1e0a8f7ec6f?w=500' },
  { id: 15, title: 'Nike Running Shoes', brand: 'Nike', price: 2500000, img: 'https://images.unsplash.com/photo-1600185365926-3f78f89c505f?w=500' },
  { id: 16, title: 'Adidas Sneakers', brand: 'Adidas', price: 2300000, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
  { id: 17, title: 'Gucci Cap', brand: 'Gucci', price: 3500000, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7e871?w=500' },
  { id: 18, title: 'Zara Skirt', brand: 'Zara', price: 850000, img: 'https://images.unsplash.com/photo-1520975867597-0af37a22e31b?w=500' }
];



let cart = [];

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' VND';
}

function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  const brandFilter = document.getElementById('filter-brand').value;
  const priceFilter = document.getElementById('filter-price').value;
  const searchText = document.getElementById('search-input').value.toLowerCase();

  let filtered = PRODUCTS.filter(p => {
    return (
      (brandFilter === '' || p.brand === brandFilter) &&
      (priceFilter === '' ||
        (priceFilter === 'low' && p.price < 500000) ||
        (priceFilter === 'mid' && p.price >= 500000 && p.price <= 1000000) ||
        (priceFilter === 'high' && p.price > 1000000)
      ) &&
      (p.title.toLowerCase().includes(searchText) || p.brand.toLowerCase().includes(searchText))
    );
  });

  filtered.forEach(p => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.title}">
        <div class="product-info">
          <div class="product-title">${p.title}</div>
          <div class="product-brand">${p.brand}</div>
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="product-actions">
            <button class="btn btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
            <button class="btn btn-detail">Details</button>
          </div>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Kiểm tra sản phẩm đã có trong giỏ chưa
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}


document.getElementById('filter-brand').addEventListener('change', renderProducts);
document.getElementById('filter-price').addEventListener('change', renderProducts);
document.getElementById('search-input').addEventListener('input', renderProducts);

window.onload = function() {
  renderProducts();
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
};

