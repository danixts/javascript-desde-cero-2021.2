addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key')
    const note = document.querySelector('.note__text')

    window.addEventListener("keydown", (e) => {
        console.log(e.code);
        const audio = document.querySelector(`audio[data-key="${e.code}"]`)
        const key = document.querySelector(`.key[data-key="${e.code}"]`)
        if (!key) return
        note.textContent = `${key.dataset.note}`
        note.classList.add('active')
        // console.log(audio);
        // console.log(key.dataset.key);
        key.classList.add('active');
        audio.currentTime = 0
        audio.play()
    })

    keys.forEach(key => {
        key.addEventListener('transitionend', function (e) {
            this.classList.remove('active')
            note.classList.remove('active')
        })
    })

    // window.addEventListener('keypress', (e) => {
    //     console.log("KEYPRESS", e);
    // })

    // window.addEventListener('keyup', (e) => {
    //     console.log("KEYUP", e);
    // })
})