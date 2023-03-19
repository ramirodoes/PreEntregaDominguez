let continuar;
do {
    let peso = prompt("Ingresa tu peso en kg");
    while (isNaN(peso) || peso <= 0) {
      peso = prompt("El dato es incorrecto. Vuelva a ingresar su peso en KILOGRAMOS.");
    }

    let altura = prompt("Ingresa tu altura en cm");
    while (isNaN(altura) || altura <= 0) {
      altura = prompt("El dato es incorrecto. Vuelva a ingresar su altura en CENTÍMETROS.");
    }

function calcularIMC(peso, altura) {
    altura = altura / 100;
    const imc = peso / (altura * altura);
    return imc;
  }

const imc = calcularIMC(peso, altura);  

if (imc < 18.5) {
    alert("Tu IMC es " + imc + " y tienes bajo peso");
  } else if (imc >= 18.5 && imc < 25) {
    alert("Tu IMC es " + imc + " y tienes un peso normal");
  } else if (imc >= 25 && imc < 30) {
    alert("Tu IMC es " + imc + " y tienes sobrepeso");
  } else {
    alert("Tu IMC es " + imc + " y tienes obesidad");
  }

continuar = confirm ("¿Quiéres calcular un nuevo IMC?");

} while (continuar);