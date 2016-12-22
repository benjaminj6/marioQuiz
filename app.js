//JS


//Targeting entire quiz via jQuery
const form = $(".quiz");

//State Object
const state = {
	questions: [
	//1
	{title:"What was Mario's original name?",
	 answers: ["Jumpman", "Hopdude", "Mario", "Plumber"],
	 correctAnswer: 0 },
	//2
	{title:"What game did Mario make his first appearance?",
	 answers: ["Super Mario World", "Super Mario Bros.", "Donkey Kong", "Mario Paint"],
	 correctAnswer: 2 },
	//3
	{title:"How many stars could you get in Super Mario 64?",
 	 answers: [100, 120, 200, 64],
 	 correctAnswer: 1 },
	//4
	 {title:"How many games has Mario appeared in?",
 	 answers: [91, 50, 150, "Over 200"],
 	 correctAnswer: 3 },
	//5
 	{title:"What occupation has Mario NEVER appeared as?",
 	 answers: ["Pro Weightlifter", "Carpenter", "Doctor", "Kart Racer"],
 	 correctAnswer: 0 },
	//6
 	{title:"How does Mario prove his identity in Super Mario RPG?",
  	 answers: ["Mushrooms", "Jumping", "Fireballs", "Hat" ],
  	 correctAnswer: 1 },
	//7
    {title:"Where was Mario born?",
	 answers: ["Yoshi's Island", "Italy", "Mushroom Kingdom", "Unknown"],
	 correctAnswer: 0 },
	//8
	{title:"Who is the main villain in Super Mario Land?",
	 answers: ["Bowser", "Birdo", "Tatanga", "Kamek"],
	 correctAnswer: 2 },
	//9
	{title:"In what game does Mario appear as the villain?",
	 answers: ["Mario Land 2: 6 Golden Coins", "New Super Mario Bros. Wii", "Mario vs. Donkey Kong", "Donkey Kong Jr."],
	 correctAnswer: 3 },
	//10
	{title:"Which of these female characters does not appear in any Mario games?",
 	 answers: ["Pauline", "Peach", "Rosalina", "Lena" ],
 	 correctAnswer: 3 }
	 ],
	questionNumber: 0,
	correct: 0,
	incorrect: 0
};

//Rendering
const render = function(state, element) {
	let quizQuestion = state.questions[state.questionNumber];
	if(quizQuestion){
		quizQuestion.answers.forEach(function(answer, index){
			element.find("#answer" + (index + 1)).text(answer);
			element.find("#questionTitle").text(quizQuestion.title);
		});
	}
	element.find(".correct").text(state.correct);
	element.find(".incorrect").text(state.incorrect);
	element.find("#questionNumber").text(state.questionNumber + 1);
	if(state.questionNumber === 1){
		$(form).addClass('hide');

		const endScreen = $('.endScreen')

		endScreen.removeClass('hide');
		endScreen.find(".correct").text(state.correct);
		endScreen.find(".incorrect").text(state.incorrect);
	}
	//End Screen
};

//Button-Related Event Listeners

//Submit Button
$('form.quiz').submit(function(event) {
	event.preventDefault();
	let userInput = parseInt($("input:checked").val());
	let quizQuestion = state.questions[state.questionNumber];
	if(userInput === quizQuestion.correctAnswer){
		state.correct++;
		$('.correctIndicator').removeClass('hide');
	}
	else{
		state.incorrect++;
		$('.incorrectIndicator').removeClass('hide');
	}
	$('.continue').removeClass('hide');
	$('.submit').addClass('hide');
	render(state, form);
});

//Continue Button

$('.continue').click(function(event) {
	event.preventDefault();
	state.questionNumber++;
	$('.correctIndicator').addClass('hide');
	$('.incorrectIndicator').addClass('hide');
	$('.submit').removeClass('hide');
	$('.continue').addClass('hide');
	render(state, form);
});

//Start Button

$('#start-quiz').click(function(event) {
	$('.quiz').removeClass('hide');
	$('.introduction').addClass('hide');
	$('.reset').removeClass('hide');
});

//Reset Button

$('.reset').click(function(event){
	window.location.reload();
})


//DOM
$(document).ready(function(){
	render(state, form);
});
