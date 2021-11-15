let answer = [];
let answerNum = 0;
let inputStrings = "";
let buttonHtml = "";
let inputtedText = "";
let mode = [];
let isFloat = false;
let haveFloat = false;
let codeNow = 1;

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
        isFloat = true;
        haveFloat = true;
        inputStrings += String(num);
        answer[answerNum] = inputStringVersion;
        showInputStrings();
    } else {
        if (isFloat) {
            answer[answerNum] += String(num);
        } else {
            if (String(answer[answerNum]) == "undefined") {
                answer[answerNum] = num;
            } else {
                if (codeNow == -1) {
                    answer[answerNum] = answer[answerNum] * 10 - num;
                } else {
                    answer[answerNum] = answer[answerNum] * 10 + num;
                }
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
function clearText(howClear) {
    if (howClear == 1) {
        answer = [];
        mode = [];
        inputStrings = "";
        inputtedText = "";
        answerNum = 0;
        codeNow = 1;
        isFloat = false;
        haveFloat = false;
        const $output = $('#answer');
        $output.html('');
        $output.text(0);
        $output.append('<div id="cursor"></div>');
    } else {
        answer[answerNum] = undefined;
        inputStrings = inputtedText;
        isFloat = false;
        const $output = $('#answer');
        $output.html(inputStrings);
        if (answerNum == 0) {
            $output.text(0);
        }
        $output.append('<div id="cursor"></div>');
    }
}

// eslint-disable-next-line no-unused-vars
function showAnswer() {
    if (isFloat) {
        isFloat = false;
    }
    let answerCopy = answer.slice(0, answer.length);
    let localAnswer = answerCopy.shift();
    let forNum = 0;
    if (haveFloat) {
        localAnswer = BigNumber(localAnswer);
        answerCopy.forEach(num => {
            const bigNum = BigNumber(num);
            if (mode[forNum] == '+') {
                localAnswer = localAnswer.plus(bigNum);
            } else if (mode[forNum] == '-') {
                localAnswer = localAnswer.minus(bigNum);
            } else if (mode[forNum] == '*') {
                localAnswer = localAnswer.times(bigNum);
            } else if (mode[forNum] == '/') {
                localAnswer = localAnswer.div(bigNum);
            }
            forNum++;
        });
    } else {
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
    }
    if (haveFloat) {
        localAnswer = localAnswer.toNumber();
    }
    const $output = $('#answer');
    if (answerCopy.length == 0) {
        $output.html('0');
    } else {
        $output.html('');
    }
    $output.text(localAnswer);
    $output.append('<div id="cursor"></div>');
}

// eslint-disable-next-line no-unused-vars
function calcMode(modeLocal) {
    isFloat = false;
    mode[answerNum] = modeLocal;
    answerNum++;
    answer[answerNum] = undefined;
    inputStrings += modeLocal;
    inputtedText = inputStrings;
    showInputStrings();
}

// eslint-disable-next-line no-unused-vars
function changeCode() {
    answer[answerNum] *= -1;
    inputStrings = inputtedText + answer[answerNum];
    showInputStrings();
    codeNow = Math.sign(answer[answerNum]);
}

//eslint-disable-next-line no-unused-vars
function divHundred() {
    answer[answerNum] /= 100;
    inputStrings = inputtedText + answer[answerNum];
    showInputStrings();
}