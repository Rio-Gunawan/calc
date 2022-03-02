// スクロールのヘッダーここから

var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    if (String($('#header-nav').attr('class')).indexOf('panelActive') != -1) {
        return;
    }
    var elemTop = $('#bread').offset().top;//タイトルの位置まできたら
    var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if (scroll == beforePos) {
        //IE11対策で処理を入れない
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
        //ヘッダーが上から出現する
        $('#header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
        $('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    } else {
        //ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
        $('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }

    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    if (String($('#header-nav').attr('class')).indexOf('panelActive') != -1) {
        return;
    }
    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 230) {//200pxスクロールしたら
        $('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
        $('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
    } else {//それ以外は
        if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名が既に付与されていたら
            $('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
            $('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
        }
    }

    var wH = window.innerHeight; //画面の高さを取得
    var footerPos = $('#footer').offset().top; //footerの位置を取得
    if (scroll + wH >= (footerPos + 10)) {
        var pos = (scroll + wH) - footerPos + 10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
        $('#page-top').css('bottom', pos);	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    } else {//それ以外は
        if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名がついていたら
            $('#page-top').css('bottom', '10px');// 下から10pxの位置にページリンクを指定
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// スクロールのヘッダーここまで

// トップのボタンをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// ページ内リンク
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

// スマホ用のナビボタン

$(".openBtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header-nav").toggleClass('panelActive');//ナビゲーションにpanelActiveクラスを付与
    $("#title").toggleClass('titleActive');//これもtitleActiveクラスを付与
    $("#gray-sheet").fadeToggle(); //ほかを暗くする
});

$("#header-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openBtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header-nav").removeClass('panelActive');//ナビゲーションのpanelActiveクラスも除去
    $("#title").removeClass('titleActive');//これもtitleActiveクラスを除去
    $("#gray-sheet").fadeOut(); //ほかを明るくする
});

// ナビゲーションバー以外をタップして閉じる

$(document).click(function (e) {
    if (String($('#header-nav').attr('class')).indexOf('panelActive') != -1) {
        if (!($(e.target).closest('#header-nav').length)
            &&!($(e.target).closest('#title').length)
            && !($(e.target).closest('.openBtn').length)) {
            // ターゲット要素の外側をクリックした時の操作
            $(".openBtn").removeClass('active');//ボタンの activeクラスを除去し
            $("#header-nav").removeClass('panelActive');//ナビゲーションのpanelActiveクラスも除去
            $("#title").removeClass('titleActive');//これもtitleActiveクラスを除去
            $("#gray-sheet").fadeOut(); //ほかを明るくする
        }
    }
});