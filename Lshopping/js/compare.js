$(function () {

  var id = Tools.query(location.href);

  Route.getproduct(id["productid"], function (info) {

    console.log(info)
    $(".compare_product").html(template("productTpl", info));
    $(".bjShop").html(template("bjshopTpl", info));

  });
  Route.getproductcom (id["productid"], function (comment) {

    // console.log(comment);
    $(".comment_list ul").html(template("commentTpl", comment));

  });

});