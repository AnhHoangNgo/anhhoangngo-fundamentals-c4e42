// Tạo danh sách câu hỏi, danh dách này có 5 câu hỏi
let questionArr =[
    {
        question: "Which one of the five is least like the other four?",
        answer: {
            1: "Dog",
            2: "Mouse",
            3: "Lion",
            4: "Snake",
            5: "Elephant",

        },
        correctAnswer: "Snake",
    },
    {
        question: "Which number should come next in the series? \n 1 - 1 - 2 - 3 - 5 - 8 - 13",
        answer: {
            1: "8",
            2: "13",
            3: "21",
            4: "26",
            5: "31",
        },
        correctAnswer: "21",
    },
    {
        question: " Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
        answer: {
            1: "20",
            2: "24",
            3: "25",
            4: "26",
            5: "28",
        },
        correctAnswer: "24",
    },
    {
        question: "Which one of the five choices makes the best comparison? \n PEACH is to HCAEP as 46251 is to:",
        answer: {
            1: "25641",
            2: "26451",
            3: "12654",
            4: "51462",
            5: "15264",
        },
        correctAnswer: "15264",
    },
    {
        question: "Which one of the five choices makes the best comparison? \n Finger is to Hand as Leaf is to:",
        answer: {
            1: "Twig",
            2: "Tree",
            3: "Branch",
            4: "Blossom",
            5: "Bark",
        },
        correctAnswer: "Twig",
    }
]

// Khởi tạo các biến
let k = true;
let i;
let l = questionArr.length
let correctAnswerExam = 0;
let questionArrAnswered = [];
let bla = prompt("Are you ready for IQ exam? yes or no");// Hỏi người dùng có muốn làm bài kiểm tra không

if(bla === "yes"){
    for(; k ;){
    console.log("Ok, wellcome to IQ exam, Goodluck!");

//Xuất câu hỏi 
for(i = 0; i < l; i++){

let answer = prompt(`Question ${i}: ${questionArr[i].question}\n
1: ${questionArr[i].answer[1]}\n
2: ${questionArr[i].answer[2]}\n
3: ${questionArr[i].answer[3]}\n
4: ${questionArr[i].answer[4]}\n
5: ${questionArr[i].answer[5]}`);

// Kiểm tra xem câu trả lời có đúng không, rồi lưu bài làm vào một danh sách mới, lấy ra nếu người thi muốn xem lại
if(answer === questionArr[i].correctAnswer){
    correctAnswerExam++;
    questionArrAnswered.push(questionArr[i]);
    questionArrAnswered[i].yourAnswer = answer;
}else {
    questionArrAnswered.push(questionArr[i]);
    questionArrAnswered[i].yourAnswer = answer;
}
}

// Tính kết quả bài thi ( số câu hỏi trả lời đúng, phần trăm câu hỏi trả lời đúng,  điểm )
let mark = correctAnswerExam*20;
let percent = (correctAnswerExam * 100) / questionArr.length;

 //Đưa ra nhận xét về bài thi
if(mark >= 80 ){
    console.log(`You answer correct: ${correctAnswerExam} (${percent}%) question, per the mark of your exam are: ${mark}, You are excellent!`);
}else if(mark >= 60 ){
    console.log(`You answer correct: ${correctAnswerExam} (${percent}%) question, the mark of your exam are: ${mark}, You are good!`);
}else{;
    console.log(`You answer correct: ${correctAnswerExam} (${percent}%) question, the mark of your exam are: ${mark}, You are goof!`);
}

// Hỏi người thi có muốn xem lại bài kiểm tra vừa làm không ? 
z = prompt("Do you want to see your exam again and check exam ? yes or no");
if(z === "yes"){
    for(i = 0; i < l; i++){
        alert(`Question ${i}: ${questionArrAnswered[i].question}\n
        1: ${questionArrAnswered[i].answer[1]}\n
        2: ${questionArrAnswered[i].answer[2]}\n
        3: ${questionArrAnswered[i].answer[3]}\n
        4: ${questionArrAnswered[i].answer[4]}\n
        5: ${questionArrAnswered[i].answer[5]}\n
        Correct answer: ${questionArrAnswered[i].correctAnswer} and your answer: ${questionArrAnswered[i].yourAnswer}`);
}
}
// Hỏi người dùng xem có muốn thi lại không
let m = prompt("Do you want to do exam again ?, yes or no")

// Trả về bài thi lúc ban đầu chưa thi
if(m !== "yes"){
    k = false;
    
}else{
    mark = 0;
    percent = 0;
    questionArrAnswered = [];
    correctAnswerExam = 0;
}
}
//He he
}else{
    console.log("You are goof, shy, F**k u!")
}