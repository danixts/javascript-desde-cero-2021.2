// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => console.log(data.title))

const URL = 'https://jsonplaceholder.typicode.com/todos'
const getData = async () => {
    try {
        let res = await fetch(URL)
        return await res.json()
    } catch (err) {
        console.error(err)
    }
}

const app = document.getElementById('app')

const dataTest = [
    {
        "userId": 8,
        "id": 149,
        "title": "animi voluptas quod perferendis est",
        "completed": false
    },
    {
        "userId": 8,
        "id": 150,
        "title": "eos amet tempore laudantium fugit a",
        "completed": false
    },
]

async function render() {
    let todos = await getData()
    let template = ''
    todos.forEach(todo => {
        const templateTmp = /*html*/`
            <div class="flex flex-col bg-gray-700 p-2 shadow-lg rounded-md justify-between hover:bg-gray-700/70 transition-colors cursor-pointer">
                <div class="flex flex-row justify-between">
                    <span>${todo.userId}</span>
                    <span>${todo.id}</span>
                </div>
                <span class="text-center">${todo.title}</span>
                <span class="bg-red-500 p-2 rounded-md mt-4 ${todo.completed ? 'bg-green-500' : 'bg-red-500'} text-center">${todo.completed ? 'SI' : 'NO'}</span>
            </div>
        `
        template += templateTmp
    })
    app.innerHTML = template
}

render()

// GET --> llamar
// POST --> enviar
// PUT -> actulizar
// DELETE -> eliminar

// PATCH --> POST | PUT