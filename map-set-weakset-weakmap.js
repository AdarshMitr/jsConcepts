// Map, set, Weakset,Weakmap

//Set contains only unique values

//Object constructor


let myArray=[1,2,3,4,5,4]

let obj=new Set(myArray);

//console.log(obj.size);

obj.add(9);

obj.delete(1);


let obj1={name:'Adarsh'};
obj.add(obj1)
//console.log(obj)
//obj.clear();


//console.log(obj.has(1)); //false

// for(let new1 of obj){
//     console.log(new1)
// }


// obj.forEach((element)=>{
//     console.log(element)
// })


//map- key:value;

let myMap= new Map([['a1','Adarsh'],['a2','Vikram']]);

myMap.set('a3','Ramesh');
myMap.delete('a2');


//myMap.clear();
// console.log(myMap.get('a1')); ///Adarsh

// for(let [key,value] of myMap){
//     console.log(`key :${key},value :${value}`);
// }

// myMap.forEach((key,value)=>{
//     console.log(key,value)
// })


//WeakSet

//Only store Objects.
//It cannot be iterated.

let ws=new WeakSet();
var ob1={"name":"Lion"};
var ob2={};
// console.log(ws);
 //ws.add(1); //Invalid value

 ws.add(ob1);
 ws.add(ob2);
//  console.log(ws)
// console.log(ws.has(ob2)) //true


//WeakMap


let wm=new WeakMap();
let ob3={"name":"Tiger"};
let ob4={};
wm.set(ob3,"Private")
wm.set(ob4,"Private Data")
console.log(wm);

