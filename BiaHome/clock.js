const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const Greeting = document.getElementById('greet')


const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    dateEl.innerHTML =`${days[day]}, ${months[month]} <span class="circle">${date}</span>`

    if (hours > 11) Greeting.innerHTML = 'Boa tarde Bia';
    if (hours > 17) Greeting.innerHTML = 'Boa noite Bia';
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)