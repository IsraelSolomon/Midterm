
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employment Screening",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "truefalse1",
                title: "You are flexiable worker with hours?",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "truefalse2",
                title: "Being on time is not important?",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "False"
            },
            {
                type: "radiogroup",
                name: "truefalse3",
                title: "An employee of a company could steal time from the company",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "truefalse4",
                title: "Being on time is not important?",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "False"
            },
            {
                type: "radiogroup",
                name: "truefalse5",
                title: "Anyone could come and leave at any moment within the company",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "False"
            },
            {
                type: "radiogroup",
                name: "truefalse6",
                title: "You always try to do your best in a given task",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "truefalse7",
                title: "You like to work in a good work environment",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "truefalse8",
                title: "Quality is not important",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "False"
            },
            {
                type: "radiogroup",
                name: "truefalse9",
                title: "You work well by yourself",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "truefalse",
                title: "You work well with team",
                choicesOrder: "random",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "my2ndthankyoupage.html";
    });

$("#surveyElement").Survey({ model: survey });