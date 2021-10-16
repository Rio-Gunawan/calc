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