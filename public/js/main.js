var socket = io();
$(document).ready(() => {
  //Set date and time
  setInterval(() => {
    var d = new Date();
    var rawDay = d.getDay();
    day = "";
    switch (rawDay) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var second = d.getSeconds();
    var now = day + ", " + date+"/"+month+"/"+year+ " " +hours+":"+minutes+":"+second;
    $(".date").text(now)
  }, 1000);
});
function submit() {
  socket.emit("submit", "hi");
}
socket.on("callback", (data) => {
  alert(data);
});