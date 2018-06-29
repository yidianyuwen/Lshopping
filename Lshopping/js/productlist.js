$(function () {

  var id = Tools.query(location.href);
  // console.log(id)
  
  Route.getcategorybyid (id["categoryid"], function (self) {

    // console.log(self);
    $(".bread_crumb_self").html(template("selfTpl", self));

  });

  Route.getproductlist (id["categoryid"], id["pageid"], function (list) {

    console.log(list);
    $(".product_list ul").html(template("productTpl", list));
    

  })

});