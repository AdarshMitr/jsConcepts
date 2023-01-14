let person=["Ankit","Sumit","Suneel","Bimal","Pankaj","Vinod","Lavkush"];



// To String Method



//console.log(person.toString());
//document.getElementById('show').innerHTML= person.toString();

//document.querySelector('#show').innerHTML=person.toString();



// join() method-
//joins all array elements into a string.We can also apply a separator between elements.



// document.getElementById('show').innerHTML=person.join('/ ');

//document.getElementById('show').innerHTML=person.join('');

// console.log(person);
// person.pop();
// console.log(person.pop());
// person.pop();
// console.log(person);
// console.log(person.push('Atal'));
// console.log(person);
// person.shift();
// console.log(person);
// person.unshift('Renu');
// console.log(person);
// console.log(person.unshift('Rohit'));
// console.log(person);
// console.log(`${person[0]} , ${person[3]}`);
// console.log(person.length);
// console.log(delete person[2]);
// console.log(person);
// console.log(delete person[10]);
// console.log(person);

const boys=['Golu','Chotu','Molu'];
const girls=['Lata','Pari','Gudiya'];
const group=person.concat(girls,boys,'Adarsh');



//splice(); method
//It removes,adds/replaces elements in an array.
//group.splice(0,0,'First')

//console.log(group.splice(-2));
//group.splice(3,0,'Mangal');
//let whonot=group.slice(1);

//console.log(whonot);
// let sliced= group.slice(2,5);
// console.log(group);
// console.log(sliced);

//sort(); used to sort array alphabetically
// girls.sort();
// girls.reverse();

// console.log(girls);
// // numeric sort();
 const num=[70,100,1,556,849,35,75];
// num.sort();
// function numSort(a,b){
// return a-b;
// }
// console.log(num);
// //reverse a sorted number array

//  function revsort(a,b){
//     return b-a;
// }

// num.sort(revsort);
// console.log(num);

// //heighest array element
// const hiNum=num[num.length-1];
// console.log(hiNum);
// //Lowest array element
// const lowNum=num[0];
// console.log(lowNum);

// another number sorting method
// const maxN=Math.max.apply(null,num);
// console.log(maxN)
// const minN=Math.min.apply(null,num);
// console.log(minN);

 
 // Array.forEach(); to list all elements of the array
  //num.forEach(list=>console.log(list));


  //Array.map(); method
  // It does not change the original array. Rather it creates a new array performing a function on each elements.
//   const notes=[20,100,500,2000,10,5,2,1,50];
//  const dblNotes= notes.map(dblfunc);
//   function dblfunc(notes){
//     return notes*2};
    
//   console.log(dblNotes);


 
 












