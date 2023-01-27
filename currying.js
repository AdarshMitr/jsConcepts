//Currying Function



function Add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}


//Usual invoking of function
// let res= Add(2);
// let res2=res(3);
// let final=res2(4);
// console.log(final);

let final= Add(2)(3)(4);
console.log(final);


// A Use case for currying:

userObj={
    name:"Adarsh Kumar",
    age:28
}

function userInfo(obj){
    return function(userInfo){
        return obj[userInfo];
    }
}


let result= userInfo(userObj);
console.log(result('name'));
  