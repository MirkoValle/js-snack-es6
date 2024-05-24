// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const biciDaCorsa = [
    { nome: "Specialized S-Works Tarmac", peso: 6.8 },
    { nome: "Cannondale SuperSix EVO", peso: 6.7 },
    { nome: "Trek Emonda SLR", peso: 6.6 },
    { nome: "Pinarello Dogma F12", peso: 6.9 },
    { nome: "Giant TCR Advanced SL", peso: 6.8 },
    { nome: "Canyon Ultimate CF SLX", peso: 6.7 },
    { nome: "Bianchi Oltre XR4", peso: 6.9 },
    { nome: "Colnago V3Rs", peso: 6.8 },
    { nome: "Scott Addict RC", peso: 6.9 },
    { nome: "Merida Reacto Team-E", peso: 6.8 }
];

let biciLeggera;

biciDaCorsa.forEach(bici => {
    if (typeof (biciLeggera) == "undefined" || bici.peso < biciLeggera.peso) {
        biciLeggera = bici;
    }

});

console.log(`La bici con il peso minore è ${biciLeggera.nome} con peso ${biciLeggera.peso}`)