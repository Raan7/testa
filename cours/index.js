//document.querySelector('h4').style.background ="red"

//const balise = document.querySelector("h4");
//console.log(balise)

//-------click event------------------
 

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const responce = document.querySelector('p');



questionContainer.addEventListener('click', ()=>{
    questionContainer.classList.toggle  ("question-click")
});

btn1.addEventListener("click", ()=>{
    responce.classList.add("show-responce")
    responce.style.background = "red"
});
btn2.addEventListener("click", ()=>{
    responce.classList.add("show-responce")
    responce.style.background = "red"
});
btn3.addEventListener("click", ()=>{
    responce.classList.add("show-responce")
    responce.style.background = "green"      
});


// Prioriter en CSS <div> > #id > .class > baliseHTML
//------------------------------------------------------
//----------Mouse Evente--------------------------------
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove",/*pour recupere les données ajouer e dans la parentaise*/(e)=>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", ()=>{
    mousemove.style.transform ="scale(2) translate(-25%, -25%)";
    mousemove.style.border = "2px solid pink"
});
window.addEventListener("mouseup", ()=>{
    mousemove.style.transform ="scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid blue"
});

questionContainer.addEventListener("mouseenter",()=>{
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout",()=>{
   questionContainer.style.background = "pink";
});

responce.addEventListener("mouseover",()=>{
    responce.style.transform = "rotate(2deg)";
});
//----------------------------------------------------------------------
//------------keypress event-------------------------------------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key)=>{
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
}

document.addEventListener("keypress",(e)=>{
    key.textContent = e.key;

    if (e.key ==="j") {
        keypressContainer.style.background = "pink";
    } else if(e.key ==="h"){
        keypressContainer.style.background = "blue"
    }else{
        keypressContainer.style.background = "red"
    }

    if(e.key === "z") ring(e.key);
    
});
//--------------------------------------------------------------------------
// ---------------Scroll Event----------------------------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{   
    
    if(window.scrollY > 120){
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px"
    }
});
//------------------------------------------------------------------------------
//--------2h04-----------------Form Event------------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language ="";

inputName.addEventListener('input',(e)=>{
    pseudo = e.target.value;    
})

select.addEventListener("input", (e)=>{
    language = e.target.value;    
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if(cgv.checked){
        document.querySelector('form > div').innerHTML = `
        <h3> Pseudo : ${pseudo}</h3>
        <h4>Langage préféré: ${language} </h4>
        
        `;
    }else{
        alert("veuillez accepter les CGV")
    }
})
//----------------------------------------------------------------------
//-------------2h28------------------Load event-------------------------
window.addEventListener("load",()=>{
    console.log("Document Chargé");    
})
//------------------------------------------------------------------------
//---------------2h32----------------ForEach-----------------------------
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box)=>{
    box.addEventListener("click", (e)=>{
      e.target.style.transform = "scale(0.7)";
    })
})
