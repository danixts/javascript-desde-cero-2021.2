import data from "./data"

// Promesas
// const getPersonaje = (perId, callback) => {
//     const per = data.find(({ id }) => id === perId)
//     if (per) {
//         callback(null, per)
//     } else {
//         callback(`No exite el personaje ${perId}`);
//     }
// }

const getPersonaje = (perId) => {
    const per = data.find(({ id }) => id === perId)
    return new Promise((resolve, reject) => {
        if (per) {
            resolve(per)
        } else {
            reject(`No exite el personaje ${perId}`)
        }
    })
}

let id = 5;

// promesas
// then -> si todo esa ok
// catch -> si ocurre algun error
// finally -> se ejecuta el final
const personaje = document.getElementById("personaje")
getPersonaje(id).then((per1) => {
    // console.log("Personaje", per1)
    personaje.textContent = per1.name
    getPersonaje(3).then(per2 => {
        personaje.textContent = `El personaje ${per1.name} y es amigo de ${per2.name} `
    }).catch(err => console.error(err))
}).catch((err) => {
    personaje.textContent = err
    console.error("ERROR", err)
}).finally(() => {
    console.log("Fin de promesa")
})


// Event Loop
// Promise.all([...promesas])
console.log("Promise.all")
Promise.all([getPersonaje(1), getPersonaje(7)])
    .then(([per1, per2]) => console.log(`[ALL] El personaje ${per1.name} es amigo de ${per2.name} `))
    .catch(err => {
        console.log(err)
    }).finally(() => {
        console.log('FINAL')
    })


const natzu = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Natzu medio"), 1000)
})

const gray = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Gray lento"), 3000)
})

const erza = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Erza rapida") }, 2000) // setTimeout(() => {}, time in ms)
})

// console.time('promesas')
erza.then((res) => console.log(res))
natzu.then((res) => console.log(res))
gray.then((res) => console.log(res))
// console.timeEnd('promesas')

// Promise.race([...promesas])
Promise.race([erza, natzu, gray]).then(res => {
    console.log('RACE', res)
})