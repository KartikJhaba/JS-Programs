//Concepts - Dialog Boxes
//Program - Simple Quiz Game: Use prompt to ask the user a question and display whether their answer is correct.
alert(`------Instructions--------- \n
    Welcome to the Js quiz game.\n
    1)This quiz contains two questions with given options.\n
    2)You need to answer in one word.`)
let score = 0
const question1 = 'Who is the Prime minister of India ? Modi or Rahul'
const answer1 = 'modi'

const question2 = 'Who is the Founder of Iskcon ? Prabhupad or Gandhi'
const answer2 = 'prabhupad'

const userInput1 = prompt(question1)?.trim().toLowerCase()
if(!userInput1) alert("Don't leave Empty choice !!")
else{
    if(userInput1 === answer1) score++
    const userInput2 = prompt(question2)?.trim().toLowerCase()
    if(!userInput2) alert("Don't leave Empty choice !!")
        else{
        if(userInput2 === answer2) score++
        alert(`Your score is ${score}`)
    }
}    