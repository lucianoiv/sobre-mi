document.querySelector('#lizard').disabled = true;
document.querySelector('#spock').disabled = true;
const rock = "img/rock.png";
const paper = "img/paper.png";
const scissors = "img/scissor.png";
const lizard = "img/lizard.png";
const spock = "img/spock.png";
let tipo = 3;
let buttons = document.querySelectorAll('button');

function writeName(valor){
    document.getElementById('player1').innerHTML = valor;
    document.getElementById('player2').innerHTML = valor;
}

function tipoDeJuego(valor){
    let gameImg = document.getElementById('gameOn');
    gameImg.src = "img/go.png"
    if (btn_rpsls.checked){
        document.getElementById('lizard__btn').src = lizard;
        document.getElementById('spock__btn').src = spock;
        document.querySelector('#lizard').disabled = false;
        document.querySelector('#spock').disabled = false;
    } else if (valor == 3){
        document.getElementById('lizard__btn').src = "img/locked.png";
        document.getElementById('spock__btn').src = "img/locked.png";
        document.querySelector('#lizard').disabled = true;
        document.querySelector('#spock').disabled = true;

    }
    return tipo = valor;    
}

function obtenerJugadaComputadora(valor){    
    x = Math.floor(Math.random()*valor);    
    switch(x){                          
        case 0:                        
            x = rock;              
            break;                      
        case 1:                         
            x = paper;                
            break;                      
        case 2:                         
            x = scissors;
            break;
        case 3:                         
            x = lizard;
            break;
        case 4:
            x = spock;
            break;
    }
    document.getElementById('resultado2').src = x;
    return x;
}

function obtenerJugadaUsuario(jugada){
    let input = document.getElementById('nombre'); 
    if (input.value.length == 0){
        alert("Enter your Name");
        return;
    }else{
        let computer = obtenerJugadaComputadora(tipo);
        document.getElementById('resultado1').src = jugada;
        determinarGanador(jugada,computer);
    }
}

function reset(){
    document.getElementById('computer_score').innerHTML = "0";
    document.getElementById('player_score').innerHTML = "0";
}

function determinarGanador(jugador,computadora){
    document.getElementById('gameOn').src = "img/go.png"
    if ((jugador == rock || jugador == spock) && computadora == paper){                      
        let z = document.getElementById('computer_score').innerHTML;                                         
        let y = parseInt(z) + 1;
        document.getElementById('computer_score').innerHTML = y;

            }else if (jugador == rock && (computadora == scissors || computadora == lizard)){
                let z = document.getElementById('player_score').innerHTML;                                         
                let y = parseInt(z) + 1;
                document.getElementById('player_score').innerHTML = y;

                    }else if (jugador == paper && (computadora == rock || computadora == spock)){
                        let z = document.getElementById('player_score').innerHTML;                                         
                        let y = parseInt(z) + 1;
                        document.getElementById('player_score').innerHTML = y;

                            }else if ((jugador == paper || jugador == lizard) && computadora == scissors){
                                let z = document.getElementById('computer_score').innerHTML;                                         
                                let y = parseInt(z) + 1;
                                document.getElementById('computer_score').innerHTML = y;

                                    } else if ((jugador == scissors || jugador == lizard) && computadora == rock){
                                        let z = document.getElementById('computer_score').innerHTML;                                         
                                        let y = parseInt(z) + 1;
                                        document.getElementById('computer_score').innerHTML = y;
                                        
                                            }else if (jugador == scissors && (computadora == paper || computadora == lizard)){
                                                let z = document.getElementById('player_score').innerHTML;                                         
                                                let y = parseInt(z) + 1;
                                                document.getElementById('player_score').innerHTML = y;
                                                    }else if (jugador == lizard && (computadora == paper || computadora == spock)){
                                                        let z = document.getElementById('player_score').innerHTML;                                         
                                                        let y = parseInt(z) + 1;
                                                        document.getElementById('player_score').innerHTML = y;
                                                            }else if (jugador == spock && (computadora == scissors || computadora == rock)){
                                                                let z = document.getElementById('player_score').innerHTML;                                         
                                                                let y = parseInt(z) + 1;
                                                                document.getElementById('player_score').innerHTML = y;
                                                                    }else if (computadora == spock && (jugador == scissors || jugador == rock)){
                                                                        let z = document.getElementById('computer_score').innerHTML;                                         
                                                                        let y = parseInt(z) + 1;
                                                                        document.getElementById('computer_score').innerHTML = y;
                                                                            }

                                                                            if (document.getElementById('player_score').innerHTML == 5){
                                                                                let gameImg = document.getElementById('gameOn');
                                                                                gameImg.src = "img/youwin.png";
                                                                                alert("YOU WIN");
                                                                                setTimeout(reset,2000);
                                                                            }else if(document.getElementById('computer_score').innerHTML == 5){
                                                                                let gameImg = document.getElementById('gameOn');
                                                                                gameImg.src = "img/youlose.png";
                                                                                alert("YOU LOSE");
                                                                                setTimeout(reset,2000);                                                                              
                                                                            }
}

