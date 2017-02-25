$(function() {
    $listAjax = $('#listAjax');
});

var loadAjax = function() {
  var $ajaxLoader = $.ajax({
    url: "api/liste.json",
    dataType: "json"
  });

  $ajaxLoader.done(function(data) {
    data.forEach(function(e, i, a) {
      var $item = $('<li>' + e.caption + '</li>')

      $listAjax.append($item);
    });
  });
};

$(document).on("click", "#loadAjax", function() {
  $listAjax.empty();
  loadAjax();
});
