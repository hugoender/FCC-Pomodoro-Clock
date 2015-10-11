/*jshint browser: true, jquery: true*/
jQuery(document).ready(function ($) {
  
});

$("#start-button").click(function() {
  $(this).toggleClass("triangle").toggleClass("square");
  $("#timer-text").toggleClass("timer-text-triangle").toggleClass("timer-text-square");
  $("#shape-alignment").toggleClass("align-triangle").toggleClass("align-square");
});
    
    
//    "square", ).removeClass("triangle");
//  $("#timer-text").addClass("timer-text-square").removeClass("timer-text-triangle");
//  $(".align-triangle").removeClass("align-triangle").addClass("align-square");
//});