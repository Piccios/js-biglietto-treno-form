

const calcola = document.querySelector('button');

calcola.addEventListener('click', function () {
    let lengthEl = parseFloat(document.getElementById('travelLength').value);
    let ageEl = parseFloat(document.getElementById('customerAge').value)

    let ticketPrice = (lengthEl * 0.267113);

    if (ageEl < 21) {
        ticketPrice = ((ticketPrice * 24.552) / 100);
    } else if (ageEl > 63) {
        ticketPrice = ((ticketPrice * 37.893) / 100);
    }

    let ticketPriceRounded = Math.round(ticketPrice * 100) / 100;

    console.log(ticketPrice, ticketPriceRounded)

    console.log('CLICK!', lengthEl, ageEl, ticketPrice + '€', ticketPriceRounded + '€');

    document.getElementById('risultato').innerHTML = ("prezzo totale: ") + (ticketPrice + '€ ') + ("Prezzo arrotondato: ") + (ticketPriceRounded + '€ ')

})

