let n = 12345006789;
let rev = revrseNumber(n)
console.log(rev)


function revrseNumber( n ){
  let dum = n
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