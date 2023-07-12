export const jsQuizz = {
  questions: [
    {
      question:
        "Which of the following is used in react.js to increase performance?",
      choices: [
        "virtual Dom",
        "Original Dom",
        "Both A and B",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "virtual Dom",
    },
    {
      question: "What is the ReactJS",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "both a And b",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question:
        "Identify the one which is used to pass data to components from outside",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "MCQs",
      correctAnswer: "props",
    },
    {
      question: "In which language is React.js writtes?",
      choices: ["python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "what is the Babel?",
      choices: [
        "JavaScript interpreter",
        "JavaScript transpiler",
        "JavaScript compiler",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript compiler",
    },
  ],
};

export const resultInialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
