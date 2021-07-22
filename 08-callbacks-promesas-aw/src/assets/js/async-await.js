const data = [
    { id: 1, name: 'Natzu' },
    { id: 2, name: 'Erza' },
    { id: 3, name: 'Happy' },
    { id: 4, name: 'Zeref' },
]

// async await
const getPersonaje = async (perId) => {
    const per = data.find(({ id }) => id === perId)
    if (per) {
        return per
    } else {
        throw `No exite el personaje ${perId}`
    }
}

// const personaje = document.getElementById("personaje")

let personaje = null
getPersonaje(7)
    .then(res => personaje = res)
    .catch(err => console.error(err))

const ids = [1, 3, 4]

const arrPersonajes = async () => {
    const arrPers = []
    for (let id of ids) {
        const per = await getPersonaje(id)
        arrPers.push(per)
    }
    return arrPers
}

console.time('await')
arrPersonajes().then(per => {
    console.log(per)
    console.timeEnd('await')
})

async function getPersonajeData(id) {
    try {
        const per = await getPersonaje(id)
        return per
    } catch (err) {
        console.error(err)
        return {
            status: 400,
            err
        }
    }
}

console.log(getPersonajeData(3));