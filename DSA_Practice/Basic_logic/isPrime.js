let number = 222334565193640 ;
let boolean = true;
for (let i = 2; i <=parseInt( Math.sqrt(number)); i++) {
    
    if(number%i ===0){
        boolean = false
    }
    
    
}   
console.log(boolean);