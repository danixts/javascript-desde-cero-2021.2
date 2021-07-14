const body = document.body

document.addEventListener('mousemove', (e) => {
    body.style.setProperty('--mx', `${e.clientX}px`)
    body.style.setProperty('--my', `${e.clientY}px`)
})