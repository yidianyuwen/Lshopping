$(function () {

  var obj = Tools.query(location.href);
  // console.log(obj);

  //渲染数据
  Route.getmoneyctrlproduct (obj["productid"], function (productid) {

    console.log(productid);
    $(".product_content").html(template("productTpl", productid));

  });

});