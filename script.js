let card = document.querySelector(".card");
let flip_inst = document.querySelector(".flip-inst");
let flip_inst2 = document.querySelector(".flip-inst2");
let flip_arrow = document.querySelector(".flip-arrow");
let theme_inst = document.querySelector(".theme-inst");
let theme_arrow = document.querySelector(".theme-arrow");
let clr_inst = document.querySelector(".clr-inst");
let clr_arrow = document.querySelector(".clr-arrow");
let front_reflect = document.querySelector(".front .reflect");
let back_reflect = document.querySelector(".back .reflect");
//counting how many times the card flips or clicked 
let flag=0;
//checking if The Card Not Flips 
let flip =true;
// Checking if the Reflection NOT happens 
let r = true;
card.addEventListener("click",function(){
    //=======FLIP PART=========
    if(flip){
        card.style.transform= 'rotateY(540deg)';
        flip_inst.style.transition = "all 1s ease 2s";
        flip_inst.style.display = "none";
        flip_inst2.style.visibility="visible";
        flip_inst2.style.transition = "all 0s ease-out 2s";
        flip_arrow.style.display = "none";
        flip=false;
        flag++;
    }
    else{
        card.style.transform= 'rotateY(0deg)';
        flip=true;
        flip_inst2.style.display = "none";
        flag++;
        //======= THEME INST =========
        if(flag===2 ){
            setTimeout(() => {
            theme_inst.style.visibility = "visible";
            theme_arrow.style.visibility = "visible";
            }, 3*1000);
        }
    }

    //=======REFLECT PART=========

    if(r){
        back_reflect.style.transform = "rotate(45deg) translate(-620%)";
        front_reflect.style.transform = "rotate(45deg) translate(-100%)";
        r = false;
    } 
    else {  
        front_reflect.style.transform = "rotate(45deg) translate(700%)";
        back_reflect.style.transform = "rotate(45deg) translate(620%)";
        r = true;
    }

});


let toogle = document.querySelector(".toogle");
let theme = document.querySelector(".theme");
let background = document.querySelector(".left-background");
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let backStrip = document.querySelector(".magnetic-strip");
let cvv = document.querySelector(".cvv");

// CHECKING IF THE DARK MODE IS ON 
let dark = false;

//================== TOOGLE =====================

toogle.addEventListener("click", function () {
    //======= LIGHT =========
    if(dark){
        theme.innerHTML="Light";
        theme.style.color="black";
        background.style.transition="all 2s ease";
        background.style.background="linear-gradient(to right,grey,white)";
        front.style.background="linear-gradient(to right,#9b9a9a,white)";
        front.style.color="#3a3a3a";
        back.style.background="linear-gradient(to right,#d8d7d7,#C6C8C6)";
        back.style.color="black";
        backStrip.style.backgroundColor = "#333333";
        cvv.style.backgroundColor = "#606470";
        dark= false;
        toogleClicked = true;
        
    }
    //======= DARK=========
    else{
        theme.innerHTML="Dark";
        theme.style.color="white";
        background.style.background="linear-gradient(to right,black,grey)";
        front.style.background="linear-gradient(to right,black,grey)";
        front.style.color="white";
        back.style.background="linear-gradient(to right,black,grey)";
        back.style.color="white";
        backStrip.style.backgroundColor = "white";
        cvv.style.backgroundColor = "#9e9e9e";
        dark= true;
        toogleClicked = true;
        // hiding inst 2
        theme_inst.style.visibility = "hidden";
        theme_arrow.style.visibility = "hidden";
        //=======CLR INST=========
        if(flag>1){
            setTimeout(() => {
                clr_inst.style.visibility = "visible";
                clr_arrow.style.visibility ="visible";
                change_logo.classList.add("rotate");
            }, 1*1000);
        }
    }   
});

let slider = document.querySelector(".slider");
let change_logo = document.querySelector(".change-logo");
let s = document.querySelector(".top-strip");
let s2 = document.querySelector(".bottom-strip");
let s3 = document.querySelector(".card-top-strip");
let s4 = document.querySelector(".card-bottom-strip");
let clr_btn = document.querySelector(".clr-btn");
let front_reflect2 = document.querySelector(".front .reflect2");
let back_reflect2 = document.querySelector(".back .reflect2");
// checking if the clr button clicked 
let cflag=false;
clr_btn.addEventListener("click", ()=>{
     // Generate a random number between 0 and 16777215
        let randomNum = Math.floor(Math.random() * 16777215);
    // Convert the number to a hex string
        let hexColor = randomNum.toString(16);
    // Ensure the string has 6 characters by padding with leading zeros if necessary
        hexColor = hexColor.padStart(6, '0');

        theme_arrow.style.fill = `#${hexColor}`;
        change_logo.style.fill = `#${hexColor}`;
        slider.style.backgroundColor = `#${hexColor}`;
        //=======CHANGING STRIP COLOUR=========
        s.style.background =`linear-gradient(to bottom, #${hexColor}, #${hexColor})`;
        s2.style.background =`linear-gradient(to bottom, #${hexColor}, #${hexColor})`;
        s3.style.background =`linear-gradient(to bottom, #${hexColor}, #${hexColor})`;
        s4.style.background =`linear-gradient(to bottom, #${hexColor}, #${hexColor})`;
        //=======REFLECT 2 =========
        if(cflag){
            front_reflect2.style.transform = "rotate(45deg) translate(-100%)";
            change_logo.style.transform = "rotate(360deg)";
            cflag= false;
        }
        else{
            front_reflect2.style.transform = "rotate(45deg) translate(700%)";
            change_logo.style.transform = "rotate(180deg)";
            cflag=true;
            clr_inst.innerHTML = "Change Again";
            //=======HIDING CLR CHANGE INST=========
            setTimeout(() => {
                clr_inst.style.visibility = "hidden";
                clr_arrow.style.visibility = "hidden";
            }, 3*1000);
        }
        
   });
