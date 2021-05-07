/**
 * RETO ÁNSALO
 * Letras ____ ABCDEFGHIJ
 * Números ___ 1234567890
 * Botones A/1 B/2 C/3
 *         D/4 E/5 F/6
 *         G/7 H/8 I/9
 *             J/0
 * 1. Llenar casilla letras en orden ABCDEFGHIJ
 * 2. Alert que diga que faltan letras si no se llena en orden
 * Cuando las letras estén completas:
 * 3. Llenar números en orden 1234567890
 * 4. Alert que diga que faltan números si no se llena en orden
 * Que no sean dos funciones por botón
 */
// Variables h3
let letras = document.getElementById("letrasText");
let numeros = document.getElementById("numerosText");
// Variables botones
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

function addText(num, prevNum, letra, prevLetra) {
    if(letras.innerHTML == "ABCDEFGHIJ") {
        if (numeros.innerHTML == "1234567890") {
            alert("Ya completaste todo");
        }
        else {
            if(numeros.innerHTML == prevNum) {
                numeros.innerHTML += num;
            }
            else {
                numeros.innerHTML.length >= prevNum.length+1 ? alert("Ya oprimiste esta tecla") : alert("Te falta un número");
            }
        } 
    } 
    else {
        if(letras.innerHTML == prevLetra) {
            letras.innerHTML += letra;
        }
        else {
            letras.innerHTML.length >= prevLetra.length+1 ? alert("Ya oprimiste esta tecla") : alert("Te falta una letra");
        }
    }
}

btn1.onclick = () => {
    let num = "1";
    let prevNum = ""; 
    let letra = "A";
    let prevLetra = "";

    addText(num, prevNum, letra, prevLetra);
}
btn2.onclick = () => {
    let num = "2";
    let prevNum = "1"; 
    let letra = "B";
    let prevLetra = "A";

    addText(num, prevNum, letra, prevLetra);
}
btn3.onclick = () => {
    let num = "3";
    let prevNum = "12"; 
    let letra = "C";
    let prevLetra = "AB";

    addText(num, prevNum, letra, prevLetra);
}
btn4.onclick = () => {
    let num = "4";
    let prevNum = "123"; 
    let letra = "D";
    let prevLetra = "ABC";

    addText(num, prevNum, letra, prevLetra);
}
btn5.onclick = () => {
    let num = "5";
    let prevNum = "1234"; 
    let letra = "E";
    let prevLetra = "ABCD";

    addText(num, prevNum, letra, prevLetra);
}
btn6.onclick = () => {
    let num = "6";
    let prevNum = "12345"; 
    let letra = "F";
    let prevLetra = "ABCDE";

    addText(num, prevNum, letra, prevLetra);
}
btn7.onclick = () => {
    let num = "7";
    let prevNum = "123456"; 
    let letra = "G";
    let prevLetra = "ABCDEF";

    addText(num, prevNum, letra, prevLetra);
}
btn8.onclick = () => {
    let num = "8";
    let prevNum = "1234567"; 
    let letra = "H";
    let prevLetra = "ABCDEFG";

    addText(num, prevNum, letra, prevLetra);
}
btn9.onclick = () => {
    let num = "9";
    let prevNum = "12345678"; 
    let letra = "I";
    let prevLetra = "ABCDEFGH";

    addText(num, prevNum, letra, prevLetra);
}
btn0.onclick = () => {
    let num = "0";
    let prevNum = "123456789"; 
    let letra = "J";
    let prevLetra = "ABCDEFGHI";

    addText(num, prevNum, letra, prevLetra);
}