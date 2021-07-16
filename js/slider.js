const next = document.getElementById('btn-rigth');
const previous = document.getElementById('btn-left');
let $sliders = document.querySelectorAll('.slider'); 




//console.log($sliders)


function moveSlide(children,index){
    
    for (let i in children) {
        const  li = children[i];//.style.transform = "translateX(-" + cont + "00%)";   
        li.style.transform = "translateX(-" + index + "00%)";
    }
}

$sliders.forEach(function(slider){
    let cont = 0;
    const previous = slider.previousElementSibling;
    const next = slider.nextElementSibling;

    console.log("Next", next);
    console.log("After", previous);
    console.log(slider.children.length)


    previous.onclick = function(){
        cont --;
        if(cont === -1) 
            cont = slider.children.length -1;
        moveSlide(slider.children, cont);
    }

    next.onclick = function(){
        cont ++;
        
        if(cont === slider.children.length) 
            cont = 0;

            moveSlide(slider.children, cont);
    }
})

