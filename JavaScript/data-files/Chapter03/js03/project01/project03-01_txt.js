/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Mason_Sutton-Schaub
      Date:   11/4/2025

      Filename: project03-01.js
*/
let menuItems = [document.getElementsByClassName("menuItem")];

for (i = 0; i < menuItems.length; i++) {
      menuItems[i].addeventlistener("click", calcTotal)
}

function calcTotal(){
      let orderTotal = 0;
      for (i = 0; i < menuItems.length; i++){
            if (i.checked()) {
                  orderTotal += number(menuItems[i])
            }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }