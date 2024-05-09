
// Creo due variabili per la distanza e l'eta' del cliente

const customerTrip = parseInt( ('Quanti chilometri percorrerai?'))

const customerAge = parseInt( ('Quanti anni hai?'))

// Setto il costo del biglietto per km

let ticketPrice = (customerTrip * 0.267113);

// Setto uno sconto del 24.552% per i passeggeri con eta' minore di 21 anni e uno sconto del 37.893% per i passeggeri con eta' superiore a 63 anni

if (customerAge < 21) {
    ticketPrice = ((ticketPrice * 24.552) / 100);
} else if (customerAge > 63) {
    ticketPrice = ((ticketPrice * 37.893) / 100);
}

let ticketPriceRounded = Math.round(ticketPrice * 100) / 100;

console.log(ticketPrice, ticketPriceRounded)



// creati due input dove l'utente inserira' i suoi dati, creo due variabili con i rispettivi valori



// Creo un eventListener per il bottone di calcolo del costo

const calcola = document.querySelector('button');

calcola.addEventListener('click', function(){
    let length = document.getElementById('travelLength')
    let age = document.getElementById('customerAge')
    
    console.log('CLICK!', age.value, length.value);
})

