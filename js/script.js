// SNACK 1
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


//SNACK 2 
const students = [
    { id: 213, name: "Giuseppina della rovere", grades: 78 },
    { id: 110, name: "Paola Cortellessa", grades: 96 },
    { id: 250, name: "Andrea mantegna", grades: 48 },
    { id: 145, name: "Gaia Borromini", grades: 74 },
    { id: 196, name: "Luigi Grimaldello", grades: 68 },
    { id: 102, name: "Piero della Francesca", grades: 50 },
    { id: 120, name: "Francesca da Polenta", grades: 84 }
];

const namesTag = [];

for (const student of students) {
    namesTag.push(student.name.toUpperCase());
}
console.log(namesTag);

