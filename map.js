
let obj={
    name:'Adarsh',
    4:'This is a number key'
};

console.log(obj[4]) //This is a number key

let data=new Map([
    ['name','Adarsh'],
    [true,'This is a boolean key in Map']
]);


// assigning a new key to map
//data.set('country','Bharat');

//console.log(data.keys());  // MapIterator {'name', true, 'country'} 


 
// after reversing the parameter, it gives the desired result
data.forEach((a,b)=>{
   // console.log(a,b);
})

// name Adarsh
// map.js:22 true 'This is a boolean key in Map'
// map.js:22 country Bharat





