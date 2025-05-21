let num1 = 9876543210;
let num2 =1234567890; 
let smallest = num1>num2?num2:num1
let gcd = 0;

if(num1===0 || num2===0){

    let result  = (num1===0)?num2:num1;
    console.log(result);
   
}
else{

    
    for (let i = 1; i  <= Math.sqrt(smallest); i++) {
        
        
        
        if(num1%i===0&&num2%i===0){
            
            if(gcd<i){
            }
            gcd = i;
            
        }
        
        
        
    }
    console.log(gcd)
}