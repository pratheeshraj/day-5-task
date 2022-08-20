 
// // // F median of two array
 
 
 function medianOf(a,a1){ 
  var c=a.concat(a1)
c=c.sort(function(b,b1){return (b-b1)})

console.log(c)
  var length=c.length;

if (length%2==1){

  console.log(c[(length/2)-.5])
  return c[(length/2)-.5]
}
  else {
   console.log(c[(length/2)])
   return c[(length/2)]
  }
}
  let a=[1,2,3,4,5];
  let a1=[5,8,9,6];

  medianOf(a,a1)

// G duplicates

{let a=[ 12,23,454,678,87,23,23,12,23,53,]

const num=[...new Set(a)];
console.log(num)}

// H rotate an array

{let num=[1,2,3,4,5,6,7];
const k=3;

function rotateNum(arr,n){

  for (let i=0; i<n; i++){

    arr.unshift(arr.pop())
    console.log(arr)
  }
}




console.log(rotateNum(num,k))}














