/*jshint esnext: true */
/*jshint devel: true */

'use strict';// kötött mód, szigorúbbak a szabályok, érdemes használni

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

let valami = "adsda";
valami = parseInt(valami);
console.log(valami);
console.log(typeof(valami));

szam = 5 + 6 + 7; // szam <- 5 + 6 + 7 
// a szam valtozo megkapja az egyenlőségjel jobb oldalán lévő eredményt

// két vátozó értékét igy lehet kicserélni
let a = 3;
let b = 10;
let c;

console.log("csere elott> a = "+a+" b = "+b);

c = a;
a = b;
b = c;

console.log("csere utan> a = "+a+" b = "+b);

//vátozó típusok: number, string, boolean

let igazhamis = true

if ( a > 5 && a < 20 ) {
console.log (" a 5 es 20 kozott van");
} else {
console.log ("lofasz");
}
let nev = "geza";
if ( nev === "geza" ) {
console.log("geza nincs itt");
}

// változo tipus: tömb ( array)

let tomb = [12, 32, 54, 33, 66]
let tomb2 = [12, "szoveg", true, 22, 55, 13]

console.log("a tomb : "+tomb);
console.log("a tomb tipusa: "+typeof(tomb));
console.log("a tomb elemeinek szama "+tomb.length);

let vanbenne = false;
// for ciklus
// i++ azt jelenit hogy egyessével
for ( let i = 0; i<tomb.length; i++) {
console.log("a tomb "+i+"-edik eleme : "+tomb[i]);
if ( tomb[i] === 12) {
vanbenne=true;
}
}
if (vanbenne) {
	console.log("van a tombben 12");
}
// mail -s "level targya" email@emil.com < alapok.js

console.log("a gyumolcs: "+gyumolcs); // undefined, mert már létezik a változó csak nem kapott értéket
var gyumolcs = "alma"; // ha var-al dekralálunk valamit arra érvényes a hoisting még strict modban is
	//hoisting: bizonyok változók vagy fügvények előbb jönnek létre mint ahogy lefut a kód
	// semicolon insertion (automatikus pontosvessző beillesztés)

console.log("ez egy sor\nez egy uj sor\tez egy tabbal beljebb van"); // \n: uj sor, \t: tab
console.log("XXXXXXXXXXXXXXXX\rValami"); // \r carrige return 


szam++; // rovidites: szam = szam + 1;
console.log("szam: "+szam);
console.log("szamhoz hozzaadok 1et, de elotte kiirom a szamot");
console.log(szam++);
console.log("szamhoz hozzaadok 1et, majd kiirom az eredmenyt");
console.log(++szam);

//ciklusok
let j = 0
while ( j < tomb.length ) {
console.log("szia");
	j++;
}

let osztalyzatok =[3,3,4,5,5,5,"2"];
let kettesek = 0;
let harmasok = 0;
let negyesek = 0;
let otosok = 0;

for( let i=0; i<osztalyzatok.length; i++) { // for-on belüli ciklus változonak lehet le i=0 több helyen is
	if( osztalyzatok[i] === 2 ) {
	kettesek++;
  } 
	if( osztalyzatok[i] === 3 ) {
        harmasok++;
  }
	if( osztalyzatok[i] === 4 ) {
        negyesek++;
  }
	if( osztalyzatok[i] === 5 ) {
        otosok++;
  }
	
}

console.log("a kettesek szama: "+kettesek);
console.log("a harmasok szama: "+harmasok);
console.log("a negyesek szama: "+negyesek);
console.log("az otosok szama: "+otosok);

var koszones = function(szoveg) {
	console.log("hello "+szoveg+"!");
}

let keresztnev = "Pista";
koszones(keresztnev); // ez nem hasznalhato csak miutan deklaraltuk a fuggvenyt(not hoisted)
koszones("Laci");


osszegzes(4, 5); // ez mar itt hasznalhato pedig csak kesobb deklaraltuk a fuggvenyt (hoisted)

function osszegzes(szam1, szam2) { // function statement
	if ( (typeof(szam1) === 'number') && (typeof(szam2) === 'number')) {	
	let eredmeny = szam1 + szam2;
	console.log("a ket szam osszege: "+eredmeny);
	} else {
	console.log("error: nem szamokat kaptam");
	}
}

//camelCasing = mindenMasodikSzotNagyBetuvelKezdek
 function convertToNumber(szam1, szam2) {
	szam1 = parseInt(szam1);
	szam2 = parseInt(szam2);
	if (isNaN(szam1)) {
	 szam1 = 0;
	}
	if (isNaN(szam2)) {
	 szam2 = 0;
	}
  return [szam1, szam2];
}

let eredmenyek = convertToNumber(2, "34");
console.log(eredmenyek);

// function statementet használunk:
function pontosIdo() {
  let ido = 5; // lokalis valtozo csak a fuggvenyen belul van ertelme
  let honap = "januar";
 // return ido; // a fuggveny visszateresi erteke
 function pontosDatum() {
let datum = "hetfo";
console.log("a pontos ido:"+honap+", "+datum+", "+ido+" óra");
}
pontosDatum();
}

pontosIdo()
//console.log(ido); // az ido valtozo itt mar nem letezik
//pontosDatum(); // a pontosDatum fugveny itt nem letezik!!

// function expression-t használunk:
let pontosIdo2 = function() {
let ido = 5; // lokalis valtozo csak a fuggvenyen belul van ertelme
let honap = "januar"; // ezt a változót a belső függvény is látja
let pontosDatum2 = function() {
let datum = "hetfo";
console.log("a pontos ido:"+honap+", "+datum+", "+ido+" óra");
}
pontosDatum2();
}

//CLOSURE: egy fügvény, ha egy másik fügvényben van benne, akkor a külső fügvény változóihoz hozzáfér a belső fügvény.
 
pontosIdo2();                                                           



let szamHozzaadas = function() {
 let szam1 = 5;
 return function(n) {
  return szam1+5;
 };
}(); //létrehozok egy fügvényt és azonnal meghivom
// "immediately invoked function expression": IIFE

console.log("Szam hozzaadas: "+szamHozzaadas(5) );


// objektumok

// adattipusok: number, string, array, bool, NaN

let myObject = {}
console.log(typeof (myObject)); // a typeof függvény, az array tipusu elemek esetén is object-et ad vissza

let player = {
	"name": "Jim", // kulcs érték párok (key: name, value: Jim)
	"health": 100,
	"alive": true
}
console.log("az uj jatekos neve: "+player.name);
let shot = Math.floor((Math.random() * 200 ) +1); // egy veletlenszeru szam 1 es 200 kozott
if (player.alive) {
  console.log(shot+"-al meglőttük "+player.name+"-t");
  player.health = player.health - shot;
  if (player.health < 0) {
    player.alive = false;
  }
}
if (!player.alive) {
 console.log(player.name+" is dead!!!!!") ;
} else {
 console.log(player.name+" is alive! Hurray") ;
}

for (let key in player) { // this is how we do it
  console.log("checking : "+key+" ...");
  console.log(key+" értéke: "+player[key]);
}

let animals = [

  {neve: "Buffy", fajtaja:"macska"},
  {neve: "Fluffy", fajtaja:"kutya"},  
  {neve: "Jago", fajtaja:"madar"},  
  {neve: "Lori", fajtaja:"madar"},  
  {neve: "Barni", fajtaja:"macska"},  
  {neve: "Cirmos", fajtaja:"macska"},  
]
console.log("============all animals===========\n");
console.log(animals);

let kutyak = []
for( let animal of animals) { // egy animal valtozo fogja tartalmazni az animals tomb aktualis elemet
  if( animal.fajtaja === "kutya") {
    kutyak.push(animal) // a tomb végére hozzafuzok egy elemet
	}
}

console.log("=============all dogs=========\n")
console.log(kutyak);

player.level = 1; // kibővítettük a player object-et egy új property-vel
console.log(player.name+" jatekos szintje: "+player.level);
player.levelup = function() {
  player.level = player.level + 1;
}

player.levelup()
console.log(player.name+" jatekos szintje: "+player.level);

for (let key in player) { //this is how you loop trough an object by key
  console.log("checking: "+key+" ... ");
  console.log(key+" értéke: "+player[key]);
}

// functional programming

kutyak = []
kutyak = animals.filter( function(animal)  {
  return animal.fajtaja === "kutya" // csak akkor adom vissza a tömb elemét ha a fajtája kutya 
})

console.log("=============all dogs=========\n"); // https://www.youtube.com/watch?v=BMUiFMZr7vk #kattincsárám
console.log(kutyak);

let kutyaE = function(animal) {
  return animal.fajtaja === "kutya";
}
kutyak = animals.filter(kutyaE)


// javascript object ES5 -- EcmaScript 2014

var Cat = function(name) {
  this.name = name;
  this.color = "black";
  this.walk = function () {
	return console.log(this.name+" is walking...");
	}
	this.meow = function () {
	return console.log(this.name+" says: MEOWWW!!!!!");
	}
	Object.defineProperty(this, 'legscount', { // this.legscount = 4
	 value: 4,
	 writable: false,
	 enumerable: false,
	 configurable: true
	});
};

Cat.prototype.purr = function() {
	return console.log(this.name+"says: BRRRRRRRRRRR!!");
}


let cat1 = new Cat("Cirmi");
console.log(cat1.name+" szine: "+cat1.color);
cat1.color = "white";
console.log(cat1.name+" szine: "+cat1.color);

console.log(cat1.name+" lábainak száma: "+cat1.legscount);
// cat1.legscount = 5 // men modosithato a legscount, ez a sor hibát okoz
cat1.meow();
cat1.meow = "hi"; //elbassza a meow függvényt;

let cat2 = new Cat("Orban Viktor");
cat2.meow();
cat2.purr();
cat2.purr = "hi";
cat1.purr();
console.log(Object.keys(cat1)); // purr itt azért nincs mert az a Cat.prototype-hoz lett hozzáadva, és nem másolódik le a cat1-be

// object inheritance: objektum öröklődés

let mutantCat = function(name) {
  Cat.call(this, name);
  Object.defineProperty(this, 'legscount', {
   value: 4,
   writable: true,
   enumerable: true,
   configurable: true
  });
};


// prototype is an encaptulation of properties that an object links to.
mutantCat.prototype = Object.create(Cat.prototype);
mutantCat.prototype.constructor = mutantCat;


let mutantCat1 = new mutantCat("Simicska Lajos");
mutantCat1.legscount = 6;
console.log(mutantCat1.name+" lábainak száma: "+mutantCat1.legscount);


// ------------------ Object Creation ES6, EcmaScript2015 --------//

class Dog {
  constructor(name) {  // ez a függvény automatikusan lefut, amikor létrehozunk egy objectum peldanyt
   this.name = name;
   Object.defineProperty(this, 'legscount', {
      value: 4,
      writable: false,
      enumerable: true,
      configurable: true
   });
  }; // constructor vége
  bark () { //es6-ban ez automatikusan prototype!!!!!!!
   console.log(this.name+" ugat: VAU VAU!!!");
  };  
};

let dog1 = new Dog("Max");
dog1.bark();
//dog1.legscount = 6;
console.log(dog1.name+" lábainak száma: "+dog1.legscount)

class MutantDog extends Dog {
  constructor(name) {
  // in a child class constuctor, "this" cannot be used until super is called.
  super(name) 
   Object.defineProperty(this, 'legscount', {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
 speak(){ 
  console.log(this.name+" Beszélni is tud");
  };
};

let mutantDog1 = new MutantDog("Mutáns Kutya");
mutantDog1.bark();
mutantDog1.legscount = 67;
console.log(mutantDog1.name+" lábainak száma: "+mutantDog1.legscount)
mutantDog1.speak();


// https://en.wikipedia.org/wiki/Object-oriented_programming


















