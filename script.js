"use strict";
var cardColors = ['rgb(255, 255, 255)', 'rgb(231, 119, 119)',
                'rgb(245, 223, 113)','rgb(212, 240, 148)',
                'rgb(250, 152, 164)', 'rgb(235, 241, 242)'];

var rotated = false;
var front = document.getElementById("front");
var back = document.getElementById("back");

var fromm = 1;
var too = 18; // увеличивать на 1 после каждого урока


var getVarFunc = null;
var variants = [];

var curTrans = null;
var curH = null;




function fromFunction(i){
    fromm = i;
    let f = document.getElementById("lessonStartDropdown");
    f.innerText = i;
    getVarFunc();
}

function toFunction(i){
    too = i;
    let f = document.getElementById("lessonFinishDropdown");
    f.innerText = i;
    getVarFunc();
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function getRandomColor(){
    let c = getRandomInt(0, 6);
    return c;
}

function getExercise(){
    let entry = variants[getRandomInt(0, variants.length)];
   return entry;
}

function rotateAction(card, text){
    card.innerText = text;
}


function changeFont(cont, n){
    cont.style.fontSize = n;

}



function rotate(){
    document.getElementById("flipper").classList.toggle("flip");
    if(rotated){
        rotated = false;

        setTimeout("rotateAction(document.getElementById('myCardContent') , curTrans)", 250)  ;
        if(curTrans.length > 30){
            setTimeout("changeFont(document.getElementById('myCardContent'), '190%')", 250);
         }

    }else{
        rotated = true;

        setTimeout("rotateAction(document.getElementById('myCardContent') , curH)", 250)  ;
        setTimeout("changeFont(document.getElementById('myCardContent'), '250%')", 250);
    }
}

function change(){

    let entry = getExercise();
    try {
        curTrans = entry.translation;
        curH = entry.hieroglyph + ' ' + entry.pinyin;

    } catch (error) {
        if (error instanceof TypeError) {
            alert('Невозможно найти словарную статью,\nудовлетворяющую требованиям.\nИзмените требования.')
          }
    }


    // var color = cardColors[getRandomInt(0, 7)];
    // card.style.backgroundColor = color;

}

function setChoice0(){
    function getVariants(){
        variants = []
        for (let i = 0; i < heiroglyphs.length; i++) {
            if(heiroglyphs[i].lesson  >= fromm && heiroglyphs[i].lesson <= too){
                variants = variants.concat(heiroglyphs[i])
            }
        }

        for (let i = 0; i < keys.length; i++) {
            if(keys[i].lesson  >= fromm && keys[i].lesson <= too){
                variants = variants.concat(keys[i])
            }
        }

        for (let i = 0; i < additionals.length; i++) {
            if(additionals[i].lesson  >= fromm && additionals[i].lesson <= too){
                variants = variants.concat(additionals[i])
            }
        }
    }


    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "all hieroglyphs";
    getVarFunc = getVariants;
    getVarFunc();
}

function setChoice1(){
    function getVariants(){
        variants = []
        for (let i = 0; i < keys.length; i++) {
            if(keys[i].lesson  >= fromm && keys[i].lesson <= too){
                variants = variants.concat(keys[i])
            }
        }
    }

    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "keys only";
    getVarFunc = getVariants;
    getVarFunc();
}


function setChoice2(){
    function getVariants(){
        variants = []
        for (let i = 0; i < heiroglyphs.length; i++) {
            if(heiroglyphs[i].lesson  >= fromm && heiroglyphs[i].lesson <= too){
                variants = variants.concat(heiroglyphs[i])
            }
        }
    }
    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "mains only";
    getVarFunc = getVariants;
    getVarFunc();
}

function setChoice3(){
    function getVariants(){
        variants = []
        for (let i = 0; i < additionals.length; i++) {
            if(additionals[i].lesson  >= fromm && additionals[i].lesson <= too){
                variants = variants.concat(additionals[i])
            }
        }
    }
    let changeDropdown = document.getElementById("dropdownMenuButton");
    changeDropdown.innerText = "additionals only";
    getVarFunc = getVariants;
    getVarFunc();
}

setChoice0();




function changeAction(){
    let cont = document.getElementById('myCardContent')
    let to = 0;
    if (rotated){
        to = 25;
    }
    if(rotated){
        rotate();
        change();
        // setTimeout("change()", 700);

        setTimeout("rotateAction(document.getElementById('myCardContent') , curTrans)", 250)  ;

    }else{
        // setTimeout("change()", 700)  ;
        change();
        cont.innerText = curTrans;
    }

    if(curTrans.length > 30){
        setTimeout("changeFont(document.getElementById('myCardContent'), '190%')", to);
    }else{
        setTimeout("changeFont(document.getElementById('myCardContent'), '250%')", to);
    }

    let color = cardColors[getRandomInt(0, 7)];
    let c = document.getElementById('myCard');
    c.style.backgroundColor = color;
}



















function fillLessonDropdowns(n){
    let st = document.getElementById("lessonStart");
    let fn = document.getElementById("lessonFinish");
    for (let i = 1; i <= n; i++) {

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
        if (event.code === 'Space' ) {
            changeAction();
        };
      });
// document.addEventListener( 'keyup', event => {
//         if( ){

//         };
//       });

changeAction();
fillLessonDropdowns(too);
fromFunction(fromm);
toFunction(too);
