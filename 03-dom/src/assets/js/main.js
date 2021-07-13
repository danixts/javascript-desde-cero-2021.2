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

