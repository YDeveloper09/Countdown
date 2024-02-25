var setDate = new Date("Jan 1, 2025 00:00:00").getTime();

var x = setInterval(function() {var now = new Date().getTime();

    // Find the distance between now and the count down date
    var diff = setDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
   
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (diff < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "HAPPY NEW YEAR!";
    }
  }, 1000);