import data from "./data"

let id = 1;
let id2 = 2;
let id3 = 1

// callbacks
const getPersonaje = (perId, callback) => {
    const per = data.find(({ id }) => id === perId)
    if (per) {
        callback(null, per)
    } else {
        callback(`No exite el personaje ${perId}`);
    }
}

getPersonaje(id, (err, personaje1) => {
    if (err) {
        return console.log(err)
    }
    getPersonaje(id2, (err, personaje2) => {
        if (err) {
            return console.log(err)
        }
        getPersonaje(id3, (err, personaje3) => {
            if (err) {
                return console.log(err)
            }
            console.log(`El personaje es ${personaje1.name} y es amigo de ${personaje2.name} y es enemigo de  ${personaje3.name}`);
        })
    })
})