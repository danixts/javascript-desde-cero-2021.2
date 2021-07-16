// document.body.classList.add('bg-red-600')

const listProducts = [
    { id: 1, name: "Ciruelo", price: 20, url: "assets/img/ciruelo.png" },
    { id: 2, name: "Coco", price: 10, url: "assets/img/coco.png" },
    { id: 3, name: "Frutilla", price: 10, url: "assets/img/frutilla.png" },
    { id: 4, name: "Kiwi", price: 2, url: "assets/img/kiwi.png" },
    { id: 5, name: "Limon", price: 6, url: "assets/img/limon.png" },
    { id: 6, name: "Mango", price: 8, url: "assets/img/mango.png" },
    { id: 7, name: "Melon", price: 2, url: "assets/img/melon.png" },
    { id: 8, name: "Piña", price: 67, url: "assets/img/pina.png" },
    { id: 9, name: "Platano", price: 90, url: "assets/img/platano.png" },
    { id: 10, name: "Sandia", price: 56, url: "assets/img/sandia.png" },
    { id: 11, name: "Uva", price: 3, url: "assets/img/uva.png" }
]


/* APP */
const gridProduct = document.getElementById('app-product')
const listCart = document.getElementById('app-cart-list')
const totalCart = document.getElementById('app-cart-total')

/* TEMPLATE */
const templateProduct = document.getElementById('template-product').content
const templateCartList = document.getElementById('template-cart-list').content
const templateTotal = document.getElementById('template-cart-total').content

const fragment = document.createDocumentFragment()

let cart = {}


// localStorage
// para guardar un valor
// localStorage.setItem("test", 'hola')
// localStorage.setItem("test1", 'hola')
// localStorage.setItem("test2", 'hola')
// para recuperar una key
// console.log(localStorage.getItem("test"))
// localStorage.clear()

// sessionStorage.setItem("test", 'hola')

document.addEventListener('DOMContentLoaded', () => {
    renderProduct()
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        renderCart()
    }
})

gridProduct.addEventListener('click', function (e) {
    // console.log(e.target.parentNode);
    if (e.target.classList.contains('btn-buy')) {
        createElementCart(e.target.parentNode)
        renderCart()
    }
})

listCart.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-minus')) {
        const id = e.target.dataset.id
        const product = cart[id]
        product.qty--
        if (product.qty !== 0) {
            cart[id] = { ...product }
            renderCart()
        } else {
            delete cart[id]
            renderCart()
        }
    }
    if (e.target.classList.contains('btn-plus')) {
        const id = e.target.dataset.id
        const product = cart[id]
        product.qty++
        cart[id] = { ...product }
        renderCart()
    }
})

const renderProduct = () => {
    listProducts.forEach(product => {
        const { id, url, name, price } = product
        templateProduct.querySelector('img').src = url
        templateProduct.querySelector('span').textContent = name
        templateProduct.querySelector("strong").textContent = `${price}`
        templateProduct.querySelector("button").dataset.id = id
        // colocar el nombre(name) en el producto 
        // añadir dataset id
        // añadir price
        const clone = templateProduct.cloneNode(true)
        fragment.appendChild(clone)
    })
    gridProduct.appendChild(fragment)
}

const createElementCart = (node) => {
    const id = node.querySelector('button').dataset.id
    const price = node.querySelector('strong').textContent
    const name = node.querySelector("span").textContent

    const product = { id, price: +price, name, qty: 1 }

    if (cart.hasOwnProperty(id)) {
        product.qty = cart[id].qty + 1
    }

    cart[id] = product
}


// {
//     1: {...},
//     2: {...},
//     3: {...},
//     4: {....},
// }
const renderCart = () => {
    // Objetos
    // console.log(Object.keys(cart))
    // console.log(Object.values(cart))
    // console.log(Object.entries(cart))
    // console.log(cart);
    listCart.innerHTML = ""
    Object.values(cart).forEach(product => {
        // id: "9", price: 90, name: "Platano", qty: 2
        const { id, price, name, qty } = product
        templateCartList.querySelector('.text-id').textContent = id
        templateCartList.querySelector('.text-name').textContent = name
        templateCartList.querySelector('.btn-minus').dataset.id = id
        templateCartList.querySelector('.text-qty').textContent = qty
        templateCartList.querySelector('.btn-plus').dataset.id = id
        templateCartList.querySelector('.text-total').textContent = qty * price
        const clone = templateCartList.cloneNode(true);
        fragment.appendChild(clone)
    })

    listCart.appendChild(fragment)
    localStorage.setItem("cart", JSON.stringify(cart))
    renderTotal()
}


const renderTotal = () => {
    totalCart.innerHTML = ""
    const qtyTotal = Object.values(cart).reduce((acc, { qty }) => acc + qty, 0)
    const total = Object.values(cart).reduce((acc, { qty, price }) => acc + qty * price, 0)
    templateTotal.querySelector('.text-qty').textContent = qtyTotal
    templateTotal.querySelector('.text-total').textContent = total
    const clone = templateTotal.cloneNode(true);
    fragment.appendChild(clone)
    totalCart.appendChild(fragment)
}


// tarea
// eliminar todos los productos del carrito con el boton clear (btn-clear)