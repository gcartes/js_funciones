
//codigo original
function pintar(){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);


// funcion anonima, punto 2.2
const btn = document.getElementById("ele2")    
btn.addEventListener("click",function(){
    btn.style.backgroundColor = 'yellow'
});


function pintarColor(color){
    cambiaColor.style.backgroundColor = color;
}

const cambiaColor = document.getElementById("cambiaColor")
cambiaColor.addEventListener("click", function(){
        pintarColor('yellow')
        }
)

pintarColor('green')
