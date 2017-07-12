/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function throwDie(max = 6){
    return  Math.floor(Math.random() * max) + 1;
}

function throwDice(volte = 6, max = 6) {
    var lista = [];
    for (var i = 0; i < volte; i++) {
        var randomNumber =

        lista.push(randomNumber);
    }
    lista.sort().reverse();
    return (lista);
}

for (var i = 0; i < 6; i++) {
    throwDice();
    var lista = throwDice();
    console.log(lista);


    function somma(lista) {
        var somma = lista[2] + lista[3] + lista[4] + lista[5];
        console.log(somma);

    }
    somma(lista);
}


let personaggio = {
    destrezza : 0,
    scoreggia: 0
};

personaggio.destrezza = throwDie(6);

console.dir(personaggio);

console.log("");

