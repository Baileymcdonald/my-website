// function myFunction() {
//     var $nav = $(".navbar");
//       $nav.toggleClass('clicked', $(this).onclick);
// }
// function myFunction1() {
//     var $nav = $(".navbar");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// }
$(document).ready(function() {
    $(window).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(document).ready(function() {
    $(window).scroll(function () {
      var $nav = $("a");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(document).ready(function() {
    $(window).scroll(function () {
      var $nav = $(".fa-navicon");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });