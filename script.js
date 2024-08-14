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
    contenido__input.value = "";
    contenido__derecha__textarea.style.backgroundImage = "none";
}
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "3ntr"], ["i", "1ms"], ["a", "4c1"], ["o", "0b3r"], ["u", "7f4t"]];
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
    contenido__input.value = "";
}
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "3ntr"], ["i", "1ms"], ["a", "4c1"], ["o", "0b3r"], ["u", "7f4t"]];
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
    document.execCommand("copy")
}