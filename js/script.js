const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
let guestsList = []

guests.forEach((guest, index) => {
    singleGuest = {};

    singleGuest.tableName = "Tavolo Vip";
    singleGuest.guestName = guest;
    singleGuest.place = index + 1;

    guestsList.push(singleGuest);
});

console.log(guestsList);