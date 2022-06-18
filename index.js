// $('#gen-n-btn').on('click', function (event) {
//     event.preventDefault();
// });

function getDigit() {
    fetch("https://random-data-api.com/api/number/random_number")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let items = document.querySelector("#gen-digit");
            let card = data.digit
            localStorage.setItem("digit", card)

            items.innerHTML = card;
        })
}

function showDigit() {
    getDigit();
}


function getNumber() {
    fetch("https://random-data-api.com/api/number/random_number")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let items = document.querySelector("#gen-number");
            let card = data.number
            localStorage.setItem("number", card)
            items.innerHTML = card;
        })
}

function showNumber() {
    getNumber();
}


function getName() {
    fetch("https://random-data-api.com/api/name/random_name")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let items = document.querySelector("#gen-name");
            let card = data.two_word_name
            localStorage.setItem("name", card)

            items.innerHTML = card;
        })
}

function showName() {
    getName();
}

function getFlag() {
    fetch("https://random-data-api.com/api/nation/random_nation")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let items = document.querySelector("#gen-flag");
            let card = data.flag
            // let str = card.stringify;
            localStorage.setItem("flag", card)
            items.innerHTML = card;
        })
}

function showFlag() {
    getFlag();
}

function getColor() {
    fetch("https://random-data-api.com/api/color/random_color")
        .then(response => {
            return response.json()
        })
        .then(data => {
            let items = document.querySelector("#gen-color");
            let card = data.color_name
            localStorage.setItem("color", card)
            items.innerHTML = card;
        })
}

function showColor() {
    getColor();
}


$(document).ready(function () {
    let items = document.querySelector("#gen-color");
    let card = localStorage.getItem("color")
    if (card != undefined) {
        items.innerHTML = card;
    }

    ///
    items = document.querySelector("#gen-digit");
    card = localStorage.getItem("digit")
    if (card != undefined) {
        items.innerHTML = card;
    }
    ///
    items = document.querySelector("#gen-number");
    card = localStorage.getItem("number")
    if (card != undefined) {
        items.innerHTML = card;
    }
    ///
    items = document.querySelector("#gen-flag");
    card = localStorage.getItem("flag")
    if (card != undefined) {
        items.innerHTML = card;
    }
    ///
    items = document.querySelector("#gen-name");
    card = localStorage.getItem("name")
    if (card != undefined) {
        items.innerHTML = card;
    }

});