"use strict";

var front = document.getElementById("frnt");
var back = document.getElementById("bck");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
function getExercise(hieroglyphs){
    let entry = hieroglyphs[getRandomInt(0, hieroglyphs.length)];
    return entry;
}


function change(){   
    let entry = getExercise(heiroglyphs);
    front.textContent = entry.translation;
    back.textContent = entry.hieroglyph + ' ' + entry.pinyin;
}
document.getElementById("flipper").onclick = function() {
    document.getElementById("flipper").classList.toggle("flip")
}
change()