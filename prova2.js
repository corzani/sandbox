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
        var randomNumber = throwDie(max);

        lista.push(randomNumber);
    }
    lista.sort().reverse();
    return (lista);
}

  function somma(lista) {
        var somma = lista[2] + lista[3] + lista[4] + lista[5];
        return somma;

    }

var attrib = [];
for (var i = 0; i < 6; i++) {
    attrib.push(throwDice());
}

/*var doppio = [1,2,3].map(function(elem){
    return elem * 2;
});
console.log(doppio);*/

let ordered = attrib.map(function(elem){
    return somma(elem);
}).sort(function(a, b){return a-b});

console.log (ordered);


/*let personaggio = {
    destrezza : 0,
    scoreggia: 0
};

personaggio.destrezza = throwDie(6);

console.dir(personaggio);

console.log("");*/
let abilities = {
strength : 0,
dexterity: 0,
constitution: 0,
intelligence: 0,
wisdom: 0,
charisma: 0
};

if (abilities.strength > 5 || abilities.charisma){
console.log ("ciao");
} else if ( abilities.strength  === 0 || abilities.charisma){
console.log ("bau");
}

/* so il modo più lungo per fare if condition, ma ne cerco uno più corto dove 
 * vorrei dire " se qualsiasi elemento di abilities è maggiore di 5 stampami 
 * ciccia" ..ecc naturalmente al posto di console.log poi uso return
 */
    
