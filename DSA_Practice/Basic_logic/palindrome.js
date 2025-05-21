let number = 1231321;
let revNumber = revrseNumber(number) 

function revrseNumber( number ){
    let dum = number
      let answer=0 ;
   let lastdig;
      while(dum>0){
  
              lastdig=dum%10
             // addNum= (dum%10) * 10 ** (digit-1);
              answer=answer*10+lastdig
              dum= (dum-dum%10)/10
              
  
  
  
      }
      return answer;
  
  }


console.log(checkPalindrome(number , revNumber));
console.log(revNumber);


function checkPalindrome(number , revNumber){

    if(number === revNumber){
        return true ;
    }
    else return false
;
    


}