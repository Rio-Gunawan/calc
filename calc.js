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
let haveFraction = false;
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
                case "i":
                    inputStringVersion = String(answer[answerNum][2]);
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
                        inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                        + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                        '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                    showInputStrings(1);
                    break;
                case "d":
                    answer[answerNum][1] = inputStringVersion;
                    inputStrings =
                        inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                        + '</span><span class="fraction"><span class="numerator">' +
                        '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                    showInputStrings(2);
                    break;
                case "i":
                    answer[answerNum][2] = inputStringVersion;
                    inputStrings =
                        inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                        + '</span><span class="fraction"><span class="numerator">' +
                        '</span><br><span></span></span>';
                    showInputStrings(3);
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
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        } else {
                            answer[answerNum][0] += String(num);
                            answer[answerNum][0] = Number(answer[answerNum][0]);
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        }
                        showInputStrings(1);
                        break;
                    case "d":
                        if (String(answer[answerNum][1]) == "null") {
                            answer[answerNum][1] = num;
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        } else {
                            answer[answerNum][1] += String(num);
                            answer[answerNum][1] = Number(answer[answerNum][1]);
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        }
                        showInputStrings(2);
                        break;
                    case "i":
                        if (String(answer[answerNum][2]) == "null") {
                            answer[answerNum][2] = num;
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                        } else {
                            answer[answerNum][2] += String(num);
                            answer[answerNum][2] = Number(answer[answerNum][1]);
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' +
                                '</span><br><span></span></span>';
                        }
                        showInputStrings(3);
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
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(1);
                        } else {
                            if (codeNow == -1) {
                                answer[answerNum][0] = answer[answerNum][0] * 10 - num;
                            } else {
                                answer[answerNum][0] = answer[answerNum][0] * 10 + num;
                            }
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(1);
                        }
                        break;
                    case "d":
                        if (String(answer[answerNum][1]) == "null") {
                            answer[answerNum][1] = num;
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(2);
                        } else {
                            if (codeNow == -1) {
                                answer[answerNum][1] = answer[answerNum][1] * 10 - num;
                            } else {
                                answer[answerNum][1] = answer[answerNum][1] * 10 + num;
                            }
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' +
                                '</span><br><span>' + answer[answerNum][1] + '</span></span>';
                            showInputStrings(2);
                        }
                        break;
                    case "i":
                        if (String(answer[answerNum][2]) == "null") {
                            answer[answerNum][2] = num;
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' +
                                '</span><br><span></span></span>';
                            showInputStrings(3);
                        } else {
                            if (codeNow == -1) {
                                answer[answerNum][2] = answer[answerNum][2] * 10 - num;
                            } else {
                                answer[answerNum][2] = answer[answerNum][2] * 10 + num;
                            }
                            inputStrings =
                                inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
                                + '</span><span class="fraction"><span class="numerator">' +
                                '</span><br><span></span></span>';
                            showInputStrings(3);
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

function getInteger() {
    if (answer[answerNum][2] == null) {
        return '';
    } else {
        return answer[answerNum][2];
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
        case 3:
            $output.html(inputStrings);
            $output.append('<div id="cursor" class="left"></div>');
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
        haveFraction = false;
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
    const $button0 = $('#fraction0');
    const $button1 = $('#fraction1');
    $button1.html('<span class="fraction"><span class= "numerator">a</span>'
        + '<br><span>b</span></span>');
    $button1.removeClass("upFraction upFractionSmallFont smallFont");
    $button0.html('<span class="topLittle">a</span><span class="fraction">'
        + '<span class="numerator">b</span><br><span>c</span></span>');
    $button0.removeClass("upFraction upFractionSmallFont smallFont");
}

// eslint-disable-next-line no-unused-vars
function showAnswer() {
    let answerCopy = answer.slice(0, answer.length);
    let localAnswer = answerCopy.shift();
    let forNum = 0;
    if (haveFraction) {
        isFraction = false;
        if (mode[0] === null) {
            reduceFraction(null, null);
            if (answer[answerNum][1] == 1) {
                inputStrings = answer[answerNum][0];
            } else {
                inputStrings =
                    '<span class="smallFontAnswerBox">' + getInteger()
                    + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
                    '</span><br><span>' + answer[answerNum][1] + '</span></span>';
            }
            showInputStrings(0);
        } else {
            let localNumerator;
            let localDenominator;
            let localInteger;
            let errorLog = false;
            if (typeof (localAnswer) == 'object') {
                localNumerator = localAnswer[0];
                localDenominator = localAnswer[1];
                localInteger = localAnswer[2];
            } else {
                localNumerator = localAnswer;
                localDenominator = 1;
                localInteger = null;
                localAnswer = [localAnswer, 1, null];
            }
            if (haveFloat) {
                localNumerator = BigNumber(localNumerator);
                localDenominator = BigNumber(localDenominator);
                if (localInteger != null) {
                    localInteger = BigNumber(localInteger);
                }
                answerCopy.forEach(num => {
                    if (!(typeof (num) == 'object')) {
                        num = [num, 1, null];
                    }
                    num[0] = BigNumber(num[0]);
                    num[1] = BigNumber(num[1]);
                    if (num[2] != null) {
                        num[2] = BigNumber(num[2]);
                    }
                    switch (mode[forNum]) {
                        case '+':
                            //通分をする
                            localNumerator = localNumerator.times(num[1].div(reduceFraction(localDenominator, num[1])));
                            num[0] = num[0].times(localDenominator.div(reduceFraction(localDenominator, num[1])));
                            //計算
                            localDenominator = localDenominator.div(reduceFraction(localDenominator, num[1])).times(num[1]);
                            localNumerator = localNumerator.plus(num[0]);
                            if (localInteger !== null || num[2] !== null) {
                                localInteger += num[2];
                                if (localNumerator >= localDenominator) {
                                    localInteger += ~~(localNumerator / localDenominator);
                                    localNumerator -= ~~(localNumerator / localDenominator) * localDenominator;
                                }
                            }
                            break;
                        case '-':
                            if (localInteger !== null || num[2] !== null) {
                                if (localNumerator < num[0]) {
                                    localInteger -= ~~((num[0] - localNumerator) / localDenominator) + 1;
                                    localNumerator += (~~((num[0] - localNumerator) / localDenominator) + 1) * localDenominator;
                                }
                                localInteger -= num[2];
                            }
                            localNumerator *= num[1] / reduceFraction(localDenominator, num[1]);
                            num[0] *= localDenominator / reduceFraction(localDenominator, num[1]);
                            localNumerator -= num[0];
                            localDenominator = localDenominator / reduceFraction(localDenominator, num[1]) * num[1];
                            break;
                        case '*':
                            localNumerator = beImproperFraction([localNumerator, localDenominator, localInteger])[0];
                            localInteger = null;
                            num[0] = beImproperFraction(num)[0];
                            localNumerator *= num[0];
                            localDenominator *= num[1];
                            break;
                        case '/':
                            localNumerator = beImproperFraction([localNumerator, localDenominator, localInteger])[0];
                            localInteger = null;
                            num[0] = beImproperFraction(num)[0];
                            localNumerator *= num[1];
                            localDenominator *= num[0];
                            break;
                        case '%':
                            errorLog = true;
                            break;
                        default:
                            break;
                    }
                    forNum++;
                });
            } else {
                answerCopy.forEach(num => {
                    if (!(typeof (num) == 'object')) {
                        num = [num, 1, null];
                    }
                    switch (mode[forNum]) {
                        case '+':
                            localNumerator *= num[1] / reduceFraction(localDenominator, num[1]);
                            num[0] *= localDenominator / reduceFraction(localDenominator, num[1]);
                            localNumerator += num[0];
                            localDenominator = localDenominator / reduceFraction(localDenominator, num[1]) * num[1];
                            if (localInteger !== null || num[2] !== null) {
                                localInteger += num[2];
                                if (localNumerator >= localDenominator) {
                                    localInteger += ~~(localNumerator / localDenominator);
                                    localNumerator -= ~~(localNumerator / localDenominator) * localDenominator;
                                }
                            }
                            break;
                        case '-':
                            if (localInteger !== null || num[2] !== null) {
                                if (localNumerator < num[0]) {
                                    localInteger -= ~~((num[0] - localNumerator) / localDenominator) + 1;
                                    localNumerator += (~~((num[0] - localNumerator) / localDenominator) + 1) * localDenominator;
                                }
                                localInteger -= num[2];
                            }
                            localNumerator *= num[1] / reduceFraction(localDenominator, num[1]);
                            num[0] *= localDenominator / reduceFraction(localDenominator, num[1]);
                            localNumerator -= num[0];
                            localDenominator = localDenominator / reduceFraction(localDenominator, num[1]) * num[1];
                            break;
                        case '*':
                            localNumerator = beImproperFraction([localNumerator, localDenominator, localInteger])[0];
                            localInteger = null;
                            num[0] = beImproperFraction(num)[0];
                            localNumerator *= num[0];
                            localDenominator *= num[1];
                            break;
                        case '/':
                            localNumerator = beImproperFraction([localNumerator, localDenominator, localInteger])[0];
                            localInteger = null;
                            num[0] = beImproperFraction(num)[0];
                            localNumerator *= num[1];
                            localDenominator *= num[0];
                            break;
                        case '%':
                            errorLog = true;
                            break;
                        default:
                            break;
                    }
                    forNum++;
                });
            }

            //分数の約分をする。
            let greatest = reduceFraction(localNumerator, localDenominator);
            if (haveFloat) {
                localNumerator = localNumerator.div(greatest);
                localDenominator = localDenominator.div(greatest);
                //数値に戻す
                localDenominator = localDenominator.toNumber();
                localNumerator = localNumerator.toNumber();
            } else {
                localNumerator /= greatest;
                localDenominator /= greatest;
            }
            if (localDenominator == 1) {
                localAnswer = localNumerator + localInteger;
            } else if (localInteger === null) {
                localAnswer = '<span class="fraction"><span class="numerator">' + localNumerator +
                    '</span><br><span>' + localDenominator + '</span></span>';
            } else {
                localAnswer = '<span class="smallFontAnswerBox">' + localInteger
                    + '</span><span class="fraction"><span class="numerator">' + localNumerator +
                    '</span><br><span>' + localDenominator + '</span></span>';
            }

            if (errorLog) {
                localAnswer = 'エラー';
            }

            const $output = $('#answer');
            if (answerCopy.length == 0) {
                $output.html('0');
            } else {
                $output.html('');
            }
            $output.html(localAnswer);
            $output.append('<div id="cursor"></div>');
        }
        return;
    }
    if (isFloat) {
        isFloat = false;
    }
    if (haveFloat) {
        localAnswer = BigNumber(localAnswer);
        answerCopy.forEach(num => {
            const bigNum = BigNumber(num);
            switch (mode[forNum]) {
                case '+':
                    localAnswer = localAnswer.plus(bigNum);
                    break;
                case '-':
                    localAnswer = localAnswer.minus(bigNum);
                    break;
                case '*':
                    localAnswer = localAnswer.times(bigNum);
                    break;
                case '/':
                    localAnswer = localAnswer.div(bigNum);
                    break;
                case '%':
                    localAnswer = localAnswer.mod(bigNum);
                    break;
                default:
                    break;
            }
            forNum++;
        });
        localAnswer = localAnswer.toNumber();
    } else {
        answerCopy.forEach(num => {
            switch (mode[forNum]) {
                case '+':
                    localAnswer += num;
                    break;
                case '-':
                    localAnswer -= num;
                    break;
                case '*':
                    localAnswer *= num;
                    break;
                case '/':
                    localAnswer /= num;
                    break;
                case '%':
                    localAnswer %= num;
                    break;
                default:
                    break;
            }
            forNum++;
        });
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

function reduceFraction(n, d) {
    if (n !== null && d !== null) {
        let greatest;
        let variable;
        if (BigNumber.isBigNumber(n)) {
            if (n.lt(d)) {
                variable = d.mod(n);
                greatest = n;
            } else {
                variable = n.mod(d);
                greatest = d;
            }
            while (variable != 0) {
                let variable1 = greatest.mod(variable);
                greatest = variable;
                variable = variable1;
            }
        } else {
            if (n < d) {
                variable = d % n;
                greatest = n;
            } else {
                variable = n % d;
                greatest = d;
            }
            while (variable != 0) {
                let variable1 = greatest % variable;
                greatest = variable;
                variable = variable1;
            }
        }
        return greatest;
    } else {
        let greatest;
        let variable;
        if (answer[answerNum][0] < answer[answerNum][1]) {
            variable = answer[answerNum][1] % answer[answerNum][0];
            greatest = answer[answerNum][0];
        } else {
            variable = answer[answerNum][0] % answer[answerNum][1];
            greatest = answer[answerNum][1];
        }
        while (variable != 0) {
            let variable1 = greatest % variable;
            greatest = variable;
            variable = variable1;
        }
        answer[answerNum][0] /= greatest;
        answer[answerNum][1] /= greatest;
    }
}

function beImproperFraction(frac) {
    frac[0] = frac[2] * frac[1] + frac[0];
    frac[2] = null;
    return frac;
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
    if (haveFraction) {
        inputStrings = inputtedText + '<span class="smallFontAnswerBox">-' + getInteger()
            + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
            '</span><br><span>' + answer[answerNum][1] + '</span></span>';
        answer[answerNum][0] *= -1;
        showInputStrings(0);
        codeNow = Math.sign(answer[answerNum][0]);
    } else {
        answer[answerNum] *= -1;
        inputStrings = inputtedText + answer[answerNum];
        showInputStrings(0);
        codeNow = Math.sign(answer[answerNum]);
    }
}

//eslint-disable-next-line no-unused-vars
function divHundred() {
    if (haveFraction) {
        answer[answerNum][1] *= 100;
        reduceFraction(null, null);
        inputStrings = inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
            + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
            '</span><br><span>' + answer[answerNum][1] + '</span></span>';
        showInputStrings(0);
    } else {
        answer[answerNum] /= 100;
        inputStrings = inputtedText + answer[answerNum];
        showInputStrings(0);
    }
}

//eslint-disable-next-line no-unused-vars
function backspace() {
    if (answer[answerNum] == null || answer[answerNum] == '') {
        return;
    }
    if (haveFraction) {
        let fracNum = null;
        switch (fractionMode) {
            case 'n':
                fracNum = 0;
                break;
            case 'd':
                fracNum = 1;
                break;
            case 'i':
                fracNum = 2;
                break;
            default:
                break;
        }
        if (isFloat) {
            const remove = answer[answerNum][fracNum].slice(-1);
            answer[answerNum][fracNum] = answer[answerNum][fracNum].slice(0, -1);
            if (remove == '.') {
                isFloat = false;
            }
        } else {
            answer[answerNum][fracNum] = Math.floor(answer[answerNum][fracNum] / 10);
        }
        if (!isZero && answer[answerNum][fracNum] == 0) {
            answer[answerNum][fracNum] = null;
        }
        let localNumerator = answer[answerNum][0];
        let localDenominator = answer[answerNum][1];
        if (localDenominator === null) {
            localDenominator = '';
        }
        if (localNumerator === null) {
            localNumerator = '';
        }
        inputStrings = inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
            + '</span><span class="fraction"><span class="numerator">' + localNumerator +
            '</span><br><span>' + localDenominator + '</span></span>';
        switch (fractionMode) {
            case 'n':
                showInputStrings(1);
                break;
            case 'd':
                showInputStrings(2);
                break;
            case 'i':
                showInputStrings(3);
                break;
            default:
                break;
        }
    }
    else {
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
        showInputStrings(0);
    }
    isZero = false;
    if (inputStrings.length == 0) {
        const $output = $('#answer');
        $output.html('');
        $output.text(0);
        $output.append('<div id="cursor"></div>');
    }
}

//eslint-disable-next-line no-unused-vars
function powNum() {
    if (haveFraction) {
        let localAnswer = answer[answerNum];
        localAnswer = beImproperFraction(localAnswer);
        if (haveFloat) {
            localAnswer[0] = BigNumber(localAnswer);
            localAnswer[1] = BigNumber(localAnswer);
            localAnswer[0] = localAnswer.pow(2);
            localAnswer[1] = localAnswer.pow(2);
            localAnswer[0] = localAnswer.toNumber();
            localAnswer[1] = localAnswer.toNumber();
        } else {
            localAnswer[0] = Math.pow(localAnswer[0], 2);
            localAnswer[1] = Math.pow(localAnswer[1], 2);
        }
        answer[answerNum] = localAnswer;
        reduceFraction(null, null);
        inputStrings = inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
            + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
            '</span><br><span>' + answer[answerNum][1] + '</span></span>';
        showInputStrings(0);
    } else {
        let localAnswer = answer[answerNum];
        if (haveFloat) {
            localAnswer = BigNumber(localAnswer);
            localAnswer = localAnswer.pow(2);
            localAnswer = localAnswer.toNumber();
        } else {
            localAnswer = Math.pow(localAnswer, 2);
        }
        answer[answerNum] = localAnswer;
        inputStrings = inputtedText + String(localAnswer);
        showInputStrings(0);
    }
}

//eslint-disable-next-line no-unused-vars
function sqrtNum() {
    if (haveFraction) {
        let localAnswer = answer[answerNum];
        localAnswer = beImproperFraction(localAnswer);
        if (haveFloat) {
            localAnswer[0] = BigNumber(localAnswer);
            localAnswer[1] = BigNumber(localAnswer);
            localAnswer[0] = localAnswer.sqrt(2);
            localAnswer[1] = localAnswer.sqrt(2);
            localAnswer[0] = localAnswer.toNumber();
            localAnswer[1] = localAnswer.toNumber();
        } else {
            localAnswer[0] = Math.sqrt(localAnswer[0], 2);
            localAnswer[1] = Math.sqrt(localAnswer[1], 2);
        }
        answer[answerNum] = localAnswer;
        reduceFraction(null, null);
        inputStrings = inputtedText + '<span class="smallFontAnswerBox">' + getInteger()
            + '</span><span class="fraction"><span class="numerator">' + answer[answerNum][0] +
            '</span><br><span>' + answer[answerNum][1] + '</span></span>';
        showInputStrings(0);
    } else {
        let localAnswer = answer[answerNum];
        if (haveFloat) {
            localAnswer = BigNumber(localAnswer);
            localAnswer = localAnswer.sqrt(2);
            localAnswer = localAnswer.toNumber();
        } else {
            localAnswer = Math.sqrt(localAnswer, 2);
        }
        inputStrings = inputStrings.slice(0, String(answer[answerNum]).length * -1);
        answer[answerNum] = localAnswer;
        inputStrings = inputStrings + String(localAnswer);
        showInputStrings(0);
    }
}

//eslint-disable-next-line no-unused-vars
function addFraction(fracMode) {
    isFraction = true;
    haveFraction = true;
    const $button0 = $('#fraction0');
    const $button1 = $('#fraction1');
    if (fracMode) {
        switch (fractionMode) {
            case "n":
                $button0.text('確定');
                $button0.addClass('upFraction').removeClass('upFractionSmallFont smallFont');
                break;
            case "d":
                $button0.text('分子へ');
                $button0.addClass('upFractionSmallFont smallFont');
                break;
            case "i":
                $button0.text('分母へ');
                $button0.addClass('upFractionSmallFont smallFont');
                break;
            default:
                break;
        }
    } else {
        switch (fractionMode) {
            case "n":
                $button1.text('確定');
                $button1.addClass('upFraction').removeClass('upFractionSmallFont smallFont');
                break;
            case "d":
                $button1.text('分子へ');
                $button1.addClass('upFractionSmallFont smallFont');
                break;
            default:
                break;
        }
    }
    if ($button1.attr('class').indexOf('upFraction') != -1 ||
        $button0.attr('class').indexOf('upFraction') != -1) {
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
            case "i":
                fractionMode = "d";
                showInputStrings(2);
                break;
            default:
                break;
        }
    } else {
        if (fracMode) {
            if (answer[answerNum] == null) {
                fractionMode = "i";
                answer[answerNum] = [null, null, null];
                inputStrings += '<span class="smallFontAnswerBox">'
                    + '</span><span class="fraction"><span class="numerator"></span><br><span></span></span>';
                showInputStrings(3);
            } else {
                fractionMode = "d";
                let integer = answer[answerNum].toString();
                answer[answerNum] = [null, null, Number(integer)];
                inputStrings = inputStrings.slice(0, integer.length * -1);
                inputStrings += '<span class="smallFontAnswerBox">' + integer + '</span><span class="fraction">' +
                    '<span class="numerator"></span><br><span></span></span>';
                showInputStrings(2);
            }
        } else {
            if (answer[answerNum] == null) {
                fractionMode = "d";
                answer[answerNum] = [null, null, null];
                inputStrings += '<span class="smallFontAnswerBox">'
                    + '</span><span class="fraction"><span class="numerator"></span><br><span></span></span>';
                showInputStrings(2);
            } else {
                fractionMode = "n";
                let denominator = answer[answerNum].toString();
                answer[answerNum] = [null, Number(denominator), null];
                inputStrings = inputStrings.slice(0, denominator.length * -1);
                inputStrings += '<span class="smallFontAnswerBox">'
                    + '</span><span class="fraction"><span class="numerator"></span><br><span>' + denominator + '</span></span>';
                showInputStrings(1);
            }
        }
    }

    if (fracMode) {
        switch (fractionMode) {
            case "n":
                $button0.text('確定');
                $button0.addClass('upFraction').removeClass('upFractionSmallFont smallFont');
                break;
            case "d":
                $button0.text('分子へ');
                $button0.addClass('upFractionSmallFont smallFont');
                break;
            case "i":
                $button0.text('分母へ');
                $button0.addClass('upFractionSmallFont smallFont');
                break;
            default:
                break;
        }
    } else {
        switch (fractionMode) {
            case "n":
                $button1.text('確定');
                $button1.addClass('upFraction').removeClass('upFractionSmallFont smallFont');
                break;
            case "d":
                $button1.text('分子へ');
                $button1.addClass('upFractionSmallFont smallFont');
                break;
            default:
                break;
        }
    }
}