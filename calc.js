let answer = [];
let answerNum = 0;
let inputStrings = "";
let buttonHtml = "";
let inputtedText = "";
let mode = [];
let isFloat = false;
let haveFloat = false;
let codeNow = 1;
let isZero = false;

// eslint-disable-next-line no-unused-vars
function clickNum(num) {
    if (num == 0 && answer[answerNum] == undefined) {
        isZero = true;
    } else {
        isZero = false;
    }
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
        isZero = false;
        const $output = $('#answer');
        $output.html('');
        $output.text(0);
        $output.append('<div id="cursor"></div>');
    } else {
        answer[answerNum] = undefined;
        inputStrings = inputtedText;
        isFloat = false;
        isZero = false;
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
            } else if(mode[forNum] == '%') {
                localAnswer = localAnswer.mod(bigNum);
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
            } else if (mode[forNum] == '%') {
                localAnswer %= num;
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
    if (modeLocal == '%') {
        inputStrings += 'あまり';
    } else {
        inputStrings += modeLocal;
    }
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

//eslint-disable-next-line no-unused-vars
function backspace() {
    if (answer[answerNum] == undefined) {
        return;
    }
    answer[answerNum] = Math.floor(answer[answerNum] / 10);
    if (!isZero && answer[answerNum] == 0) {
        answer[answerNum] = undefined;
    }
    inputStrings = inputStrings.slice(0, -1);
    if (inputStrings.slice(-1) == 0 && answer[answerNum] == undefined) {
        answer[answerNum] = 0;
    }
    isZero = false;
    showInputStrings();
    if (inputStrings.length == 0) {
        const $output = $('#answer');
        $output.html('');
        $output.text(0);
        $output.append('<div id="cursor"></div>');
    }
}

//eslint-disable-next-line no-unused-vars
function powNum() {
    let localAnswer = answer[answerNum];
    if (haveFloat) {
        localAnswer = BigNumber(localAnswer);
        localAnswer = localAnswer.pow(2);
    } else {
        localAnswer = Math.pow(localAnswer, 2);
    }
    if (haveFloat) {
        localAnswer = localAnswer.toNumber();
    }
    inputStrings = inputStrings.slice(0, String(answer[answerNum]).length * -1);
    answer[answerNum] = localAnswer;
    inputStrings = inputStrings + String(localAnswer);
    showInputStrings();
}

//eslint-disable-next-line no-unused-vars
function sqrtNum() {
    let localAnswer = answer[answerNum];
    if (haveFloat) {
        localAnswer = BigNumber(localAnswer);
        localAnswer = localAnswer.sqrt(2);
    } else {
        localAnswer = Math.sqrt(localAnswer, 2);
    }
    if (haveFloat) {
        localAnswer = localAnswer.toNumber();
    }
    inputStrings = inputStrings.slice(0, String(answer[answerNum]).length * -1);
    answer[answerNum] = localAnswer;
    inputStrings = inputStrings + String(localAnswer);
    showInputStrings();
}