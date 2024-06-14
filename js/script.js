const numBtns = document.querySelectorAll('.number')
const equalBtn = document.querySelector('.equal')
const answerBtn = document.querySelector('#answer')
const clearBtn = document.querySelector('#clear')

numBtns.forEach(element => {
    element.addEventListener('click', function() {
        display(this.value)
    })
});

equalBtn.addEventListener('click', function() {
    solve()
})

clearBtn.addEventListener('click', function() {
    clearDisplay()
})

function display(value) {
    answerBtn.value += value
    return value
}

function solve() {
    let x = answerBtn.value
    let y = eval(x)
    answerBtn.value = y
    return y
}

function clearDisplay () {
    answerBtn.value = ''
}