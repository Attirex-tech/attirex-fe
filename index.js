var countdownDate = new Date("2023-06-15T23:59:59").getTime();
function startCountdown() {
  var countdownTimer = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var days = days ? (days > 9 ? days : "0" + days) : "00";
    var hours = hours ? (hours > 9 ? hours : "0" + hours) : "00";
    var mins = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";
    var secs = seconds > 9 ? seconds : "0" + seconds;

    document.getElementById("days_holder").innerHTML = days;
    document.getElementById("hours_holder").innerHTML = hours;
    document.getElementById("mins_holder").innerHTML = mins;
    document.getElementById("sec_holder").innerHTML = secs;

    if (distance < 0) {
      clearInterval(countdownTimer);
      document.querySelector(".timer").textContent = "Expired";
    }
  }, 1000);
}

startCountdown();
