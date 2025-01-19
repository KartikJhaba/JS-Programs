//Concept - Object Literal
//Program - Create an object representing your personal profile. Include properties like name, age, city, hobbies, and favoriteColor. Then:
// Add a new property isStudent with a value of true or false.
// Update the value of city to a new city.
// Delete the hobbies property.
// Print the entire object to see the changes.

const user = {
    name : 'Kartik Kumar',
    age : '50',
    city : 'Mumbai',
    hobbies : ['Guitar', 'Exercise', 'Javascript'],
    favouriteColor : 'Blue'
}

// Add a new property isStudent with a value of true or false.
user.isStudent = true;

// Update the value of city to a new city.
user.city = 'Delhi';

// Delete the hobbies property.
delete user.hobbies;

// Checking the age key in user object
'name' in user;

// Print the entire object to see the changes.
console.log(user);
