const rock = "img/rock.png";
const paper = "img/paper.png";
const scissors = "img/scissor.png";
const lizard = "img/lizard.png";
const spock = "img/spock.png";
let tipo = null;

function tipoDeJuego(valor){
    console.log(valor);
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
    let computer = obtenerJugadaComputadora(tipo);
    document.getElementById('resultado1').src = jugada;
    determinarGanador(jugada,computer);
}

function determinarGanador(jugador,computadora){                                        
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
                                                                    }
}