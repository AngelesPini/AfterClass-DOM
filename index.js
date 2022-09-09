// // lista


// let total = 0;





// // parametros

// class articulos {
//     constructor(id , articulo , cantidad , precio){
//     this.id = id;
//     this.articulo = articulo;
//     this.cantidad = cantidad;
//     this.precio = precio;
// }
// }






// // articulos

// const elegido = []; 

// elegido.push(new articulos (001 , "REMERA" , 1 , 1000))
// elegido.push(new articulos (002 , "PANTALON" , 1 , 1800))
// elegido.push(new articulos (003 , "SHORTS" , 1 , 2500))








// let factura = document.createElement("p");
// factura.innerHTML = "<h3> Gracias por elegirnos </h3> <br> <h3> Elementos seleccionados: </h3>"
// document.body.appendChild(factura);




// let ropa = parseInt(prompt("Seleccione los productos a comprar('1', '2', '3'): \n1-remera \n2-pantalon \n3-shorts \nPara finalizar, presione 0"));
// while(ropa != "0"){
//     switch (ropa){
//         case 1: total = total + elegido[0].precio
//         alert("Añadiste a tu carrito " + elegido[0].articulo + " " + elegido[0].cantidad + " $" + elegido[0].precio)

//         let prime = document.createElement("p");
//         prime.innerHTML = elegido[0].articulo + " " + elegido [0].cantidad;
//         document.body.appendChild(prime);
//         break;

//         case 2: total = total + elegido[1].precio
//         alert("Añadiste a tu carrito " + elegido[1].articulo + " " + elegido[1].cantidad + " $" + elegido[1].precio);

//         let sec = document.createElement("p");
//         sec.innerHTML = elegido[1].articulo + " " + elegido [1].cantidad;
//         document.body.appendChild(sec);
//         break;

//         case 3: total = total + elegido[2].precio
//         alert("Añadiste a tu carrito " + elegido[2].articulo + " " + elegido[2].cantidad + " $" + elegido[2].precio);

//         let third = document.createElement("p");
//         third.innerHTML = elegido[2].articulo + " " + elegido [2].cantidad;
//         document.body.appendChild(third);
//         break;
//         default: alert("No ingresaste un producto válido");
//     }
//     ropa = parseInt(prompt("Seleccione los productos a comprar('1', '2', '3'): \n1-remera \n2-pantalon \n3-shorts \nPara finalizar, presione 0"));
// }





// let factura1 = document.getElementById('total');
// factura1.innerHTML = "<h2> El total de su compra es: </h2>" + "$" + total;
// document.body.appendChild(factura1);










// carrusel


let textoShow = document.querySelector("#textoShow");

function gliderMobileFunction (div, description) {
    switch (div){
        case 1:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#F6007C';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 2:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#F6007C';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 3:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#F6007C';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 4:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#F6007C';
            break;
        default:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#F6007C';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;

    }

}






// formulario

function recogeDatos (evento) {
    evento.preventDefault ();

    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    let anos = 2022 - edad;
    let bienvenida = document.querySelector("#bienvenida");
    let mensajeEdad;
    let mensaje;

    if (edad > 40) {
        mensajeEdad = "Abuelito/a!";
    } else if (edad < 40) {
        mensajeEdad = "Jovencito/a";
    }

    mensaje = "Hola " + nombre + " tenés " + anos + " años. " + mensajeEdad;
    
    bienvenida.textContent = mensaje;

}



let miForm = document.querySelector("#formulario");
miForm.addEventListener("submit", recogeDatos);






// formulario que arroja valores en el dom

function FormularioLleno(){
    let resultado = document.querySelector('#resultado');
    let valorCompletado = document.getElementsByClassName('numero'),
     almacenamiento =[];
     for (let i = 0; i< valorCompletado.length; i++){
        almacenamiento[i] = valorCompletado[i].value;
        resultado.innerHTML = `<p>${almacenamiento}</p>`
     }
}