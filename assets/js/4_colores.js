
const d1 = document.getElementById("div1")
    d1.addEventListener("click", function(){
    d1.style.backgroundColor = 'black'
});

const d2 = document.getElementById("div2")
    d2.addEventListener("click", function(){
    d2.style.backgroundColor = 'black'
});

const d3 = document.getElementById("div3")
    d3.addEventListener("click", function(){
    d3.style.backgroundColor = 'black'
});

const d4 = document.getElementById("div4")
    d4.addEventListener("click", function(){
    d4.style.backgroundColor = 'black'
});


var colorDiv = '';
var colorDiv2 = '';

document.addEventListener('keydown', function(event){

    if (event.key === 'a' || event.key === 'A')
        colorDiv = 'pink'
        
    if (event.key === 's' || event.key === 'S')
        colorDiv = 'orange'

    if (event.key === 'd' || event.key === 'D')
        colorDiv = 'cyan'


    if (event.key === 'q' || event.key === 'Q')
        colorDiv2 = 'blueviolet'

    if (event.key === 'w' || event.key === 'W')
        colorDiv2 = 'darkgrey'

    if (event.key === 'e' || event.key === 'E')
        colorDiv2 = 'brown'


    key.style.backgroundColor = colorDiv
    key2.style.backgroundColor = colorDiv2

});


