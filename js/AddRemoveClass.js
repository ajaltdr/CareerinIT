// Add Remove Class from Jquery(Toggle used)

$(document).ready(function(){
  $(".addremove").click(function(){
    $("h1, h3").toggleClass("red"); // Adding and Remove class red in h1 and h2
  });
});