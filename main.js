$(document).ready(function() {
  // リストのアイテム数を取得
  const totalItems = $('#news-list li').length;
  // 最初に表示するアイテム数
  const initialItems = 3;
  // 表示されているアイテム数
  let displayedItems = initialItems;
  // 「もっと見る」ボタン
  const moreButton = $('#more-button');

  // 初期表示ではアイテムを制限して表示
  $('#news-list li:nth-child(n + ' + (initialItems + 1) + ')').hide();

  // 「もっと見る」ボタンがクリックされた時の処理
  moreButton.on('click', function() {
    // 制限を解除して全てのアイテムを表示
    $('#news-list li:nth-child(n + ' + (displayedItems + 1) + ')').show();
    // 表示されているアイテム数を更新
    displayedItems = totalItems;
    // 「もっと見る」ボタンを非表示にする
    moreButton.hide();
  });
});

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
