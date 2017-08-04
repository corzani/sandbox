# PROPRIETA' DEGLI ARRAY

## CONSTRUCTOR

il valore restituito dalla proprietà CONSTRUCTOR ci indica la natura della variabile che può essere un array, con numeri, o stringhe

esempio:

```js
var somma = 5 + 4;
somma.constructor;
```

ci restituisce

[function : Number]

```js
var lista = [5 , 4];
lista.constructor;
```

ci restituisce

[function : Array]

```js
var parola = 'cinque'
parola.constructor;
```

ci restituisce

[function : String]

## LENGTH PROPERTY

restituisce il numero degli elementi di un array

```js
var utensili = [ "trapano", "martello", "sega", "cacciavite"];
utensili.lenght;
```

ci restituisce 

4

## ARRAY PROTOTYPE CONSTRUCTOR

il costruttore prototipo consente di aggiungere nuove proprietà e metodi
all'oggetto array

quando si crea una proprietà ,a tutti gli array verrà assegnata quella 
proprietà e il suo valore come predefinito

quando si crea un metodo, tutti gli array avranno questo metodo disponibile
array.prototype non si riferisce a un singolo array ma, all'oggetto array

prototype è un costruttore globale di oggetti disponibile per tutti gli oggetti
in js

```js
array.prototype.upperCase = function () {
    for (i = 0; i < this.length; i++){
        this[i] = this.[i].toUpperCase();
        }
    }

var frutta = [ "mela", "banana", "arancia"];
frutta.upperCase();
```
ci restituisce

MELA, BANANA, ARANCIA 
