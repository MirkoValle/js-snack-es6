// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadreSerieA = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Torino",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Sampdoria",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Genoa",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Udinese",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Verona",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Empoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Salernitana",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Spezia",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lecce",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

let squadraFalli = [];

squadreSerieA.forEach(squadra => {
    let squadraDettagli = {};
    squadra.puntiFatti = Number.parseInt(Math.random() * 80 + 1);
    squadra.falliSubiti = Number.parseInt(Math.random() * 30 + 1);

    squadraDettagli.nome = squadra.nome;
    squadraDettagli.falliSubiti = squadra.falliSubiti;

    squadraFalli.push(squadraDettagli);
});

console.log(squadraFalli)