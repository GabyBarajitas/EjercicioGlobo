//src='https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif';
var contador = 0;

function sumarVeces(){
    contador = contador + 1;
    let mensaje = "";

    if (contador == 1){
        mensaje = "Haz hecho click 1 vez "
    } else {
        mensaje = "Has  hecho click " + contador + " veces";
    }
    document.getElementById("counter").innerHTML = mensaje;
}

function increaseSize(){
    
    switch (contador){
        case 1:
            document.getElementById("balloon").style.width = "230px";
            document.getElementById("balloon").style.height = "207px";
            break;
        case 2:
            document.getElementById("balloon").style.width = "265px";
            document.getElementById("balloon").style.height = "240px";
            break;
        case 3:
            document.getElementById("balloon").style.width = "305px";
            document.getElementById("balloon").style.height = "275px";
            break;
        case 4:
            document.getElementById("balloon").style.width = "350px";
            document.getElementById("balloon").style.height = "315px";
            break;
        case 5:
            document.getElementById("balloon").style.display = "none";
            document.getElementById("buttCount").style.display = "none";
            document.getElementById("globosFelicita").style.width = "360px";
            document.getElementById("globosFelicita").style.height = "325px";
            document.getElementById("globosFelicita").style.display = "block";
    }
}

function addCounter(){
    sumarVeces();
    increaseSize();
}
