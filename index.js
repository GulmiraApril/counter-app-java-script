


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count; // my code 
}


// the same with above code scrimba code 
// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }


