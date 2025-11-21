let toDo = ["Play with dog", " 25 Push-ups", " 25 Sit-ups", " 25 Squats", " Play with cats"];
let list = document.getElementById("list");
let input = document.getElementById("inputText");
let remove = document.getElementById("button");
list.innerHTML = toDo;

input.addEventListener("change", function(){
  console.log("1")
  if (input.value === ""){
      console.log("2")
  } else {
  toDo.push(" " + input.value)
  list.innerHTML = toDo;
    console.log("3")
  }
})

remove.addEventListener("click", function(){
  toDo.pop();
  list.innerHTML = toDo;
  console.log("4");
})