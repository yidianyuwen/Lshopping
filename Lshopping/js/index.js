$(function () {

  //渲染导航栏
  Route.getindexmenu (function (info) {

    // console.log(info);
    $(".m_nav ul").html(template("navTpl", info));

    $("#show").on("click", function () {

      $("#show").nextAll().toggleClass("hide");

    });

  });

  //渲染产品列表
  Route.getmoneyctrl (function (pageid) {

    // console.log(pageid);
    $(".m_product ul").html(template("productTpl", pageid));

  });

  

})