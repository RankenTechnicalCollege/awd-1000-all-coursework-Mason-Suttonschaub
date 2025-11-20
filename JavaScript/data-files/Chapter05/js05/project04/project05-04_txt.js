"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Mason_Sutton-Schaub
      Date:   11/20/2025

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++){
      phrases[i].addEventListener("onclick", function() {
            let phrase = document.createElement('h1');
            phrase.textContent = this.textContent;
            let footnote = document.createElement('p');
            footnote.textContent = footnotes[i];
            footnote.style = "font-style: italic; font-size: 1.2em;";
            let closeButton = document.createElement('input');
            
      })
}