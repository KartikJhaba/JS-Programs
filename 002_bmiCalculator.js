//CONCEPTS - variables, dataypes and operators
//PROGRAM - BMI Calculator: Calculate Body Mass Index using height (in meters) and weight (in kilograms).
/*LEARNINGS
**Body mass index is a check for the person that his weight is okay according to his height. To calculate bmi, Weight(kgs)/Height(m)*Height(m)
*/
const userHeightInMeters = parseFloat(prompt('Enter your Height in Meters : '))
if(isNaN(userHeightInMeters) || userHeightInMeters <= 0) alert('Invalid Height')
else{
    const userWeightInKilograms = parseFloat(prompt('Enter your Weight in Kilograms'))
    if(isNaN(userWeightInKilograms) || userWeightInKilograms <= 0) alert('Invalid Weight')
    else{
        const userBmi = userWeightInKilograms/(userHeightInMeters * userHeightInMeters)
        alert(`Your BMI is ${userBmi.toFixed(1)}`)
    }    

}    