"use strict";
var cardColors = ['rgb(255, 255, 255)', 'rgb(231, 119, 119)',
                'rgb(245, 223, 113)','rgb(212, 240, 148)',
                'rgb(250, 152, 164)', 'rgb(235, 241, 242)'];

var rotated = false;
var front = document.getElementById("front");
var back = document.getElementById("back");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

    
function getRandomColor(){
    let c = getRandomInt(0, 5);
    return c;
} 
  
function getExerciseH(){
    let entry = heiroglyphs[getRandomInt(0, heiroglyphs.length)];
    return entry;
}

function getExerciseK(){
    let entry = keys[getRandomInt(0, keys.length)];
    return entry;
}



function rotate(){
    document.getElementById("flipper").classList.toggle("flip");
    if(rotated){
        rotated = false;
    }else{
        rotated = true;
    }
}


function change(){
    let entry = [getExerciseH(keys), getExerciseK(heiroglyphs)][getRandomInt(0, 1)];
    front.textContent = entry.translation;
    back.textContent = entry.hieroglyph + ' ' + entry.pinyin;
    
    
    let f = document.getElementById('f');
    let b = document.getElementById('b');
    var color = cardColors[getRandomInt(0, 7)];
    f.style.backgroundColor = color;
    b.style.backgroundColor = color;
}

function changeAction(){
    if(rotated){
        rotate();
        rotated = false;
        setTimeout("change()", 150)  ;
    }else{
        change();
    }
    
    
}




document.getElementById("flipper").onclick = rotate;

document.addEventListener( 'keyup', event => {  
        if( event.code === 'Enter' ){
            rotate();
        };
      });
document.addEventListener( 'keyup', event => {  
        if( event.code === 'Space' ){
            changeAction();
        };
      });

change();
