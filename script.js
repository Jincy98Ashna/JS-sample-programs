// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

let myArray = [ 1, 4, 6, 8];

function isPrime(num) {
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false ;
        }
    }

    if (num <= 1) {
        return false ;
    }


    else{
        return true ;

    }   
}

function isFirstElementPrime(arr) {
    if (arr.length === 0) {
        return false; 
    }

    let firstElement = arr[0];
    return isPrime(firstElement);
}


if (isFirstElementPrime(myArray)) {
    console.log(" Prime number");
} else {
    console.log(" Not a prime number!!");

}


// Write a JavaScript program to find the most frequent item of an array

let array = [1, 2, 3, 4, 2, 2, 3, 1, 4, 4, 4];

function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        return null; 
    } 
    let frequencyMap = {};

    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];

       
        if (!frequencyMap[currentItem]) {
            frequencyMap[currentItem] = 1;
        } else {
           
            frequencyMap[currentItem]++;
        }
    }

   
    let mostFrequentItem;
    let maxFrequency = 0;

    for (const item in frequencyMap) {
        if (frequencyMap[item] > maxFrequency) {
            mostFrequentItem = item;
            maxFrequency = frequencyMap[item];
        }
    }

    return mostFrequentItem;
}

let mostFrequent = findMostFrequentItem(array);
console.log(`The most frequent item is: ${mostFrequent}`);


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

for(i=0; i<=15; i++){
    if(i == 0){
        console.log(i , "Neither even nor odd") ;
    }
    else if(i%2 == 0){
        console.log(i, "Even")
    }
    
    else{
        console.log(i, "Odd");
    }
}


// Write a JavaScript program to find the sum of squares of the elements of an array.

let sum = 0;
let newArray = [1,2,3,4];

for(i=1; i<=newArray.length; i++){
    sum = sum + (i**2);
    console.log(i);

}
console.log("Sum of squres = "+sum);









