/* globals $ */
"use strict";

var countDownDate = new Date("Nov 10, 2018 9:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(days);
  $("#hours").html(hours);
  $("#minutes").html(minutes);
  $("#seconds").html(seconds);

  if (distance < 0) {
    clearInterval(x);
    // TODO: create handler for when the timer runs out
  }
}, 1000);