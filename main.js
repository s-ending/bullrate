
// Elements
const roundElem = document.getElementById("round");
const onebullElem = document.getElementById("onebull");
const lowtonElem = document.getElementById("lowton");
const hattrickElem = document.getElementById("hattrick");
const totalElem = document.getElementById("total");
const bullrateElem = document.getElementById("bullrate");
const flightElem = document.getElementById("flight");

const nobullBtn = document.getElementById("nobull-btn");
const onebullBtn = document.getElementById("onebull-btn");
const lowtonBtn = document.getElementById("lowton-btn");
const hattrickBtn = document.getElementById("hattrick-btn");
const resetBtn = document.getElementById("reset-btn");

function getFlight(bullrate) {
    const params = {
        "fl": "",
        "rt": ""
    };
    if (bullrate < 8.33) {
        params.fl = "C";
        params.rt = "1";
    } else if (bullrate < 12.50) {
        params.fl = "C";
        params.rt = "2";
    } else if (bullrate < 16.67) {
        params.fl = "C";
        params.rt = "3";
    } else if (bullrate < 20.83) {
        params.fl = "CC";
        params.rt = "4";
    } else if (bullrate < 25.00) {
        params.fl = "CC";
        params.rt = "5";
    } else if (bullrate < 29.17) {
        params.fl = "B";
        params.rt = "6";
    } else if (bullrate < 33.33) {
        params.fl = "B";
        params.rt = "7";
    } else if (bullrate < 37.50) {
        params.fl = "BB";
        params.rt = "8";
    } else if (bullrate < 41.67) {
        params.fl = "BB";
        params.rt = "9";
    } else if (bullrate < 45.83) {
        params.fl = "A";
        params.rt = "10";
    } else if (bullrate < 50.00) {
        params.fl = "A";
        params.rt = "11";
    } else if (bullrate < 54.17) {
        params.fl = "A";
        params.rt = "12";
    } else if (bullrate < 60.00) {
        params.fl = "AA";
        params.rt = "13";
    } else if (bullrate < 65.83) {
        params.fl = "AA";
        params.rt = "14";
    } else if (bullrate < 71.67) {
        params.fl = "AA";
        params.rt = "15";
    } else if (bullrate < 77.50) {
        params.fl = "SA";
        params.rt = "16";
    } else if (bullrate < 83.33) {
        params.fl = "SA";
        params.rt = "17";
    } else {
        params.fl = "SA";
        params.rt = "18";
    }
    return params;
}

nobullBtn.onclick = () => {
    // Rounds
    round = Number(roundElem.innerHTML);
    roundElem.innerHTML = round + 1;
    // Total
    const sum = Number(totalElem.innerHTML);
    // Bullrate
    const bullrate = (sum / ((round + 1) * 3) * 100).toFixed(2);
    bullrateElem.innerHTML = bullrate;
    // Flight
    const params = getFlight(bullrate);
    flightElem.innerHTML = `${params.fl} (${params.rt})`;
}

onebullBtn.onclick = () => {
    // Rounds
    round = Number(roundElem.innerHTML);
    roundElem.innerHTML = round + 1;
    // Total
    const sum = Number(totalElem.innerHTML) + 1;
    totalElem.innerHTML = sum;
    // Award
    onebullElem.innerHTML = Number(onebullElem.innerHTML) + 1;
    // Bullrate
    const bullrate = (sum / ((round + 1) * 3) * 100).toFixed(2);
    bullrateElem.innerHTML = bullrate;
    // Flight
    const params = getFlight(bullrate);
    flightElem.innerHTML = `${params.fl} (${params.rt})`;
}

lowtonBtn.onclick = () => {
    // Rounds
    round = Number(roundElem.innerHTML);
    roundElem.innerHTML = round + 1;
    // Total
    const sum = Number(totalElem.innerHTML) + 2;
    totalElem.innerHTML = sum;
    // Award
    lowtonElem.innerHTML = Number(lowtonElem.innerHTML) + 1;
    // Bullrate
    const bullrate = (sum / ((round + 1) * 3) * 100).toFixed(2);
    bullrateElem.innerHTML = bullrate;
    // Flight
    const params = getFlight(bullrate);
    flightElem.innerHTML = `${params.fl} (${params.rt})`;
}

hattrickBtn.onclick = () => {
    // Rounds
    round = Number(roundElem.innerHTML);
    roundElem.innerHTML = round + 1;
    // Total
    const sum = Number(totalElem.innerHTML) + 3;
    totalElem.innerHTML = sum;
    // Award
    hattrickElem.innerHTML = Number(hattrickElem.innerHTML) + 1;
    // Bullrate
    const bullrate = (sum / ((round + 1) * 3) * 100).toFixed(2);
    bullrateElem.innerHTML = bullrate;
    // Flight
    const params = getFlight(bullrate);
    flightElem.innerHTML = `${params.fl} (${params.rt})`;
}

resetBtn.onclick = () => {
    location.reload();
    return;
}

