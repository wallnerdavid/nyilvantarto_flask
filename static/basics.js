'use strict' // kötött mód, szigorúbbak a szabályok, érdemes használni

console.log("Hello Bazdmeg");

// globális változó lesz a szöveg!! a kódban MINDENHOL elérhető lesz a szöveg változó
// szoveg = "ez itt egy szoveg";
// deklarálás=változot létrehozunk

//újra deklarálható szöveg lesz
var szoveg2 = "ez egy uj sor";
szoveg2 = "uj erteket kap a szoveg2";
var szoveg2 = "ez egy uj szoveg uj ertekkel";
console.log(szoveg2);

//nem lesz ujra deklarálható
let szoveg3 = "ez egy nem ujra deklaralhato szoveg, let kulcsszoval hoztuk létre";
// ez nem működik mert már deklaráltuk a szöveg3-mat
// let szoveg3 = "ez egy nem ujra deklaralhato szoveg";

//uj értéket ado a szöveg3 változóban
szoveg3 = "hajnananananan";
console.log(szoveg3);

// ezzel statikus szoveget es valtozo tartalmat is ki lehet iratni:
console.log("a szoveg3 tartalma: "+szoveg3); // string összefűzés

// a typeof fügvény kiírja a változó tipusát
console.log("a szoveg3 TIPUSA: "+typeof(szoveg3) );
// string: karakterlánc (1 vagy több karakterekből álló adat)

let szam =1;
let szam2 = "1";
console.log("a szam valtozo tartalma: "+szam);
console.log("a szam TIPUSA: "+typeof(szam) );
console.log("a szam2 TIPUSA: "+typeof(szam2) );

szam = szam +1;
console.log("a szam valtozo tartalma: "+szam);
szam2 = szam2 +1;
console.log("a szam2 valtozo tartalma: "+szam2);

// az utasítások végére ; jelet kell tenni, lefut ezek nélkül is a kód (semicolon insertion)
// de hibalehetőség!!!

console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );

//stringet számmá alakítani:
szam2 = parseInt(szam2);
//parseInt függvény: számmá alakítja azt amit beadunk neki
console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );








