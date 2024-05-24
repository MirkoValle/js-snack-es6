// BONUS 1: SNACK 5

// Abbiamo questa lista di articoli di moda:
// name        type      color
// Poppy       tshirt    red
// Jumping     occhiali  blue
// CrissCross  scarpe    black
// Jenny       borsa     pink
// Questi articoli sono inseriti in un array di oggetti.
// Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.

// BONUS 2
// Stampare in pagina oltre che in console!



const articoliDiModa = [
    { name: 'Poppy', type: 'tshirt', color: 'red' },
    { name: 'Jumping', type: 'occhiali', color: 'blue' },
    { name: 'CrissCross', type: 'scarpe', color: 'black' },
    { name: 'Jenny', type: 'borsa', color: 'pink' }
];

const articoliConCartellino = [];

articoliDiModa.forEach(articolo => {
    let articoloNuovo = { ...articolo };
    articoloNuovo.position = getRandomLetter();
    articoliConCartellino.push(articoloNuovo);
});

function getRandomLetter() {
    const lettere = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    let index = Math.floor(Math.random() * (lettere.length));
    return lettere[index];
};

console.log(articoliConCartellino);