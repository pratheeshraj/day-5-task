
//c . sum of array 

{let a=[23,34,54,76,77];


const Add=function(){
let sum=0;
for(i=0; i<a.length; i++){

   sum=sum+a[i];
}
console.log(sum)
}
Add()
}

// a . odd of array

let b=[1,2,3,4,5,6,7,8,9];
const oddNum=function(){

   for(i=0; i<b.length; i++){
  if(b[i]%2!==0){
console.log("the odd number is:",b[i])
  }
   }
    }
oddNum()
