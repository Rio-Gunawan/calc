let answer = [0];
let answerNum = 0;
let inputStrings = "";
let buttonHtml = "";
let mode = [];
$(function () {
	const $output = $('#answer');
	$output.prepend(0);
	const cursorTiming = 500;
	setInterval(function () {
		$('#cursor').css('visibility',
			$('#cursor').css('visibility') == 'hidden' ? 'visible' : 'hidden');
	}, cursorTiming);
});

function clickNum(num) {
	answer[answerNum] = answer[answerNum] * 10 + num
	inputStrings += String(num);
	showInputStrings();
}

function showInputStrings() {
	const $output = $('#answer');
	const $buttons = $('#buttons');
	$buttons.append(buttonHtml)
	$output.html(inputStrings);
	$output.append('<div id="cursor"></div>');
}

function clearText() {
	answer = [0];
	inputStrings = "";
	answerNum = 0;
	const $output = $('#answer');
	$output.text(0);
	$output.append('<div id="cursor"></div>');
}

function showAnswer() {
	let localAnswer = answer.shift();
	console.log(answer)
	let forNum = 0;
	answer.forEach(num => {
		if (mode[forNum] == '+') {
			localAnswer += num;
		} else if (mode[forNum] == '-') {
			localAnswer -= num;
		} else if (mode[forNum] == '*') {
			localAnswer *= num
		} else if (mode[forNum] == '/') {
			localAnswer /= num;
		}
		forNum++;
	});
	const $output = $('#answer');
	$output.text(localAnswer);
	$output.append('<div id="cursor"></div>');
}

function reset() {
	answer = [0];
	inputStrings = "";
}

function calcMode(modeLocal) {
	mode[answerNum] = modeLocal;
	answerNum++;
	answer[answerNum] = 0;
	inputStrings += modeLocal;
	showInputStrings();
}