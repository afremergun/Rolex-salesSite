const urun = document.getElementsByClassName('urun');
const btn6 = document.getElementsByClassName("btn6");
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");

class ShoppingItem {
    constructor(image, title, price) {
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI {
    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "list-item";

        listItem.innerHTML =
        `<div class="list-item">
            <div class="row align-items-center text-white-50">
              <div class="col-md-3">
                <img src="${shopping.image}" alt="product" class="img-fluid">
              </div>
              <div class="col-md-5">
                <div class="title">${shopping.title}</div>
              </div>
              <div class="col-md-2">
                <div class="price">${shopping.price}</div>
              </div>
              <div class="col-md-2">
                <button class="btn btn-delete fs-6"><i class="fas fa-trash-alt text-danger btn-delete"></i></button>
              </div>
            </div>
        </div>`

        cartList.appendChild(listItem);
        this.removeCart(listItem);
        this.cartCount();
    }

    removeCart(item) {
        let btnRemove = item.querySelector(".btn-delete");
        btnRemove.addEventListener("click", function() {
            item.remove();
            this.cartCount();
        }.bind(this))
    }

    cartCount() {
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }
}

for (let i = 0; i < urun.length; i++) {
    btn6[i].addEventListener("click", function(e) {
        let title = urun[i].getElementsByClassName("title")[0].textContent;
        let price = urun[i].getElementsByClassName("price")[0].textContent;
        let image = urun[i].getElementsByClassName("product")[0].src;
        btn6[i].classList.add("disabled");
        btn6[i].textContent = "Eklendi";
        let shopping = new ShoppingItem(image, title, price);
        let ui = new UI();

        ui.addToCart(shopping);

        e.preventDefault();
    })
}


function cartToggle() {
    btnCart.addEventListener("click", function() {
        cartList.classList.toggle("d-none");
    })
}


cartToggle();
