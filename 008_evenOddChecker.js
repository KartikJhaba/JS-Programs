//Concept - Basic Js
//Program - create a program that takes input from the user and checks whether a given number is even or odd
//This program handles all the fail cases and makes the program robust.
//Learnings - inlcude() checks for the substring in a string

const userInputString = prompt('Enter a number to check EVEN or ODD')?.trim()
const userInputNumber = parseInt(userInputString);
if(isNaN(userInputNumber)) { // In case user enters empty string [''], valid string like ['three']
    alert('Please enter a valid number !!');
}
else if(userInputString.includes('.')) { //In case user inputs a floating number like ['5.5']
    alert('Please enter Integers only !!')
}
else {
    const result = userInputNumber % 2;
    if(result === 0){
        alert(`${userInputNumber} is even`);
    }else{
        alert(`${userInputNumber} is Odd`);
    }
}
