//Concept - Math Object
//Program - Circle Properties Calculator: Input the radius of a circle and calculate its circumference and area.

const radiiOfCircle = parseFloat(prompt('Enter the radius of circle')?.trim())
const PI = Math.PI
let circumferenceOfCircle, areaOfCircle
if(isNaN(radiiOfCircle)) alert('Invalid Number')
else if(radiiOfCircle <= 0) alert('Input must be greater than 0')
else{
    //Calculate the circumference and radius
    circumferenceOfCircle = (2 * PI * radiiOfCircle).toFixed(2)
    areaOfCircle = (PI * radiiOfCircle * radiiOfCircle).toFixed(2)
    alert(`
        Circumference : ${circumferenceOfCircle} units

        Area : ${areaOfCircle} units
    `)
}        