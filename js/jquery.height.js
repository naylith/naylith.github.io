// インラインフレームの高さを決定

var timer = false;
$(window).on("load orientationchange resize",function(){
if (timer !== false) {
clearTimeout(timer);
}
timer = setTimeout(function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width(),
        b = $("body").height(),
        h = $("header").outerHeight(true),
        f = $("footer").outerHeight(true);
  if (768 <=  w) {// windowの幅が768以上の時のインラインフレームの高さ
    $("#rightcolumn-inner,#leftcolumn-inner").css("height", b - h - f - 64 + "px");
  } else {// windowの幅が768以下の時
    $("#rightcolumn-inner").css("height", b - h - f + "px");
    $("#leftcolumn-inner").css("height", "auto");
  }
}, 100);
});
