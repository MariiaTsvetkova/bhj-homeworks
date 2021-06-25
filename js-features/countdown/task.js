//timer();
extendedTimer();

function extendedTimer() {
    let initialTime = getInitialTime();

    let intervalId = setInterval(() => {
        if (!checkTime(initialTime)) {
            decrementSeconds(initialTime);
            setExtendedTimer(initialTime);
        }
        else {
            clearInterval(intervalId);
            downloadFile();
        }
    }, 1000);
}


function timer() {
    let value = getInitialValue();

    let timerId = setTimeout(function tick() {
        if (value > 0) {
            value -= 1;
            setTimerValue(value);
            timerId = setTimeout(tick, 1000);
        }
        else {
            clearTimeout(timerId);
            greeting();
        }

    }, 1000)
}


function getInitialValue() {
    const element = document.getElementById('timer');
    return +element.textContent;
}

function setTimerValue(value) {
    const element = document.getElementById('timer');
    element.textContent = value;
}

function greeting() {
    alert(`Вы победили в конкурсе `);
}

function getInitialTime() {
    const element = document.getElementById('timer');
    const value = element.textContent;

    let arr = value.split(':').map(p => +p);
    if (arr.length !== 3) {
        throw new Error('Incorrect time format')
    }

    const ticks = getTicks(arr);


    return new Date(ticks);
}

function getTicks(array) {
    const offset = new Date().getTimezoneOffset() / 60;
    return array[2] * 1000 + array[1] * 1000 * 60 + (array[0] + offset) * 1000 * 60 * 60;
}

function decrementSeconds(time) {
    time.setSeconds(time.getSeconds() - 1);
}

function setExtendedTimer(time) {
    const element = document.getElementById('timer');
    element.textContent = time.toLocaleTimeString('en-GB');
}

function checkTime(time) {
    return time.getHours() === 0 &&
        time.getMinutes() === 0 &&
        time.getSeconds() === 0;
}

function downloadFile() {
    const path = `countdown.rar`;
    this.location.assign(path);
}