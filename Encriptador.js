const encriptado = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}
// console.log(Object.keys(encriptado));
// console.log(Object.values(encriptado));
// ['u','n',' ','s','t','r','i','n','g']
// ['ufat','n',' ','s','t','r','imes','n','g']

let boton1 = document.querySelector("#btn1")
let boton2 = document.querySelector("#btn2")
const formulario = document.querySelector("#formulario")
// let textArea = document.querySelector('#textArea')
let texto = ""

function rescatar() {
   texto = document.querySelector('#textArea').value
   console.log(texto)
    if(texto === ''){
        mostrarAlerta('Oops! Creo que el campo esta vacio!!');
    }
}

function textoEncriptado() {
    rescatar();
    texto = cleanStrings(texto)
    let subtexto = texto.split('');
    console.log(subtexto)
    for(i = 0; i < subtexto.length; i++){
        for(x = 0; x < Object.keys(encriptado).length; x++ ){
            if(subtexto[i] === Object.keys(encriptado)[x]){
               subtexto[i] = Object.values(encriptado)[x]
            }
        }
   }
   subtexto.join('');
   console.log(subtexto.join(''))
   
};

function desencript(){
    rescatar();
    texto = cleanStrings(texto)
    texto = texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    console.log(texto)
}

function cleanStrings (str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
}

function mostrarAlerta(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

     //? desaparezca despues de 1 segundo
    setTimeout(() => {
        alerta.remove()
        }, 1600);

}


boton2.onclick = desencript;
boton1.onclick = textoEncriptado;

// textoEncriptado();


// console.log(texto);
// console.log(subtexto);









