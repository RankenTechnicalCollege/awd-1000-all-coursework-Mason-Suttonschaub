/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Mason_Sutton-Schaub
      Date:   10/30/2025

      Filename: project02-03.js
 */

document.getElementById("square").addEventListener("onmouseover", function(){document.getElementById("feedback").innerHTML = "You're hovering over the square"});
document.getElementById("square").addEventListener("onmouseout", function(){document.getElementById("feedback").innerHTML = ""});

document.getElementById("triangle").addEventListener("onmouseover", function(){document.getElementById("feedback").innerHTML = "You're hovering over the triangle"});
document.getElementById("triangle").addEventListener("onmouseout", function(){document.getElementById("feedback").innerHTML = ""});

document.getElementById("circle").addEventListener("onmouseover", function(){document.getElementById("feedback").innerHTML = "You're hovering over the circle"});
document.getElementById("circle").addEventListener("onmouseout", function(){document.getElementById("feedback").innerHTML = ""});


