let count = 0
let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")
let incrementBtn = document.querySelector('#increment-btn')
let saveBtn = document.querySelector('#save-btn')

incrementBtn.addEventListener("click", increment)

function increment() {
    count += 1
    countEl.textContent = count
}

saveBtn.addEventListener("click", save)

function save() {
    let countStr = " " + count + " "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
}