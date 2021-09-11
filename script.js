"use strict";
var cardColors = ['rgb(255, 255, 255)', 'rgb(231, 119, 119)',
                'rgb(245, 223, 113)','rgb(212, 240, 148)',
                'rgb(250, 152, 164)', 'rgb(235, 241, 242)'];

var rotated = false;
var front = document.getElementById("front");
var back = document.getElementById("back");
var change = null;
var fromm = 1
var too = 4




function fromFunction(i){
    fromm = i;
    let f = document.getElementById("lessonStartDropdown");
    f.innerText = i;
    console.log('1');
}

function toFunction(i){
    too = i;
    let f = document.getElementById("lessonFinishDropdown");
    f.innerText = i;
    console.log('2');
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

    
function getRandomColor(){
    let c = getRandomInt(0, 6);
    return c;
} 
  
function getExerciseH(){
    let entry = heiroglyphs[getRandomInt(0, heiroglyphs.length)];
    if(entry.lesson >= fromm && entry.lesson<=too){
        return entry;
    } 
    else{
        return getExerciseH();
    }
}

function getExerciseK(){
    let entry = keys[getRandomInt(0, keys.length)];
    if(entry.lesson >= fromm && entry.lesson<=too){
        return entry;
    } 
    else{
        return getExerciseK();
    }
}
function getExerciseA(){
    let c = [heiroglyphs, keys][getRandomInt(0, 2)];
    let entry = c[getRandomInt(0, c.length)];
    if(entry.lesson >= fromm && entry.lesson<=too){
        return entry;
    } 
    else{
        return getExerciseA();
    }
}


function rotate(){
    document.getElementById("flipper").classList.toggle("flip");
    if(rotated){
        rotated = false;
    }else{
        rotated = true;
    }
}




function setChoice0(){

    function changeFunc(){
        let entry = getExerciseA();
        front.textContent = entry.translation;
        back.textContent = entry.hieroglyph + ' ' + entry.pinyin;
        
        
        let f = document.getElementById('f');
        let b = document.getElementById('b');
        var color = cardColors[getRandomInt(0, 7)];
        f.style.backgroundColor = color;
        b.style.backgroundColor = color;
    }
    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "all hieroglyphs";
    change = changeFunc;
}

function setChoice1(){
    function changeFunc(){
        let entry = getExerciseK();
        front.textContent = entry.translation;
        back.textContent = entry.hieroglyph + ' ' + entry.pinyin;
        
        
        let f = document.getElementById('f');
        let b = document.getElementById('b');
        var color = cardColors[getRandomInt(0, 7)];
        f.style.backgroundColor = color;
        b.style.backgroundColor = color;
    }
    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "keys only";
    change = changeFunc;
}


function setChoice2(){
    function changeFunc(){
        let entry = getExerciseH();
        front.textContent = entry.translation;
        back.textContent = entry.hieroglyph + ' ' + entry.pinyin;
        
        
        let f = document.getElementById('f');
        let b = document.getElementById('b');
        var color = cardColors[getRandomInt(0, 7)];
        f.style.backgroundColor = color;
        b.style.backgroundColor = color;
    }
    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "compounds only";
    change = changeFunc;
}

setChoice0();

function changeAction(){
    if(rotated){
        rotate();
        rotated = false;
        setTimeout("change()", 150)  ;
    }else{
        change();
    }
    
    
}

function fillLessonDropdowns(n){
    let st = document.getElementById("lessonStart");
    let fn = document.getElementById("lessonFinish");
    for (let i = 1; i < n; i++) {

        let link1 = document.createElement('a');
        let link2 = document.createElement('a');
        link1.text = i;
        link1.href = "#";
        link2.text = i;
        link2.href = "#";
        link1.className = "dropdown-item";
        link2.className = "dropdown-item";
        link1.onclick = function(){fromFunction(i)};
        link2.onclick = function(){toFunction(i)};
        st.appendChild(link1);
        fn.appendChild(link2);
        
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
fillLessonDropdowns(4);
fromFunction(1);
