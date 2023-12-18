document.addEventListener("DOMContentLoaded", () => {
  var userInput = document.getElementById("date");

  userInput.max = new Date().toISOString().split("T")[0];

  function calculateAge() {
    let inputDate = new Date(userInput.value);

    if (isNaN(inputDate)) {
      console.error("Invalid date");
      return;
    }

    let birthDate = inputDate;

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    document.querySelector(".years strong").style.fontSize = "1.5rem";
    document.querySelector(".months strong").style.fontSize = "1.5rem";
    document.querySelector(".days strong").style.fontSize = "1.5rem";

    document.querySelector(".years strong").textContent = y3;
    document.querySelector(".months strong").textContent = m3;
    document.querySelector(".days strong").textContent = d3;
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  document.getElementById("button").addEventListener("click", calculateAge);
});
