/*jshint browser: true, jquery: true*/

// Declare variables globally
var breakValue = 5;
var sessionValue = 25;

jQuery(document).ready(function ($) {
  // Assign current break and session time values:
  // Placed here in case the text for the default break and
  // session times is changed in the HTML
  // this will update accordingly and not break anything
  breakValue = $(".break-time-value").text();
  sessionValue = $(".session-time-value").text(); 
});

/* Start/Stop button toggle ---------------------------- */
$("#start-button").click(function() {
  // Toggle from triangle shape to square and vice versa
  $(this).toggleClass("triangle").toggleClass("square");
  // Toggle text alignment
  $("#timer-text").toggleClass("timer-text-triangle").toggleClass("timer-text-square");
  // Toggle shape alignment
  $("#shape-alignment").toggleClass("align-triangle").toggleClass("align-square");
});
/* ----------------------------------------------------- */

/* Actions upon pressing plus and minus buttons -------- */
$("#break-minus").click(function() {
  if (breakValue !== 0){
    breakValue--;
    // Update text value on page
    $(".break-time-value").html(breakValue);
  }
});

$("#break-plus").click(function() {
  if (breakValue <= 60){
    breakValue++;
    // Update text value on page
    $(".break-time-value").html(breakValue);
  }
});

$("#session-minus").click(function() {
  if (sessionValue <= 60){
    sessionValue--;
    // Update text value on page
    $(".session-time-value").html(sessionValue);
  }
});

$("#session-plus").click(function() {
  if (sessionValue <= 60){
    sessionValue++;
    // Update text value on page
    $(".session-time-value").html(sessionValue);
  }
});
/* ----------------------------------------------------- */