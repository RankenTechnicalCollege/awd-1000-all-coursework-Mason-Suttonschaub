//Challenge 1
let array1 = ["How To Train Your Dragon", "How To Train Your Dragon 2", "How To Train Your Dragon 3"]
function addMovieToArray(a) {
  array1.push(a);

  for (let i = 0; i <= array1.length - 1; i ++) {
  document.getElementById("movieList").innerHTML = array1 + ", ";
  }
}
//Challenge 2
function ageVerify(age){
  if (1 > age){
    window.alert("Age out of range!");
  } else if (200 < age){
    window.alert("Age out of range!");
  } else if (age >= 21){
    window.alert("Welcome to the venue!");
  } else if (age <= 21){
    window.alert("You're not old enough!");
  } else {
      window.alert("Please enter your age!");
  }
}
//Challenge 3
array3 = ["", "One is the loneliest number that you'll ever do.", "Two can be as bad as one. It's the loneliest number since the number one.", "There is no three."]
function musicPick(a){
window.alert(array3[a]);
}
//Challenge 4

let array4 = []
for (let i = 1; i <= 101; i += 2) {
  document.getElementById("odd").innerHTML = array4 + ", ";
  array4.push(i)
}
//Challenge 5
let array5 = []
for (let i = 15; i <= 105; i += 15) {
  document.getElementById("multOfX").innerHTML = array5 + ", ";
  array5.push(i)
}
