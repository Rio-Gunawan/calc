let answer = [null];
let answerNum = 0;
let inputStrings = "";
let inputtedText = "";
let mode = [null];
let isFloat = false;
let haveFloat = false;
let codeNow = 1;
let isZero = false;
let isFraction = false;
let fractionMode = null;

// eslint-disable-next-line no-unused-vars
function clickNum(num) {
    if (num == 0 && answer[answerNum] == null) {
        isZero = true;
    } else {
        isZero = false;
    }
    if (num == '.') {
        let inputStringVersion = String(answer[answerNum]);
        if (isFraction) {
            switch (fractionMode) {
                case "n":
                    inputStringVersion = String(answer[answerNum][0]);
                    break;
                case "d":
                    inputStringVersion = String(answer[answerNum][1]);
                    break;
                default:
                    break;
            }
        }
        if (inputStringVersion == "null") {
            inputStringVersion = '0.';
            num = '0.';
        } else {
            inputStringVersion += '.';
        }
        isFloat = true;
        haveFloat = true;
        if (isFraction) {
            switch (fractionMode) {
                case "n":
                    answer[answerNum][0] = inputStringVersion;
                    inputStrings =
                        inputtedText + '<span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                        '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                    showInputStrings(1);
                    break;
                case "d":
                    answer[answerNum][1] = inputStringVersion;
                    inputStrings =
                        inputtedText + '<span class="fraction"><span class="numerator">' +
                        '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                    showInputStrings(2);
                    break;
                default:
                    break;
            }
        } else {
            inputStrings += String(num);
            answer[answerNum] = inputStringVersion;
            showInputStrings(0);
        }
    } else {
        if (isFloat) {
            if (isFraction) {
                switch (fractionMode) {
                    case "n":
                        if (String(answer[answerNum][0]) == "null") {
                            answer[answerNum][0] = num;
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        } else {
                            answer[answerNum][0] += String(num);
                            answer[answerNum][0] = Number(answer[answerNum][0]);
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        }
                        showInputStrings(1);
                        break;
                    case "d":
                        if (String(answer[answerNum][1]) == "null") {
                            answer[answerNum][1] = num;
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        } else {
                            answer[answerNum][1] += String(num);
                            answer[answerNum][1] = Number(answer[answerNum][1]);
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        }
                        showInputStrings(2);
                        break;
                    default:
                        break;
                }

            } else {
                answer[answerNum] += String(num);
                inputStrings += String(num);
                showInputStrings(0);
            }
        } else {
            if (isFraction) {
                switch (fractionMode) {
                    case "n":
                        if (String(answer[answerNum][0]) == "null") {
                            answer[answerNum][0] = num;
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(1);
                        } else {
                            if (codeNow == -1) {
                                answer[answerNum][0] = answer[answerNum][0] * 10 - num;
                            } else {
                                answer[answerNum][0] = answer[answerNum][0] * 10 + num;
                            }
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(1);
                        }
                        break;
                    case "d":
                        if (String(answer[answerNum][1]) == "null") {
                            answer[answerNum][1] = num;
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(2);
                        } else {
                            if (codeNow == -1) {
                                answer[answerNum][1] = answer[answerNum][1] * 10 - num;
                            } else {
                                answer[answerNum][1] = answer[answerNum][1] * 10 + num;
                            }
                            inputStrings =
                                inputtedText + '<span class="fraction"><span class="numerator">' +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(2);
                        }
                        break;
                    default:
                        break;
                }
            } else {
                if (String(answer[answerNum]) == "null") {
                    answer[answerNum] = num;
                    inputStrings += String(num);
                    showInputStrings(0);
                } else {
                    if (codeNow == -1) {
                        answer[answerNum] = answer[answerNum] * 10 - num;
                    } else {
                        answer[answerNum] = answer[answerNum] * 10 + num;
                    }
                    inputStrings += String(num);
                    showInputStrings(0);
                }
            }

        }
    }
}


function showInputStrings(modeLocal) {
    const $output = $('#answer');
    switch (modeLocal) {
        case 0:
            $output.html(inputStrings);
            $output.append('<div id="cursor"></div>');
            break;
        case 1:
            $output.html(inputStrings);
            $output.append('<div id="cursor" class="up"></div>');
            break;
        case 2:
            $output.html(inputStrings);
            $output.append('<div id="cursor" class="down"></div>');
            break;
        default:
            break;
    }
}

// eslint-disable-next-line no-unused-vars
function clearText(howClear) {
    if (howClear == 1) {
        answer = [null];
        mode = [null];
        inputStrings = "";
        inputtedText = "";
        answerNum = 0;
        codeNow = 1;
        isFloat = false;
        haveFloat = false;
        isZero = false;
        isFraction = false;
        fractionMode = null;
        const $output = $('#answer');
        $output.html('');
        $output.text(0);
        $output.append('<div id="cursor"></div>');
        backToFraction();
    } else {
        answer[answerNum] = null;
        inputStrings = inputtedText;
        isFloat = false;
        isZero = false;
        isFraction = false;
        fractionMode = null;
        const $output = $('#answer');
        $output.html(inputStrings);
        if (answerNum == 0) {
            $output.text(0);
        }
        $output.append('<div id="cursor"></div>');
    }
}

function backToFraction() {
    const $button = $('#fraction1');
    $button.html('<span class="fraction"><span class= "numerator">a</span>'
        + '<br><span>b</span></span>');
    $button.removeClass("upFraction upFractionSmallFont smallFont");
}

// eslint-disable-next-line no-unused-vars
function showAnswer() {
    if (isFraction) {
        isFraction = false;
        return;
    }
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
            } else if (mode[forNum] == '%') {
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
    answer[answerNum] = null;
    if (modeLocal == '%') {
        inputStrings += 'あまり';
    } else {
        inputStrings += modeLocal;
    }
    inputtedText = inputStrings;
    showInputStrings(0);
}

// eslint-disable-next-line no-unused-vars
function changeCode() {
    answer[answerNum] *= -1;
    inputStrings = inputtedText + answer[answerNum];
    showInputStrings(0);
    codeNow = Math.sign(answer[answerNum]);
}

//eslint-disable-next-line no-unused-vars
function divHundred() {
    answer[answerNum] /= 100;
    inputStrings = inputtedText + answer[answerNum];
    showInputStrings(0);
}

//eslint-disable-next-line no-unused-vars
function backspace() {
    if (answer[answerNum] == null || answer[answerNum] == '') {
        return;
    }
    if (isFloat) {
        const remove = answer[answerNum].slice(-1);
        answer[answerNum] = answer[answerNum].slice(0, -1);
        if (remove == '.') {
            isFloat = false;
        }
    } else {
        answer[answerNum] = Math.floor(answer[answerNum] / 10);
    }
    if (!isZero && answer[answerNum] == 0) {
        answer[answerNum] = null;
    }
    inputStrings = inputStrings.slice(0, -1);
    if (inputStrings.slice(-1) == 0 && answer[answerNum] == null) {
        answer[answerNum] = 0;
    }
    isZero = false;
    showInputStrings(0);
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
    showInputStrings(0);
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
    showInputStrings(0);
}

//eslint-disable-next-line no-unused-vars
function addFraction(fracMode) {
    isFraction = true;
    const $button = $('#fraction1');
    if (fracMode) {
        return;
    } else {
        switch (fractionMode) {
            case "n":
                $button.text('確定');
                $button.addClass('upFraction').removeClass('upFractionSmallFont smallFont');
                break;
            case "d":
                $button.text('分子へ');
                $button.addClass('upFractionSmallFont smallFont');
                break;
            default:
                break;
        }
    }
    if ($button.attr('class').indexOf('upFraction') != -1) {
        switch (fractionMode) {
            case "n":
                isFraction = false;
                showInputStrings(0);
                backToFraction();
                fractionMode = null;
                break;
            case "d":
                fractionMode = "n";
                showInputStrings(1);
                break;
            default:
                break;
        }
    } else {
        if (fracMode) {
            if (answer[answerNum] == null) {
                answer[answerNum] = [null, null];
                inputStrings += '<span class="fraction"><span class="numerator">1</span><br><span>2</span></span>';
                showInputStrings(2);
            } else {
                let denominator = answer[answerNum].toString();
                answer[answerNum] = [null, Number(denominator)];
                inputStrings = inputStrings.slice(0, denominator.length * -1);
                inputStrings += '<span class="fraction"><span class="numerator">1</span><br><span>' + denominator + '</span></span>';
                showInputStrings(1);
            }
        } else {
            if (answer[answerNum] == null) {
                fractionMode = "d";
                answer[answerNum] = [null, null];
                inputStrings += '<span class="fraction"><span class="numerator"></span><br><span></span></span>';
                showInputStrings(2);
            } else {
                fractionMode = "n";
                let denominator = answer[answerNum].toString();
                answer[answerNum] = [null, Number(denominator)];
                inputStrings = inputStrings.slice(0, denominator.length * -1);
                inputStrings += '<span class="fraction"><span class="numerator"></span><br><span>' + denominator + '</span></span>';
                showInputStrings(1);
            }
        }
    }

    if (fracMode) {
        return;
    } else {
        switch (fractionMode) {
            case "n":
                $button.text('確定');
                $button.addClass('upFraction').removeClass('upFractionSmallFont smallFont');
                break;
            case "d":
                $button.text('分子へ');
                $button.addClass('upFractionSmallFont smallFont');
                break;
            default:
                break;
        }
    }
}