$(document).ready(function () {
  $(".btn").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".content").slideUp("fast");
      $(this).removeClass("active");
      console.log(this);
    } else {
      $(".content").slideUp("fast");
      $(".btn").removeClass("active");
      $(this).siblings(".content").slideToggle();
      $(this).toggleClass("active");
      console.log(this);
    }
  });
});

let style = {
  border: "2px solid gray",
  color: "black",
  margin: "10px 0px",
  borderRadius: "5px",
};
$(".btn").css(style);

$(".content").css(style);
