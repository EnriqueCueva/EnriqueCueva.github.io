window.onload = function(){

    var btn= document.getElementById("enc");
    var btndes = document.getElementById("des");
    var texto = document.getElementById("mytextarea");
    var cont2 = document.getElementById("cont2");
    var btnCopiar = document.getElementById("btncopiar");
    var textoDes = document.getElementById("textdes");
    btn.onclick = alertaen;
    btndes.onclick = alertades;
    btnCopiar.onclick = copiarTexto;

    
    
    function alertaen(){
        if(texto.value == ""){
            alert("TEXTO VACIO")
        }else if(comprobarMayus()==true){
            alert("Solo se permite ingresar texto en minúscula")
        }else{
        encriptar();
       
        cont2.style.display = "none";
        btnCopiar.style.visibility = "visible";
        textoDes.style.visibility = "visible";
    }
    }
    function alertades(){
        if(texto.value == ""){
            alert("TEXTO VACIO")
        
            
        }else{
            desencriptar();
       
        cont2.style.display = "none";
        btnCopiar.style.visibility = "visible";
        textoDes.style.visibility = "visible";
    }
    }
    
    function encriptar(){
        
        const resultadoenc= (texto.value.replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat") );
        textoDes.value = resultadoenc;
        texto.value = "";
    }
    
    function desencriptar(){
        const resultadodes= (texto.value.replaceAll("ai","a")
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ober","o")
        .replaceAll("ufat","u") );
        textoDes.value = resultadodes;
        texto.value = "";
    }
    function copiarTexto(){
        var copiar= textoDes;
        copiar.select();
        document.execCommand("copy");
        alert("texto copiado");
        
    }
    function comprobarMayus(){
        const textarea = document.getElementById("mytextarea");
        const text=textarea.value;
        const textomayus = text.toUpperCase();
        if(text ===  textomayus){
            return true;    
        }else{
            return false;
        }

    }
    
    }
    
    
    
    
    
    
    
    