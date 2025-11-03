/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Mason_Sutton-Schaub
      Date:   11/3/2025

      Filename: project02-04.js
 */
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;
// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken");
   let buyHalibut = document.getElementById("halibut");
   let buyBurger = document.getElementById("burger");
   let buySalmon = document.getElementById("salmon");
   let buySalad = document.getElementById("salad");
 }