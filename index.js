// console.log('hello world')

let count = 0
let counterText = document.querySelector('#counter')

function increase(){
    count += 1
    counterText.textContent = count
}

function decrease(){
    count -= 1
    counterText.textContent = count
}

function reset(){
    count = 0
    counterText.textContent = count
}

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.getElementById('minus-btn')
const resetBtn = document.querySelector('#reset-btn')

// console.log(plusBtn, minusBtn, resetBtn)

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

function selectTheme(event){
    const theme = event.target.textContent

    const body = document.querySelector('body')
    const main = document.querySelector('main')

    body.className = theme
    main.className = theme

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}

const buttons = document.querySelectorAll('.theme-buttons')

// console.log(buttons)

for(let i = 0; i < buttons.length; i++){
    console.log(buttons[i])
    buttons[i].addEventListener('click', selectTheme)
}