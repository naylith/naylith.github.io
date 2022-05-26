$(function() {

  //アコーディオンメニュー
  $('nav p').on('click', function() {
    $(this).next('ul').slideToggle();
    $(this).children('span').toggleClass('open');
    $('.sub-menu').not($(this).next('.sub-menu')).slideUp();
    $('nav p').children('span').not($(this).children('span')).removeClass('open');
  });
  
  //小画面時にメニュー内リンクを押した場合、一度閉じる
  //ページ内リンク用
  $('#leftcolumn a').on('click', function() {
    if (window.innerWidth <= 768) {
      $('#open').click();
    }
  });
  
  //小画面時にメニューを閉じてからリサイズするとメニューが表示されないのを防ぐ
  $(window).resize(function() {
    var menu = $('#leftcolumn');
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    if (w > 768 && menu.is(':hidden')) {
      menu.attr('style', '');
    }
  });
    
  //メニューを開くボタンの動作
  var text = $('.open-text');
  $('#open').click(function() {
    $('#leftcolumn').slideToggle(300);
    $('#open-icon').toggleClass('close');
    if ($('#open-icon').hasClass('close')) {
      text.text('Close');
    }
    else {
      text.text('Menu');
    }
    return false;
  });
    
});
