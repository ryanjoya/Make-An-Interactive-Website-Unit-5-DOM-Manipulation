var main = function() {
  $("li").click(function() {
    $(this).addClass("read");
  });
};


$(document).ready(main);
