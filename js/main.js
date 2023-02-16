
var count = 0;
//Função para tocar o som e pausar o som 
function tocaSom (idElementoAudio){
    const audio = document.querySelector(idElementoAudio);

    if(count == 0){
        count = 1;
        audio.play();
        audio.currentTime = 0;
    }else{
        count = 0;
        audio.pause();
        audio.currentTime = 0;
    }
 
}



const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const musicaAnterior = tecla.classList[1] - 1; 

    console.log(instrumento);

    //Template String
    const idAudio = `#som_${instrumento}`;// musica atual
   

    console.log(idAudio)
    tecla.onclick = function (){
       tocaSom(idAudio);
    }    
        
    contador = contador +1;

    console.log(contador);
}