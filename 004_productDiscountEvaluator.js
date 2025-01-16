//Concepts - Conditionals
//Program - Product Discount Evaluator: Check if a customer qualifies for a discount based on their total purchase amount.
/*Learnings
toLocaleString() - Adds a comma at hundred, thousand places and convert number to string
*/
const requiredPurchaseForDiscount = 20000
const userPurchaseAmount = parseFloat(prompt('Enter your total Purchase Amount'))

if (isNaN(userPurchaseAmount)) {
    alert('Invalid Input !!')
}
else if (userPurchaseAmount <= 0) {
    alert('Amount should be greater than 0 !!')
}
else if (userPurchaseAmount < requiredPurchaseForDiscount) {
    const remainingAmountForDiscount = requiredPurchaseForDiscount - userPurchaseAmount
    alert(`
        Required Purchase amount is ${requiredPurchaseForDiscount.toLocaleString()} Rs. You are ${remainingAmountForDiscount.toLocaleString()} Rs. Shopping away from discount.
    `.trim())
}
else {
    alert('Congratulations ! You are eligible for discount.')
}
