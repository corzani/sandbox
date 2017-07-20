
PROPRIETA' DEGLI ARRAY

CONSTRUCTOR

il valore restituito dalla proprietà CONSTRUCTOR ci indica la natura della variabile che può essere un array, con numeri, o stringhe

esempio:

var somma = 5 + 4;
somma.constructor;

ci restituisce 

[function : Number]

var lista = [5 , 4];
lista.constructor;

ci restituisce 

[function : Array]

var parola = 'cinque'
parola.constructor;

ci restituisce 

[function : String]


