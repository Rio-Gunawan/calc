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