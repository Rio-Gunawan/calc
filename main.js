// for scroll
$(function () {
    $('a[href^="#"]').click(function () {
        //スピード
        let speed = 500;
        //移動すると指定された場所
        let href = $(this).attr("href");
        //実際に移動する場所
        let target = $(href == "#" || href == "" ? 'html' : href);
        //その場所までの距離
        let position = target.offset().top;
        //アニメーションスタート
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        //リンクが作動しないように
        return false;
    });
});


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


$(".openBtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header_nav").toggleClass('panelActive');//ナビゲーションにpanelActiveクラスを付与
    $("#title").toggleClass('titleActive');//これもtitleActiveクラスを付与
});

$("#header_nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openBtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header_nav").removeClass('panelActive');//ナビゲーションのpanelActiveクラスも除去
    $("#title").removeClass('titleActive');//これもtitleActiveクラスを除去
});

$(".hamburger").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('activeSet');//ボタン自身に activeSetクラスを付与し
    $("#setNav").toggleClass('setPanelActive');//ナビゲーションにsetPanelActiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('activeSet');//ボタンの activeSetクラスを除去し
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
            clearText(1);
            break;
        case '.':
            // eslint-disable-next-line no-undef
            clickNum('.');
            break;
        default:
            break;
    }
});