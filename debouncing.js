let counter=0;


//normal function
function getData(){
    console.log('Fetching Data'+ counter++)
};

//better function using debouncing

function myDebounce(call,delay){
let timer;
return function(...args){
    if(timer) clearTimeout(timer);
    timer=setTimeout(()=>{
        call();
    },delay)
}
}
const betterFunc= myDebounce(getData,1000);