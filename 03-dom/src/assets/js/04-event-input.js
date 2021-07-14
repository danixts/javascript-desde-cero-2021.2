const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const textValue = document.getElementById('text-value')
const box = document.getElementById('box')

function renderBackground() {
    const r = red.value
    const g = green.value
    const b = blue.value

    box.style.borderWidth = `${r / 10}px`
    red.nextElementSibling.textContent = `${r}`
    green.nextElementSibling.textContent = `${g}`
    blue.nextElementSibling.textContent = `${b}`

    textValue.textContent = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = `rgb(${r},${g},${b})` // rgba(0,0,0)
}

red.addEventListener('input', renderBackground)
green.addEventListener('input', renderBackground)
blue.addEventListener('input', renderBackground)