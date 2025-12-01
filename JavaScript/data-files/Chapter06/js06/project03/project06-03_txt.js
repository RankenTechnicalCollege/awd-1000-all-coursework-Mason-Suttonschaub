"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Mason_Sutton-Schaub
      Date:  12/1/2025 

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling(){
      if (useShip.checked){
           document.getElementById("firstnameBill") = document.getElementById("firstnameShip");
           document.getElementById("lastnameBill") = document.getElementById("lastnameShip");
           document.getElementById("address1Bill") = document.getElementById("address1Ship");
           document.getElementById("address2Bill") = document.getElementById("address2Ship");
           document.getElementById("cityBill") = document.getElementById("cityShip");
           document.getElementById("countryBill") = document.getElementById("countryShip");
           document.getElementById("codeBill") = document.getElementById("codeShip");

           document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
           
      }
}