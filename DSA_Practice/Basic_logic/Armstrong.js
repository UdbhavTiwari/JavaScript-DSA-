let number  = 1634 ; 
let check = ifArmstrong(number)              
console.log(check)

function ifArmstrong(number){

    let dup = number ;
    let count = Math.floor(Math.log10(number)+1)
    let answer= 0
    while(dup>0){

        answer = answer + ((dup%10)**count);
        dup = (dup - dup%10)/10;
       //console.log(count)
         //console.log(answer)

    }
    if (answer===number){
        return true;
    }
    else return false;

}