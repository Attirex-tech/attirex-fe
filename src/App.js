import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
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

      var _days = days ? (days > 9 ? days : "0" + days) : "00";
      var _hours = hours ? (hours > 9 ? hours : "0" + hours) : "00";
      var mins = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00";
      var secs = seconds > 9 ? seconds : "0" + seconds;

      document.getElementById("days_holder").innerHTML = _days;
      document.getElementById("hours_holder").innerHTML = _hours;
      document.getElementById("mins_holder").innerHTML = mins;
      document.getElementById("sec_holder").innerHTML = secs;

      if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector(".timer").textContent = "Expired";
      }
    }, 1000);
  }

  useEffect(() => {
    startCountdown();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <div className="Logo">
            <p>
              attirex.<span style={{ color: "rgb(212, 11, 71)" }}>in</span>
            </p>
            <p className="smallFont">
              Launching soon to elevate your wardrobe!!
            </p>
          </div>
          <div className="timer_holder">
            <div id="days" className="days margin">
              <p id="days_holder" className="fontSize"></p>
              <p>Days</p>
            </div>
            <div id="hours" className="Hours margin">
              <p id="hours_holder" className="fontSize"></p>
              <p>Hours</p>
            </div>
            <div id="mins" className="Mins margin">
              <p id="mins_holder" className="fontSize"></p>
              <p>Minutes</p>
            </div>
            <div id="sec" className="Sec margin">
              <p id="sec_holder" className="fontSize"></p>
              <p>Seconds</p>
            </div>
          </div>
          <div className="button">
            <a href="https://forms.gle/52CaeqZHYRMbqhcLA" target="_blank">
              While you're here, make your voice heard through this survey.
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
