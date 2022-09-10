let billInput = document.querySelector('#bill-input')
let customInput = document.querySelector('.btns input')
let peopleNumberInput = document.querySelector('#people-number-input')
let resetBtn = document.querySelector('.reset-btn')
let tipAmount = document.querySelector('.tip-amount h1')
let total = document.querySelector('.total h1')

let billValue = 0.0
let tip = 0.15
let peopleNumber = 1

billInput.addEventListener('input',e=>{
    billValue = billInput.value
    calculateTip()
})
document.querySelector('.select-tip-part').addEventListener('click',e=>{
    if(e.target.tagName != 'BUTTON'){
        return
    }else{
        tip = parseFloat(e.target.innerText)/100
        calculateTip()
    }
})
customInput.addEventListener('input',e=>{
    tip = parseFloat(customInput.value)/100
    calculateTip()
})
peopleNumberInput.addEventListener('input',e=>{
    peopleNumber = peopleNumberInput.value
    calculateTip()
    if(peopleNumber == '0'){
        peopleNumberInput.classList.add('invalid')
        document.querySelector('.people-number-input p').innerText = 'Cant be zero'
    }else{
        peopleNumberInput.classList.remove('invalid')
        document.querySelector('.people-number-input p').innerText = ''
    }
})

function calculateTip(){
    if(peopleNumber >= 1){
        let tipAmountValue = (billValue * tip) / peopleNumber
        let totalValue = (billValue / peopleNumber) + tipAmountValue
        tipAmount.innerText = '$' + tipAmountValue.toFixed(2)
        total.innerText ='$' + totalValue.toFixed(2)
    }
}

resetBtn.addEventListener('click',e=>{
    billInput.value = ''
    billValue = 0.0
    customInput.value = ''
    tip = 0.15
    peopleNumberInput.value = ''
    peopleNumber = 1
    tipAmount.innerText = '$0.00'
    total.innerText = '$0.00'
    peopleNumberInput.classList.remove('invalid')
        document.querySelector('.people-number-input p').innerText = ''
})

