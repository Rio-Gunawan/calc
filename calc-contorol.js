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

$(".open-nav").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('activeSet');//ボタン自身に activeSetクラスを付与し
    $("#set-nav").toggleClass('setPanelActive');//ナビゲーションにsetPanelActiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".open-nav").removeClass('activeSet');//ボタンの activeSetクラスを除去し
    $("#setNav").removeClass('setPanelActive');//ナビゲーションのsetPanelActiveクラスも除去
});

document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    if (isFinite(keyName) && keyName != ' ') {
        // eslint-disable-next-line no-undef
        clickNum(Number(keyName));
    }

    switch (keyName) {
        case '+':
            // eslint-disable-next-line no-undef
            calcMode('+');
            break;
        case '-':
            // eslint-disable-next-line no-undef
            calcMode('-');
            break;
        case '*':
            // eslint-disable-next-line no-undef
            calcMode('*');
            break;
        case '/':
            // eslint-disable-next-line no-undef
            calcMode('/');
            break;
        case 'Enter':
            // eslint-disable-next-line no-undef
            showAnswer();
            break;
        case 'Backspace':
            // eslint-disable-next-line no-undef
            backspace();
            break;
        case '%':
            // eslint-disable-next-line no-undef
            divHundred();
            break;
        case '.':
            // eslint-disable-next-line no-undef
            clickNum('.');
            break;
        default:
            break;
    }
});