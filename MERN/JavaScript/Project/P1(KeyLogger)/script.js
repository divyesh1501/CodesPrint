const pressBtn1 = document.getElementById('pbtn1');
const pressBtn2 = document.getElementById('pbtn2');
const startBtn = document.getElementById('sbtn1');
const stopBtn = document.getElementById('sbtn2');


startBtn.addEventListener('click', () => {
    document.addEventListener('keydown', handleDown)
    document.addEventListener('keyup', handleUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
    document.removeEventListener('keydown', handleDown)
    document.removeEventListener('keyup', handleUp)
    pressBtn1.textContent = '';
    pressBtn2.textContent = '';
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

function handleDown(e) {
    pressBtn1.textContent = `key ${e.key} pressed down`;
    pressBtn2.textContent = `key is down`
}

function handleUp(e) {
    pressBtn1.textContent = `key ${e.key} pressed Up`;
    pressBtn2.textContent = `key is Up`
}