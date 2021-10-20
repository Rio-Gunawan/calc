let answer = [];
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

// eslint-disable-next-line no-unused-vars
function clickNum(num) {
    if (num == '.') {
        let inputStringVersion = String(answer[answerNum]);
        if (inputStringVersion == "undefined") {
            inputStringVersion = '0.';
            num = '0.';
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
        } else {
            if (String(answer[answerNum]) == "undefined") {
                answer[answerNum] = num;
            } else {
                answer[answerNum] = answer[answerNum] * 10 + num;
            }
        }
        inputStrings += String(num);
        showInputStrings();
    }
}

function showInputStrings() {
    const $output = $('#answer');
    const $buttons = $('#buttons');
    $buttons.append(buttonHtml);
    $output.html(inputStrings);
    $output.append('<div id="cursor"></div>');
}

// eslint-disable-next-line no-unused-vars
function clearText() {
    answer = [];
    mode = [];
    inputStrings = "";
    answerNum = 0;
    floatBool = false;
    const $output = $('#answer');
    $output.html('');
    $output.text(0);
    $output.append('<div id="cursor"></div>');
}

// eslint-disable-next-line no-unused-vars
function showAnswer() {
    if (floatBool) {
        answer[answerNum] = parseFloat(answer[answerNum]);
        floatBool = false;
    }
    let answerCopy = answer.slice(0, answer.length);
    let localAnswer = answerCopy.shift();
    let forNum = 0;
    answerCopy.forEach(num => {
        if (mode[forNum] == '+') {
            localAnswer += num;
        } else if (mode[forNum] == '-') {
            localAnswer -= num;
        } else if (mode[forNum] == '*') {
            localAnswer *= num;
        } else if (mode[forNum] == '/') {
            localAnswer /= num;
        }
        forNum++;
    });
    const $output = $('#answer');
    $output.html('');
    $output.text(localAnswer);
    $output.append('<div id="cursor"></div>');
}

// eslint-disable-next-line no-unused-vars
function calcMode(modeLocal) {
    if (floatBool) {
        answer[answerNum] = parseFloat(answer[answerNum]);
        floatBool = false;
    }
    mode[answerNum] = modeLocal;
    answerNum++;
    answer[answerNum] = undefined;
    inputStrings += modeLocal;
    showInputStrings();
}