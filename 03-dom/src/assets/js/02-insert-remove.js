const root = document.getElementById("root")
const span = document.querySelector("span")
const p = document.querySelector("p")
const app = document.getElementById("app")

// create element
const etiqueta = document.createElement('div')
etiqueta.textContent = "Esta es una etiqueta tipo div desde JavaScript"
etiqueta.classList.add("bg-green-800", "text-white", "px-4", "py-2", "mt-2")

root.appendChild(etiqueta)

// app.appendChild(etiqueta)

// insertBefore(nodeElement, nodeRef)

// root.insertBefore(etiqueta, p)

// 

// root.insertAdjacentElement(position, insertElement)
// root.insertAdjacentHTML(posistion, html)
// root.insertAdjacentText(position, text)

// postions -> afterend | afterend | beforebegin | beforeend

// root.insertAdjacentElement('afterend', etiqueta)
// root.insertAdjacentElement('beforebegin', etiqueta)

// root.insertAdjacentElement('afterbegin', etiqueta)
// root.insertAdjacentElement('beforeend', etiqueta)

// const lenguaje = "Typescript"

// root.insertAdjacentHTML('afterbegin', /* html */`<div
//       class="
//         bg-gradient-to-bl
//         from-yellow-500
//         to-yellow-700
//         text-white
//         px-4
//         py-2 rounded-md shadow-lg">
//       <h3>${lenguaje}</h3>
//       <span>Fecha: 12/07/2021</span>
//       </div>
// `)


// root.insertAdjacentText('afterbegin', 'Insertado desde AFTERBEGIN')

// remove()
// removeChild(node)
// replaceChild(new, old)

// Forma para remover elementos

// span.remove()
// root.removeChild(p)

// root.replaceChild(etiqueta, span)

// true -> clona todos sus hijos | false -> clona solo el node
// [node].cloneNode(boolean)

const cloneRoot = root.cloneNode(true)
app.appendChild(cloneRoot)

const img = document.createElement('img')
img.src = "https://www.tonica.la/__export/1584386415176/sites/debate/img/2020/03/16/goku_saludando_portada.jpg_463833556.jpg"
cloneRoot.appendChild(img)


// Atributos
let attr = app.hasAttributes()
attr = app.hasAttribute('data-name')
console.log("ATTR", attr);

const names = app.getAttributeNames();
console.log("NAMES", names);
console.log("SOLO UN ATTRIBUTO", app.getAttribute('id'));

// setAttribute('data-id', value)
// Agregar atributos
app.setAttribute('data-id', 1234567)
// Remover atributos
app.removeAttribute("class")

const prime = document.getElementById('prime')

const isPrime = (n) => {
    if (n === 0 || n === 1) return false
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false
    }
    return true
}

let index = 2
let count = 1
const limit = 20
while (count <= limit) {
    if (isPrime(index)) {
        let span = document.createElement('span')
        span.textContent = `${index}`
        span.setAttribute("class", 'm-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-sm p-2')
        // dataset
        prime.appendChild(span)
        if (count % 2 === 0) {
            span.dataset.prime = `${index}`
        }
        count++
    }
    index++
}


const primesSpans = prime.querySelectorAll('span')
primesSpans.forEach(span => {
    if (span.getAttribute('data-prime')) {
        // recuperar elemento
        console.log(span.dataset.prime);
        app.removeAttribute("class")
        span.setAttribute("class", 'm-2 bg-gradient-to-br from-yellow-600 to-yellow-800 text-white rounded-sm p-2')
    }
})