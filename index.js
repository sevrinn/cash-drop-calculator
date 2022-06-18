const calculateBtn = document.querySelector("#calculate");
const location = document.querySelector("#bar-selector");
const startTime = document.querySelector("#start-time");
const endTime = document.querySelector("#end-time");
const result = document.querySelector("#result")

calculateBtn.addEventListener("click", event => {
  event.preventDefault();
  console.log("Location: ",location.value)
  console.log("Start time: ", startTime.value)
  console.log("End time: ", endTime.value)
  result.innerHTML = "<p>I'm a the reslut</p>";
})

