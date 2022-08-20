
// A . odd number

// const oddNum=(b)=>{

//    for(i=0; i<b.length; i++) {
//   if(b[i]%2!==0){
// console.log("the odd number is:",b[i])
//   }
//    }
//     }
// oddNum([1,2,3,4,5,6,7,8,9])

// C . Add the array
    // const Add=(a)=>{
    // let sum=0;
    // for(i=0; i<a.length; i++){
    
    //    sum=sum+a[i];
    // }
    // console.log(sum)
    // }
    // Add([23,34,54,76,77])




    // let Prime= (numArray )=>{
    //    numArray = numArray.filter((number) => {
    //       for (var i = 2; i <= Math.sqrt(number); i++) {
    //         if (number % i === 0) return false;
    //       }
    //       return true;
    //     });
        
    //     console.log(numArray);
    //  }
    // Prime( [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    

    var rem,result=0,number;
    
 

  var temp=(number)=>{
    temp=number
 while(number>0){
  rem=number%10;
  number=parseInt(number/10)
  result=result*10+rem
 }
 if(result==temp){
  console.log(result +" it is a palindrome");
 }
 else{
  console.log(result+" it is not a palindrome")
 }
 }
 temp(121);