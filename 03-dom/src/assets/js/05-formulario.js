const form = document.querySelector('form')

// const name = document.getElementById('name')
// const age = document.getElementById('age')
// const planet = document.getElementById('planet')

// new FormData(formulario)


// {value: 'Goku',required: true, minLength: 2, maxLength:10, min:2, max:10}

function validate({ value, required, minLength, maxLength, min, max }) {
    let isValid = true
    if (required) {
        isValid = isValid && value.toString().trim().length !== 0
    }
    if (minLength !== null && typeof value === 'string') {
        isValid = isValid && value.length >= minLength
    }
    if (maxLength !== null && typeof value === 'string') {
        isValid = isValid && value.length <= maxLength
    }
    if (min !== null && typeof value === 'number') {
        isValid = isValid && value >= min
    }
    if (max !== null && typeof value === 'number') {
        isValid = isValid && value <= max
    }
    return isValid
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    const name = formData.get('name')
    const age = formData.get('age')
    const planet = formData.get('planet')
    const validateName = { value: name, required: true, minLength: 2, maxLength: 10 }
    const validateAge = { value: +age, required: true, min: 0, max: 100 }
    const validatePlanet = { value: planet, required: true, minLength: 6, maxLength: 20 }
    if (validate(validateName) && validate(validateAge) && validate(validatePlanet)) {
        const sendObject = { name, age, planet }
        alert(`Enviado correctamente\n${JSON.stringify(sendObject)}`)
    } else {
        console.log("NO PASA NADA!!");
    }
})