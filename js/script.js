
// Setto il costo del biglietto per km



// Setto uno sconto del 24.552% per i passeggeri con eta' minore di 21 anni e uno sconto del 37.893% per i passeggeri con eta' superiore a 63 anni




// creati due input dove l'utente inserira' i suoi dati, creo due variabili con i rispettivi valori


// Creo un eventListener per il bottone di calcolo del costo

const calcola = document.querySelector('button');

calcola.addEventListener('click', function(){
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

    document.getElementById('risultato').innerHTML = ( ticketPrice + '€', ticketPriceRounded + '€')
})

