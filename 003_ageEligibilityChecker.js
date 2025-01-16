//CONCEPTS - Conditionals
//PROGRAM - Age Eligibility Checker: Input age and determine if the person is eligible to vote or drive based on your country's rules.
/*LEARNINGS
**Prompt messages should be clear and descriptive
*/

const userAge = parseInt(prompt('Enter your Age between 1 and 100'))
if(isNaN(userAge) || userAge <= 0 || userAge > 100) alert('Age should be in range 1 to 100 !!')
else if(userAge < 18) alert('You are not Eligible to Vote !!')
else alert('You are eligible to Vote')        
