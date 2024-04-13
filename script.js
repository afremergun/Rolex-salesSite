// Ürün bilgilerini tutan sınıf
class ShoppingItem {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

// UI işlemlerini yöneten sınıf
class UI {
    constructor() {
        this.cartList = document.querySelector(".shopping-cart-list");
        this.itemCount = document.getElementById("item-count");
    }

    // Sepete yeni bir ürün ekler
    addToCart(item) {
        const listItem = document.createElement("div");
        listItem.classList.add("list-item");
        listItem.innerHTML = `
            <div class="row align-items-center text-white-50">
                <div class="col-md-3">
                    <img src="${item.image}" alt="product" class="img-fluid">
                </div>
                <div class="col-md-5">
                    <div class="title">${item.title}</div>
                </div>
                <div class="col-md-2">
                    <div class="price">${item.price}</div>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-delete fs-6">
                        <i class="fas fa-trash-alt text-danger btn-delete"></i>
                    </button>
                </div>
            </div>`;
        this.cartList.appendChild(listItem);
        this.updateCartCount();
    }

    // Sepetten bir ürünü kaldırır
    removeCartItem(event) {
        event.target.closest('.list-item').remove();
        this.updateCartCount();
    }

    // Sepetteki ürün sayısını günceller
    updateCartCount() {
        const cartItems = this.cartList.getElementsByClassName('list-item');
        this.itemCount.textContent = cartItems.length;
    }
}

// UI sınıfının bir örneğini oluştur
const ui = new UI();

// Sepete ekleme butonlarına tıklandığında çalışacak fonksiyon
function addToCartEvent() {
    const addToCartButtons = document.getElementsByClassName("btn6");
    for (let button of addToCartButtons) {
        button.addEventListener("click", function(event) {
            const product = event.target.closest('.urun');
            const title = product.getElementsByClassName("title")[0].textContent;
            const price = product.getElementsByClassName("price")[0].textContent;
            const image = product.getElementsByClassName("product")[0].src;
            const shoppingItem = new ShoppingItem(image, title, price);
            ui.addToCart(shoppingItem);
            button.classList.add("disabled");
            button.textContent = "Eklendi";
            event.preventDefault();
        });
    }
}

// Sepeti göster/gizle butonu için olay dinleyicisi
function cartToggle() {
    const btnCart = document.querySelector(".btn-cart");
    btnCart.addEventListener("click", function() {
        ui.cartList.classList.toggle("d-none");
    });
}

// Sepetten ürün kaldırma butonları için olay dinleyicisi
function removeCartItemEvent() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-delete')) {
            ui.removeCartItem(event);
        }
    });
}

// Uygulama başlatıldığında çalışacak fonksiyonlar
function initializeApp() {
    addToCartEvent();
    cartToggle();
    removeCartItemEvent();
}

// Uygulamayı başlat
initializeApp();