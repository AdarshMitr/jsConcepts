

/*
In primitive data types,when we make a copy, it will be a real copy. When we reassigned the value of new variable after copying, it will have no effect on the value from where it was copied.

*/
/* for example:

let a='Vinod';
let b=a;
console.log(b);
b=29;
console.log(a);
console.log(b);*/


// ----------Object Copy------------
/* 
But in case of an Object, when the Object is passed to a new Object, its memory location/reference is passed to it. Therefore any further change made on the new Object will also change the values of the previous object.

e.g.



let obj={
    name:'Adarsh'
};



let newObj=obj;
newObj.name='Manoj';

console.log(obj);//Manoj
console.log(newObj); //Manoj

*/

/*
//------------Shallow Copy-----------

//Method 1

let obj={
    name:'Adarsh'
};

let newObj=Object.assign({},obj);
newObj.name='Manoj';

console.log("the Object is :" ,obj); //the Object is : Adarsh

//therefore the value of object remains unaffected by shallow copy.
console.log("the new Object is :" ,newObj); //the new Object is:Manoj




//Method :2
let obj={
    name:'Adarsh'
};


let newObj={...obj};

newObj.name='Ranjeet'; 
console.log(obj);//Adarsh
console.log(newObj); //Ranjeet
//Here also, the value of 'obj' is not changed after reassigning the value of 'newObj'.

*/



//        -----------Deep Copy-------------


/*
let obj={
    name:'Adarsh',
    address:{
        city:'Jaipur',
        state:'Rajasthan'
    }
};


let newObj={...obj};
newObj.address.state='Haryana';


console.log(obj.address.state);//Haryana
//Object destructuring works upto the first level of object.Therefore, it does not work in this case.
//It changed the address of the previous object 'obj' which is not desirable.It is still a shallow copy.
 //To overcome this problem, we use deep copy.

console.log(newObj.address.state); //Haryana




let obj={
    name:'Adarsh',
    address:{
        city:'Jaipur',
        state:'Rajasthan'
    }
};


let newObj=JSON.parse(JSON.stringify(obj));
newObj.address.state='Haryana';

console.log(obj.address.state); //Rajasthan
//Thus the memory location of first object is not changed in this case. This is a deep copy.
console.log(newObj.address.state); //Haryana
*/


//*But deep copy has its own limitations

/*
let obj={
    name:'Adarsh',
    address:{
        city:'Jaipur',
        state:'Rajasthan'
    },
    getData:function(){
        return "This is complete data"
    }
};


let newObj=JSON.parse(JSON.stringify(obj));
newObj.address.state='Haryana';

console.log(obj.getData) //ƒ (){
   // return "This is complete data"}

console.log(newObj.getData); //undefined
//the function getData is not available for 'newObj'.Date and functions are not available to this method. There is no method in JS for this problem. We have to use Lodash for it which is a external library for javascript.

*/

let obj={
    name:'Adarsh',
    address:{
        city:'Jaipur',
        state:'Rajasthan'
    },
    getData:function(){
        return "This is complete data"
    }
};


let newObj=_.cloneDeep(obj);
newObj.address.city='Jaiselmer';

console.log(obj) //ƒ (){
   // return "This is complete data"}

console.log(newObj); 
//ƒ (){
   // return "This is complete data"}


   //This is a deep copy.