$('#tab-contents .tab[id !="tab1"]').hide();

$('#tab-menu a').on('click',function(event){
  // activeクラスの付け外し
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");

  // contentsの表示非表示
  // 全て消す
  $("#tab-contents .tab").hide();

  // thisでクリックされたattrメソッドで
  // href属性の値を取得し、表示する
  $($(this).attr("href")).show();

  // hrefの無効化
  event.preventDefault();
});
