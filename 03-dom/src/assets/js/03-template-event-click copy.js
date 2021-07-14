const app = document.getElementById('app')
const app2 = document.getElementById('app2')

const fragment = document.createDocumentFragment()

const ul = document.createElement('ul')

// Colocar siempre content en template
const templateLi = document.getElementById('template-li').content

for (let i = 1; i <= 20; i++) {
    const b = templateLi.querySelector('strong')
    const li = templateLi.querySelector('li')
    b.textContent = `✅ Item ${i}`
    li.dataset.id = `${i}`
    const cloneTemplate = templateLi.cloneNode(true)
    fragment.appendChild(cloneTemplate)
}

// ul.appendChild(fragment)
app.appendChild(fragment)
// app2.appendChild(ul)


const increment = document.getElementById('boton-increment')
const decrement = document.getElementById('boton-decrement')
const span = document.querySelector('span')

let count = 2

increment.addEventListener('click', () => {
    span.textContent = `${count++}`
    let index = 2
    const limit = 20
    while (count <= limit) {
        if (isPrime(index)) {
            let span = document.createElement('span')
            span.textContent = `${index}`
            span.setAttribute("class", 'm-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-sm p-2')
            app2.appendChild(span)
            count++
        }
        index++
    }
})

decrement.addEventListener('click', () => {
    span.textContent = `${count > 0 ? count-- : '0'}`
})

const isPrime = (n) => {
    if (n === 0 || n === 1) return false
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false
    }
    return true
}

