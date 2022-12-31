

function SoloNumLet(textInput){
    var corregido = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz1234567890 ';
	
    for (var i=0; i<textInput.length; i++)
       if (filtro.indexOf(textInput.charAt(i)) != -1) 
	     corregido += textInput.charAt(i);
    return corregido;
}

function darFormato(e){
    let textInput = SoloNumLet(e.value);
    let aMayus = textInput.replace(/[ÁÀÄÂ]/g,'A');
    let aMinus = aMayus.replace(/[áàäâ]/g,'a');
    let eMayus = aMinus.replace(/[ÉÈËÊ]/g,'E');
    let eMinus = eMayus.replace(/[éèëê]/g,'e');
    let iMayus = eMinus.replace(/[ÍÌÏÎ]/g,'I');
    let iMinus = iMayus.replace(/[íìïî]/g,'i');
    let oMayus = iMinus.replace(/[ÓÒÖÔ]/g,'O');
    let oMinus = oMayus.replace(/[óòöô]/g,'o');
    let uMayus = oMinus.replace(/[ÚÙÜÛ]/g,'U');
    let uMinus = uMayus.replace(/[úùüû]/g,'u');
    let enieMayus = uMinus.replace(/[Ñ]/g,'N');
    let enieMinus = enieMayus.replace(/[ñ]/g,'n');
    let resultado = enieMinus.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');
    let txtCifrado = resultado.replace(/e/igm,"enter");
        txtCifrado = txtCifrado.replace(/o/igm,"ober");
        txtCifrado = txtCifrado.replace(/i/igm,"imes");
        txtCifrado = txtCifrado.replace(/a/igm,"ai");
        txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    

    document.getElementById("output").value = txtCifrado.toLowerCase();
    // document.getElementById("input").innerHTML = txtCifrado;

    // return document.getElementById("output").innerHTML=txtCifrado.toLowerCase();
}

let contador = 1;

function change(){
    let fromText = document.querySelector(".input");
    let toText = document.querySelector(".output");
    let tempText = fromText.value;

    if(contador==0){
        fromText.placeholder = "Ingrese Texto a encriptar";
        toText.placeholder = "Encriptando";
        console.log(fromText.value);
        console.log(toText.value);
        fromText.value = toText.value;
        toText.value = tempText;
        contador=1;
        //FUNCION PARA ENCRIPTAR
        fromText.addEventListener("keyup", ()=>darFormato(fromText));
    }
    else {
        fromText.placeholder = "Ingrese Texto a desencriptar";
        toText.placeholder = "Desencriptando";
        console.log(fromText.value);
        console.log(toText.value);
        fromText.value = toText.value;
        toText.value = tempText;
        contador=0;
        //FUNCION PARA DESENCRIPTAR
        fromText.addEventListener("keyup", ()=>darFormato2(fromText));
    }
}

function copy() {
    var copyText = document.querySelector("#output");
    copyText.select();
    document.execCommand("copy");
    alert("¡Se Copió!");
}

function darFormato2(e) {
    let texto = SoloNumLet(e.value);
    let aMayus = texto.replace(/[ÁÀÄÂ]/g,'A');
    let aMinus = aMayus.replace(/[áàäâ]/g,'a');
    let eMayus = aMinus.replace(/[ÉÈËÊ]/g,'E');
    let eMinus = eMayus.replace(/[éèëê]/g,'e');
    let iMayus = eMinus.replace(/[ÍÌÏÎ]/g,'I');
    let iMinus = iMayus.replace(/[íìïî]/g,'i');
    let oMayus = iMinus.replace(/[ÓÒÖÔ]/g,'O');
    let oMinus = oMayus.replace(/[óòöô]/g,'o');
    let uMayus = oMinus.replace(/[ÚÙÜÛ]/g,'U');
    let uMinus = uMayus.replace(/[úùüû]/g,'u');
    let enieMayus = uMinus.replace(/[Ñ]/g,'N');
    let enieMinus = enieMayus.replace(/[ñ]/g,'n');
    let resultado = enieMinus.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');
    let txtCifrado = resultado.replace(/enter/igm,"e");
        txtCifrado = txtCifrado.replace(/ober/igm,"o");
        txtCifrado = txtCifrado.replace(/imes/igm,"i");
        txtCifrado = txtCifrado.replace(/ai/igm,"a");
        txtCifrado = txtCifrado.replace(/ufat/igm,"u");


    document.getElementById("output").value = txtCifrado;
    // document.getElementById("input").innerHTML = txtCifrado;

    // return document.getElementById("output").innerHTML=txtCifrado.toLowerCase();
}
