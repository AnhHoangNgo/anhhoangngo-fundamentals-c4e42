// Creat 
question1 = {
    question: "How many legs an octopus has:",
    answer: {
        1: "One leg",
        2: "Two legs",
        3: "Four legs",
        4: "Eight legs",
    },
    correctAnswer: "Eight legs",
}

// Read
console.log(`${question1.question}\n
1: ${question1.answer[1]}\n
2: ${question1.answer[2]}\n
3: ${question1.answer[3]}\n
4: ${question1.answer[4]}\n`);
// question-answer
let correctAnswer1 = prompt("What's answer? Enter this box, ex: enter '1'  or enter 'One legs'");

if(correctAnswer1 == 4 || correctAnswer1 === "Eight legs"){
    console.log("Hura!!!");
}else{
    console.log("Not a correct answer!")
};