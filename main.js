$(document).ready(function(){
  // ナビゲーションバーの高さを取得する
  var navbarHeight = $('.navbar').outerHeight();

  // ナビゲーションバーのリンクをクリックしたときの処理
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));
    if( target.length ) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top - navbarHeight
        }, 1000);
    }
  });
});
