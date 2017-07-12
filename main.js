/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function somma(lista) {
var somma = 0;

    for (element of lista){
       somma = somma + element; 
    }
    
return somma;
}

function p(){
    
    var p = 0;
    
    p = 1;
    
    {
       p = 2
    }
    
    for (var i = 0 ; i < 10; i++){      
        p++
    }
console.log(p)

}    

    

//console.log(somma ([1,2,3]) === 6);
//console.log(somma ([]) === 0);

p();