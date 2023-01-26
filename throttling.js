const mythrottle=(func,d)=>{
 return function (...args){
    document.getElementById('mybtn').disabled=true;
    setTimeout(()=>{
       
        func();
    },d)
 }   
}

const newFunc=mythrottle(()=>{
    document.getElementById('mybtn').disabled=false;  
console.log('User Clicked.')
},2000);