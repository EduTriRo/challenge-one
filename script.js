const contenido__input = document.querySelector(".contenido__input");
const contenido__derecha__textarea = document.querySelector(".contenido__derecha__textarea");

console.table(matrizCodigo)

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(contenido__input.value);
    contenido__derecha__textarea.value = textoEncriptado;
    contenido__derecha__textarea.style.backgroundImage = "none";
}
function encriptar(stringEncriptado){
    //let matrizCodigo = [["e", "9ntr"], ["i", "8ms"], ["a", "3c1"], ["o", "0b2r"], ["u", "7f4t"]];
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(contenido__input.value)
    contenido__derecha__textarea.value = textoEncriptado
    contenido__derecha__textarea.style.backgroundImage = "none";
}
function desencriptar(stringDesencriptado){
    //let matrizCodigo = [["e", "9ntr"], ["i", "8ms"], ["a", "3c1"], ["o", "0b2r"], ["u", "7f4t"]];
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
}

function btnPegar(){
    let textopegar = document.getElementById("textopegar");
    textopegar.select();
    contenido__input.value = contenido__derecha__textarea.value;
    contenido__derecha__textarea.value = "";
    contenido__derecha__textarea.style.backgroundImage = "";
    //se intenta en proximo patch poder hacer el boton de pegar real, 
    //que pegue del clipboard y no los valores directos desde la caja del resultado 
    //(contenido__derecha__textarea) a la caja de entrada (contenido__input)
}
