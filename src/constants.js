export const jsQuizz ={
    questions:[
        {
            question:
            "___________ is used in React.js to increase performance.Fill in the Blank",
            
            type:"FIB",
            correctAnswer:"Virtual DOM",
        },
        {
            question:"What is ReactJs?",
            choices:[
                "Server-side framework",
                "User Interface framework",
                "both a and b",
                "None of the above",
            ],
            type:"MCQs",
            correctAnswer:"User Interface framework",
        },
        {
            question:"what is babel?",
            choices:[
                "JavaScript interpreter",
                "JavaScript transpiler",
                "JavaScript compiler",
                "None of the above",
            ],
            type:"MCQs",
            correctAnswer:"JavaScript compiler",
        },
        {
            question:"In which language is react.js written?",
            choices:["Python","java","C#","JavaScript"],
            type:"MCQs",
            correctAnswer:"JavaScript",
        }
    ]
};






export const resultInitialState={
    score:0,
    correctAnswers:0,
    wrongAnswers:0

};