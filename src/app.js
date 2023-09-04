const ADVICE_ID_EL = document.getElementById('id-js')
const ADVICE_EL = document.getElementById('advice-js')
const ADVICE_BTN = document.getElementById('advice-btn-js')
const LOADING_EL = document.getElementById('loading-js')
const ADVICE_CONTAINER = document.getElementById('advice-container-js')

async function getAdvice(){
    const ADVICE = await fetch('https://api.adviceslip.com/advice').then(a => a.json())
    return ADVICE
}

function loadAdvice(){
    getAdvice().then(newA => showAdvice(newA))
    ADVICE_BTN.disabled = true
    setTimeout(() => {
        ADVICE_BTN.disabled = false
    }, 2000);
}

function showAdvice(dados){
    if(ADVICE_CONTAINER.classList.contains('d-none')){
        LOADING_EL.classList.add('d-none')
        ADVICE_CONTAINER.classList.remove('d-none')
    }
    ADVICE_ID_EL.textContent = dados.slip.id
    ADVICE_EL.textContent = dados.slip.advice
}

ADVICE_BTN.addEventListener('click', loadAdvice)

loadAdvice()