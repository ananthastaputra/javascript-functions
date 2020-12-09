//print odd numbers in an array


var output=[]



var odd=function  () {
    for (j=0;j<10;j++){
        if (j%2!==0) {
        output.push(j)
        
    }
    }
   
    return output
}
var res=odd()
console.log(res)







var output=[]



var odd=(function   () {
    for (j=0;j<10;j++){
        if (j%2!==0) {
        output.push(j)
        
    }
    
    }
   console.log(output)

})
();
odd;




//sum of all numbers in array
//iife
var arr=[1,2,3,4,5]
sum =0

var res=(function  () {
    for (i in arr) {
        sum=sum+arr[i]
        
        
    }
    console.log(sum)
})
();
res();

//output=15


const name = 'ananth'
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
//output=Ananth


//return prime numbers in Array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//output=[ 2, 3, 5, 7 ]




//rotate the given array k times 
function rotate(arr, k) {
    for (var i = 0; i < k+1; i++) {
        arr.push(arr.shift());
    }
    return arr;
    }
    //k work as an index array
    console.log(rotate([1, 2, 7, 4, 5, 6, 7], 3)); //[5,6,7,1,2,7,4]
    console.log(rotate([-1, -100, 3, 99], 2));     //[99,-1,-100,3]





//check for palindromes in array






let palindromeArray = (arr) => {
    //initialize to true
    let isPalindrome = true;
    
    //loop through half length of the array
    for(let i = 0; i < arr.length / 2; i++) {

        //check if first half is equal to the second half
        if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    
    return isPalindrome;
}
console.log(palindromeArray([1,2,2,1]));
console.log(palindromeArray(["madam"]));

//output=
//true
//true


//printing median of two sorted arrays




const median = (a1, a2) => {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];
  let b = [1,4];
  console.log(median(a,b));


  //output=3


// print array by removing duplicate items

  var result = [];
var a=[1,1,2,3,4,4,5]
a.forEach(function(item) {
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
});
console.log(result)


//output=[ 1, 2, 3, 4, 5 ]






                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

