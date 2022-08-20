 
// //  D. prime number


//  function Prime(){
//     var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

//     numArray = numArray.filter((number) => {
//       for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
    
//     console.log(numArray);
//  }
// Prime();

    // E . palindroms

 var rem,temp,result=0,number;
 number=12321;
 temp=number;
 while(number>0){
  rem=number%10;
  number=parseInt(number/10)
  result=result*10+rem
 }
 if(result==temp){
  console.log(result +"it is a palindrome");
 }
 else{
  console.log(result+"it is not a palindrome")

 }