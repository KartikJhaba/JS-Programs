// CONCEPTS - variables, datatypes and Operators
// PROGRAM  - Currency Converter: Input an amount in one currency (e.g., USD) and convert it to another (e.g., EUR) based on a given conversion rate.

const usdToEurConversionRate = 0.97
const usdAmount = parseFloat(prompt('Enter the amount in USD'))
if(isNaN(usdAmount) || usdAmount <= 0) alert('Invalid Number !!')
else
{
    const usdToEurAmount = usdAmount * usdToEurConversionRate;
    alert(`${usdAmount} USD is equal to ${usdToEurAmount.toFixed(1)} EUR`)
}    

/*LEARNINGS
**use descriptive variables names
**declare constants outside
**toFixed() - Formats the EUR amount to 2 decimal places for clarity.
**Validate user input
*/