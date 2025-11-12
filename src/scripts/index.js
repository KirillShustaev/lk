let estimation = document.querySelectorAll('.estim__level')

estimation.forEach(e => {
    if(e.textContent === "B") {
        e.classList.add("green")
    } else if(e.textContent === "C") {
        e.classList.add("yellow")
    }
})

let proc = document.querySelectorAll('.estim__proc')

proc.forEach(e => {
    if(e.textContent !== "") {
        e.classList.add("back_proc")
    }
})

let lastElemWithClass

for(let i = proc.length - 1; i >= 0; i--) {
    if(proc[i].classList.contains("back_proc")) {
        lastElemWithClass = proc[i];
        break
    }
}

lastElemWithClass.classList.add('lastElemLine')


