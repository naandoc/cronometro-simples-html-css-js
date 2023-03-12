const btnInit = document.querySelector(".init");
const btnPause = document.querySelector(".pause");
const btnReset = document.querySelector(".reset");

const fieldTime = document.querySelector(".time");

let second = 0;
let minute = 0;
let hour = 0;
let pauseTimeInterval;

const criaElement = (element) => {
    const el = document.createElement(element);
    return el;
}

const zeroLeft = number => number < 10 ? `0${number}` : number;

const time = (hour, minute, second) => {
    let hours = zeroLeft(hour) || zeroLeft(00);
    let minutes = zeroLeft(minute) || zeroLeft(00);
    let seconds = zeroLeft(second) || zeroLeft(00);

    return `${hours}:${minutes}:${seconds}`;
}

const exibTime = (hours, minutes, seconds) => {
    const span = criaElement("span");
    span.innerText = time(hours, minutes, seconds);
    fieldTime.appendChild(span);
}

const initTime = () => {
    fieldTime.style.color = "#000";
    const spanTimer = criaElement("span");
    pauseTimeInterval = setInterval(() => {
        fieldTime.innerHTML = ""
        if (second > 59) {
            second = 0;
            minute++;
        }
        if (minute > 59) {
            second = 0;
            minute = 0;
            hour++;
        }

        second++;

        spanTimer.innerHTML = time(hour, minute, second);
        fieldTime.appendChild(spanTimer);

        btnInit.disabled = true;
        console.log(second);
    }, 1000);
}
const pauseTime = () => {
    if (second > 1) {
        clearInterval(pauseTimeInterval);
        console.log(second);
        btnInit.disabled = false;
        fieldTime.style.color = "red";
    }
}

const resetTime = () => {
    pauseTime();
    fieldTime.style.color = "#000";
    fieldTime.innerHTML = "";
    second = 0;
    minute = 0;
    hour = 0;
    exibTime(hour, minute, second);
    btnInit.disabled = false;
}

btnInit.addEventListener("click", initTime);
btnPause.addEventListener("click", pauseTime);
btnReset.addEventListener("click", resetTime);

exibTime(hour, minute);



