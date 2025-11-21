let upCount = document.getElementById("upCount");
let downCount = document.getElementById("downCount");
let down = document.getElementById("thumbsDown");
let up = document.getElementById("thumbsUp");
let total = document.getElementById("totalScore");
let upAmount = 0;
let downAmount = 0;
up.addEventListener("click", function(){
  upAmount++;
  upCount.innerHTML = upAmount;
  totalAmt();
  console.log("1");
})

down.addEventListener("click", function(){
  downAmount++;
  downCount.innerHTML = downAmount;
  totalAmt();
    console.log("2");
})

function totalAmt(){
  let totalScore = 0;
  totalScore = upAmount - downAmount;
  total.innerHTML = totalScore;
}