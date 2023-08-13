function borrar() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultados").innerHTML = "0"; //devuelve todos los valor a "" y resultado a 0
}

function mostrar_resultado() {
    if (suma.checked == true){                                  //si el id 'suma' esta seleccionado hace esto
    let x = +document.getElementById("valor1").value;           //obtiene valor de input1 e input2
    let y = +document.getElementById("valor2").value;           //el signo + convierte input en numero
    document.getElementById("resultados").innerHTML = x + y;    //y aqui edita el HTML con la operacion.
    }                                                           //Las demas funciones son iguales solo cambia 
    if (resta.checked == true){                                 //el la operacion final.
        let x = +document.getElementById("valor1").value;
        let y = +document.getElementById("valor2").value;
        document.getElementById("resultados").innerHTML = x - y;
        }
        if (multiplicacion.checked == true){
            let x = +document.getElementById("valor1").value;
            let y = +document.getElementById("valor2").value;
            document.getElementById("resultados").innerHTML = x * y;
            }
            if (division.checked == true){
                let x = +document.getElementById("valor1").value;
                let y = +document.getElementById("valor2").value;
                if(y == 0){
                    alert("No se puede dividir por cero");
                    return 0;  
                }
                document.getElementById("resultados").innerHTML = x / y;
                }
                if (porcentaje.checked == true){
                    let x = +document.getElementById("valor1").value;
                    let y = +document.getElementById("valor2").value;
                    y /= 100;
                    document.getElementById("resultados").innerHTML = x * y;
                    }
  }
  function modo(){
    const oscuro = document.getElementById("oscuro");           //primero se obtiene el id del body para agregar o eliminar la clase
    if (oscuro.classList.contains("oscuro")){                   //si esta activo lo desactiva y viceversa
            document.getElementById("modo").innerHTML = "🌞";   //aqui cambia el icono del boton
            oscuro.classList.remove('oscuro');                  //y elimina la clase oscuro
    } else{
        document.getElementById("modo").innerHTML = "🌜";       //cambia el icono del boton
        oscuro.classList.add('oscuro');                         //agrega la clase 'oscuro'que se va a editar con CSS
    }
  }