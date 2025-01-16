//Concepts - Dialog Boxes
//Program - Username Greeting: Prompt the user for their name and display a personalized greeting using alert.

const userName = prompt('Enter your name')?.trim()
if(userName === null || userName === '' || userName === undefined){
    alert('Please provide input with your name !!')
}else{
    alert(`Hello ${userName}, welcome to the website.`)
}
console.log('Program ended')
/*Learnings
?.trim() - ? is a optional chaining operator which returns undefined if the string[prompt('Enter your name')] is null preventing from throwing error and continue further execution.
*/