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

/* TEMPLATE */
const templateProduct = document.getElementById('template-product').content

const fragment = document.createDocumentFragment()

let cart = {}

document.addEventListener('DOMContentLoaded', () => {
    renderProduct()
})


const renderProduct = () => {
    listProducts.forEach(product => {
        const { id, url, name, price } = product
        templateProduct.querySelector('img').src = url
        // colocar el nombre(name) en el producto 
        // añadir dataset id
        // añadir price
        const clone = templateProduct.cloneNode(true)
        fragment.appendChild(clone)
    })
    gridProduct.appendChild(fragment)
}