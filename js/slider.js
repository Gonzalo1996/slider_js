const $btnRigth = document.getElementById('btn-rigth');
const $btnLeft = document.getElementById('btn-left');
let $sliders = document.querySelectorAll('.container-slider'); 

let cont = 0;


console.log($sliders)

$sliders.forEach(function(slider){
 
    const previous = slider.previousElementSibling;
    const next = slider.nextElementSibling;
/*
    console.log("Next", next);
    console.log("After", previous);
    console.log(slider.children.length)
*/
    $btnLeft.onclick = function(){
        cont --;
        if(cont === -1) 
            cont = slider.children.length -1;
        console.log(cont)
        for (let i in slider.children) {
            const  l = slider.children[i].style.transform = "translateX(-" + cont + "00%)";   
            //li.style.transform = "translateX(-" + cont + "00%)";
        }
    }

    $btnRigth.onclick = function(){
        cont ++;
        
        if(cont === slider.children.length) 
            cont = 0;

        for (let i in slider.children) {
            const l = slider.children[i].style.transform = "translateX(-" + cont + "00%)";
            //li.style.transform = "translateX(-" + cont + "00%)";
        }
    }
})

setInterval(function(){
   
},1000)

