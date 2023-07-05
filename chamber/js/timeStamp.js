// Stamp the date and time on the join form
document.addEventListener("DOMContentLoaded", function() {
    const timeStamp = document.getElementById("timeStamp");
    const formattedTimeStamp = new Date().toLocaleString();
    timeStamp.innerHTML = '<input type="hidden" name="timeStamp" value="' + formattedTimeStamp + '"></input>';
  });