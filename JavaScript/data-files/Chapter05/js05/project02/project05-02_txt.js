"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Mason_Sutton-Schaub
      Date:   11/17/2025

      Filename: project05-02.js
*/

let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");
console.log("1");
for (let i = 0; i < images.length; i++){
      images[i].addEventListener("click", function() {
            if(this.parentNode.id === "photo_bucket"){
                  let newItem = document.createElement("li");
                  photoList.appendChild(newItem);
                  newItem.appendChild(this);
                  console.log("2");

            } else {
                  let oldItem = this.parentNode;
                  photoBucket.appendChild(this);
                  oldItem.remove();
                  console.log("3");

            }
      })
}
