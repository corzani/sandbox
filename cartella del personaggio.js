
 
for (var i =0 ; i < 6 ; i++) {
function RandomNumber1 (){
   var lista =[];
for (var i =0 ; i < 6 ; i++) {
    var randomNumber = Math.floor(Math.random()*7);
   
   lista.push(randomNumber);
} 
lista.sort();
var somma = lista[2] + lista[3] + lista[4] + lista[5];
console.log (somma);

}
RandomNumber1();

}






