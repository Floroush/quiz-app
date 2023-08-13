let questions = [
	{
		"question": "Who invented HTML?",
		"answer_1": "Robbie Williams",
		"answer_2": "Lady Gaga",
		"answer_3": "Tim Berners-Lee",
		"answer_4": "Justin Bieber",
		"right_answer": 3
	},

	{
		"question": "Who invented HTML?",
		"answer_1": "Robbie Williams",
		"answer_2": "Lady Gaga",
		"answer_3": "Tim Berners-Lee",
		"answer_4": "Justin Bieber",
		"right_answer": 3
	},

	{
		"question": "Who invented HTML?",
		"answer_1": "Robbie Williams",
		"answer_2": "Lady Gaga",
		"answer_3": "Tim Berners-Lee",
		"answer_4": "Justin Bieber",
		"right_answer": 3
	},

	{
		"question": "Who invented HTML?",
		"answer_1": "Robbie Williams",
		"answer_2": "Lady Gaga",
		"answer_3": "Tim Berners-Lee",
		"answer_4": "Justin Bieber",
		"right_answer": 3
	},
	{
		"question": "Who invented HTML?",
		"answer_1": "Robbie Williams",
		"answer_2": "Lady Gaga",
		"answer_3": "Tim Berners-Lee",
		"answer_4": "Justin Bieber",
		"right_answer": 3
	},
	{
		"question": "Who invented HTML?",
		"answer_1": "Robbie Williams",
		"answer_2": "Lady Gaga",
		"answer_3": "Tim Berners-Lee",
		"answer_4": "Justin Bieber",
		"right_answer": 3
	}
];

let currentQuestion = 0;

function init() {
	document.getElementById("allQuestions").innerHTML = questions.length;
	showQuestion();
}

function showQuestion() {
	let question = questions[currentQuestion];
	for (var i = 0; i < questions.length; i++) {
		document.getElementById("cardQuestion").innerHTML =
			questions[i]["question"];
		document.getElementById("answer_1").innerHTML = questions[i]["answer_1"];
		document.getElementById("answer_2").innerHTML = questions[i]["answer_2"];
		document.getElementById("answer_3").innerHTML = questions[i]["answer_3"];
		document.getElementById("answer_4").innerHTML = questions[i]["answer_4"];
	}
}

function answer(selection) {
	let question = questions[currentQuestion];
	console.log("Selected answer is ", selection);
	let selectedQuestionNumber = selection.slice(-1);
	console.log("Selected question number is ", +selectedQuestionNumber);
	console.log("Current question is ", question["right_answer"]);

	let idOfRightAnswer = `answer_${question["right_answer"]}`;

	if (selectedQuestionNumber == question["right_answer"]) {
		console.log("Correct answer");
		document
			.getElementById(selection)
			.parentNode.classList.add("bg-success", "text-light");
	} else {
		console.log("Wrong answer");
		document
			.getElementById(selection)
			.parentNode.classList.add("bg-danger", "text-light");
		document
			.getElementById(idOfRightAnswer)
			.parentNode.classList.add("bg-success", "text-light");
	}
}
