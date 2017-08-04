# METODI ARRAY 


## concat()

E' usato per concatenare 2 o più array , questo metodo ci restituisce un nuovo 
array che contiene gli elementi dell'array originale più quelli aggiunti 

```js
var fruttaEstiva = [ "melone", "cocomero"];
var fruttaInvernale = [ "arancia", "mela"];
var frutta = fruttaEstiva.concat(fruttaInvernale);
```
ci restituisce

melone, anguria, arancia, mela


## copyWhitin()

E' usato per copiare gli elemtni degli array all'interno degli array da una
posizione a un 'altra posizione ripetendola sempre con lo stesso numero di 
elementi dell'array preso in considerazione 

questo metodo è un po ostico e bisogna provarlo per capirlo bene, ma nulla di 
così complicato

```js
var utensili = [ "trapano", "martello", "sega", "cacciavite"];
utensili.copyWhitin(2,0);
```
ci restituisce

trapano, martello, trapano, martello

se al posto del 2 mettevo il 3 ci avrebbe restituito:

trapano, martello, sega, trapano

se fosse stato cosi (0,2):

sega, cacciavite, sega, cacciavite

se fosse stato cosi' (0,3):

ciacciavite, sega, martello, cacciavite


## every

è usato per verificare se tutti gli elementi dell'array superano o meno il test
se un solo elemento non supera il test il risultato sarà falso
non esegue funzioni con array senza valori, non cambia l'array originale

```js
var eta = [ 32, 33, 16, 40];
function maggiorenne(eta) {
    return eta >= 18;
}

function test(){
eta.every(maggiorenne);
}
```
ci restituisce

false

*N.B*

Creare funzioni (come maggiorenne) può essere conveniente quando vengono utilizzate più di una volta.
Javascript gestisce anche le cosiddette funzioni anonime (senza nome) che sono più immediate da leggere e da scrivere. Si possono usare quando come parametro dobbiamo usare una funzione come nel caso precedente.
La sintassi è

```js
// Multilinea

(parametro1, parametro2) => {
    ....
    return something;
}

// Singola linea

(parametro1, parametro2) => {return parametro1 + parametro2;}

```

La sintassi è simile a quella di una normale funzione senza la parola chiave `function` e con l'aggiunta della `=>`


L'esempio di prima si può riscrivere banalmente come

```js
[32, 33, 16, 40].every((eta) => {return eta >= 18;});

// o semplicemente

[32, 33, 16, 40].every((element) => eta >= 18);
```

Il secondo caso non contiene ne parentesi graffe ne return, è un modo più snello per scrivere espressioni esprimibili in una sola riga.

```js
(eta) => eta >= 18
```
equivale a:
```js
(eta) => {return eta >= 18;}
```


## fill()

serve per riempire l'array con un valore statico o gli posso dire quali elementi
dell'array conservare e quanti elementi voglio dentro l'array

```js
var utensili = [ "trapano", "martello", "sega", "cacciavite", "brusca"];
utensili.fill ( "pialla");
```
ci restituisce

 pialla, pialla, pialla, pialla, pialla

nel metodo seguente dico al terminale inseriscimi "pialla" dopo il secondo 
elemento fino ad arrivare al 4° compreso. questo metodo mi restituirà sempre
il numero tot degli elementi contenuti nell'array originale

```js
var utensili = [ "trapano", "martello", "sega", "cacciavite", "brusca"];
utensili.fill( "pialla",2,4);
```
ci restituisce

trapano, martello, pialla, pialla, brusca


## filter()

filtra o meglio crea un array inserendo all'interno tutti gli elementi 
dell'array che hanno superato il test.

non cambia l'array originale, non funziona se l'array è vuoto.

```js
var eta = [ 32, 33, 16, 40];

function maggiorenne(eta) {
    return eta >= 18;
}

function miaFunzione() {
    eta.filter(maggiorenne);
}
```
ci restituisce

32, 33, 40


## find()

da come risultato il primo elemento che nell'array supera il test

esegue la funzione una volta per ogni elemento dell'array , una volta arrivato 
restituisce il valore, se non lo trova da "undefined"

non cambia l'array originale, non va se l'array è vuoto.

```js
var eta = [ 3, 10, 22, 40];

function maggiorenne(eta) {
    return eta >= 18;
}

function miaFunzione() {
    eta.find(maggiorenne);
}
```
ci restituisce

22


## findIndex()

serve per sapere quanti elementi dell'array superano il test 

esegue per ogni elemento dell'array, se non lo trova darà come risultato -1

```js
var eta = [ 3, 10, 18, 20];

function maggiorenne(eta) {
    return eta >= 18;
}

function miaFunzione() {
    eta.findIndex(maggiorenne);
}
```
ci restituisce

2


## forEach() DA RIGUARDARE, NON CAPITO

chiama la funzione per ogni elemento dentro l'array 


## indexOf()

cerca l'item specificato dentro l'array muovendosi dall'inizio verso la fine.
molto simile al metodo lastIndexOf() 


## isArray

determina se un oggetto è un array

```js
function miaFunzione() {
    var utensili = [ "trapano", "martello", "sega", "cacciavite"];
    return array.isArray(utensili);
}
```
ci restituisce

true


## join()

questo metodo unisce gli elementi di una matrice in una stringa e restituisce
la stringa

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
var energia = frutta.join();
```
ci restituisce

banana, arancia, mela, mango


## lastIndexOf()

cerca nell'array uno specifico item e restituisce la sua posizione . la ricerca 
inizia nella posizione specificata o a fine array se non lo è e finisce 
all'inizio dell'array

se non trova nulla restituisce -1

se nell'array c'è più volte l'item ricercato, questo metodo restituisce quello
che si trova più vicino alla fine dell'array

consiglio: se uoi cercare a inizio array usa il metodo indexOf()

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
var a = frutta.lastIndexOf("mela");
```
ci restituisce

2


## map()

crea un nuovo array restituendo ciascun elemento dell'array modificato dalla 
funzione chiamata 

questo metodo richiama la funzione per ogni elemento dell'array, in ordine 
di sequenza

non funziona con array senza valori, non cambia l'array originale

```js
var numeri =[4,9,16,25];
function miaFunzione() {
    numeri.map(Math.sqrt);
}
```
ci restituisce

2,3,4,5


## pop()

rimuove l'ultimo elemento di un array e restituisce quelli rimasti

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.pop();
```
ci restituisce

banana, arancia, mela

questo metodo cambia la lunghezza di un array

consiglio: per rimuovere il primo elemento di un array usa shift()


## push()

aggiunge uno o più item a un array

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.push("kiwi");
```
ci restituisce

banana, arancia, mela, mango, kiwi


## reduce() (non capito)


## reduceRight() ( non capito)


## reverse()

inverte l'ordine degli elementi di un array

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.reverse();
``` 
ci restituisce

mango, mela, arancia, banana


## shift()

rimuove il primo elemento di un array e restituisce quelli rimasti
molto simile al metodo push()


## slice()

restituisce gli elementi di un array in un nuovo array

con questo metodo bisogna specificare l'elemento di partenza e quello finale, 
ma il nuovo array non include mai l'item finale.

l'array originale non viene cambiato 

```js
var frutta =[ "banana", "arancia", "limone", "mela", "mango"];
var agrumi = frutta.slice(1,3);
```
ci restituisce

arancia, limone


## some()

controlla se qualche elemento di un array supera il test restituendo vero o 
falso

esegue la funzione per ogni elemento dell'array, non esegue funzioni senza
valori, non cambia l'array originale

```js
var eta = [ 3, 10, 18, 20];
function maggiorenne(eta) {
    return eta >= 18;
}

function miaFunzione(){
eta.some(maggiorenne);
}
```
ci restituisce

true


## sort()

ordina un array ( sia numeri che stringhe) in ordine crescente o decrescente 

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.sort();
``` 
ci restituisce

arancia, banana, mango, mela

in ordine crescente per i numeri

```js
var numeri = [5,3,10,1];
numeri.sort(function (a,b) {return a-b});
```
ci restituisce

1,3,5,10

in ordine decrescente per i numeri

```js
var numeri = [5,3,10,1];
numeri.sort(function (a,b) {return b-a});
```
ci restituisce

10,5,3,1


## splice()

aggiunge/rimuove item in un array seguendo le posizioni specificate 

questo metodo cambia l'array originale

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.splice(2,0, limone, kiwi);
``` 
ci restituisce

banana, arancia, limone, kiwi, mela, mango

in posizione 2 , aggiungi items e rimuovine 1 

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.splice(2,1, limone, kiwi);
``` 
ci restituisce

banana, arancia, limone, kiwi, mango

in posizione 2 rimuovi 2 items

```js
var frutta =[ "banana", "arancia", "limone", "mela", "mango"];
frutta.splice(2,2);
``` 
ci restituisce

banana, arancia, mango


## toString()

converte un array in una stringa

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.toString();
``` 
ci restituisce

banana, arancia, mela, mango


## unshift()

aggiunge nuovi items all'inizio di un array , questo metodo cambia la 
lunghezza di un array

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
frutta.unshift("kiwi");
``` 
ci restituisce

kiwi, banana, arancia, mela, mango

consiglio: se vuoi aggiungere alla items alla fine usa push()


## valueOf

restituisce l'array così com è

```js
var frutta =[ "banana", "arancia", "mela", "mango"];
var a = frutta.valueOf();
``` 
ci restituisce

banana, arancia, mela, mango





