let answer = [0];
let answerNum = 0;
let inputStrings = "";
let buttonHtml = "";
let mode = [];
let floatBool = false;
$(function () {
	const $output = $('#answer');
	$output.prepend('<div id="cursor"></div>');
	$output.prepend(0);
	const cursorTiming = 500;
	setInterval(function () {
		$('#cursor').css('visibility',
			$('#cursor').css('visibility') == 'hidden' ? 'visible' : 'hidden');
	}, cursorTiming);
});

function clickNum(num) {
	if (num == '.') {
		let inputStringVersion = String(answer[answerNum]);
		if (answer[answerNum] == 0) {
			inputStringVersion = '0.';
		} else {
			inputStringVersion += '.';
		}
		floatBool = true;
		inputStrings += String(num);
		answer[answerNum] = inputStringVersion;
		showInputStrings();
	} else {
		if (floatBool) {
			answer[answerNum] += String(num);
			inputStrings += String(num);
			showInputStrings();
		} else {
			answer[answerNum] = answer[answerNum] * 10 + num;
			inputStrings += String(num);
			showInputStrings();
		}
	}
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
	if (floatBool) {
		answer[answerNum] = parseFloat(answer[answerNum]);
		floatBool = false;
	}
	let localAnswer = answer.shift();
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
	if (floatBool) {
		answer[answerNum] = parseFloat(answer[answerNum]);
		floatBool = false;
	}
	mode[answerNum] = modeLocal;
	answerNum++;
	answer[answerNum] = 0;
	inputStrings += modeLocal;
	showInputStrings();
}