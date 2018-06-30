$(function () {

  var myscroll = new IScroll("#wrapper", {
    hScroll: true,
    vScroll: false,
    

  });

  Route.getbaicaijiatitle(function (titleId) {

    console.log(titleId);


  });

  Route.getbaicaijiaproduct(0, function (bcjProduct) {

    console.log(bcjProduct);
    $(".bcj_list ul").html(template("bcjProductTpl", bcjProduct))

  });

})