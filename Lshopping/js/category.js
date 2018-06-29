$(function () {

  Route.getcategorytitle(function (title) {

    // console.log(title);
    $(".category_title").html(template("titleTpl", title));

    $(".category_title > li > a").on("click", function () {

      var $that = $(this);
      // console.log(that);
      var id = $that.data("title-id");
      // console.log(id);

      $that.parent().find('ul').toggleClass('hide');

      //判断有没有获取到详细分类，若有，则不再请求数据
      if ($($that).parent().find(".category_content").children().length == 0) {

        Route.getcategory(id, function (content) {

          // console.log(content, $that); 
          $($that).parent().find(".category_content").html(template("contentTpl", content));
  
        });

      }

    });

  });

});