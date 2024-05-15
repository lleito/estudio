//1. Defina el tiempo esperado del horno en minutos

const EXPECTED_MINUTES_IN_OVEN = 40;

let remainingMinutesInOven = (remainingMinutesInOven, EXPECTED_MINUTES_IN_OVEN) => {
    return remainingMinutesInOven - EXPECTED_MINUTES_IN_OVEN;
}

const minutosPorCapa = 2;
const numeroDeCapas = 5;

let preparationTimeInMinutes = (numeroDeCapas, minutosPorCapa ) => {
    return numeroDeCapas * minutosPorCapa
}

let totalTimeInMinutes = (numeroDeCapas, remainingMinutesInOven) => {
    return numeroDeCapas + remainingMinutesInOven
}



console.log (totalTimeInMinutes)
// => 10