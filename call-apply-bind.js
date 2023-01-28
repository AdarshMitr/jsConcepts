// Call, Apply and Bind in Js


let userDetails= {
    name:'Adarsh Kumar',
    Age:29,
    Designation:"Software Engineer",
    
}


let printDetails=function(City, Country){
    console.log(this.name+", "+City +", "+Country)
}

printDetails.call(userDetails,'Dehradun','India');


let userDetails2= {
    name:'Aman Kumar',
    Age:28,
    Designation:"Software Engineer",
    
}

//using call function
//It is a kind of function borrowing.
printDetails.call(userDetails2,'Kathmandu','Nepal');


//Apply methods in js

printDetails.apply(userDetails,['Delhi','India']);


//Bind method in Js
//By using bind() method we can set the context of 'this' to a particular object.The bind() method creates a new function where this keyword refers to the parameter in the parenthesis and invokes the function when needed.

 let newFunc=printDetails.bind(userDetails2,'Bengaluru','Karnataka');
 newFunc();

 