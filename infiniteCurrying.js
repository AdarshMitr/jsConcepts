
//infinite currying

function Add(a){
    return function(b){
        if(b) return Add(a+b);
        return a;
    }
}

console.log(Add(2)(3)(4)());