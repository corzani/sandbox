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
