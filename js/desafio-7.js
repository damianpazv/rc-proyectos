let frase1=prompt("escriba una frase");
let frase2=prompt("escriba otra frase");
let frase3=prompt("escriba una ultima frase");
const fraseCorta=[];
const fraseLarga=[];
const fraseCompuesta=[];


if(frase1.length<20){

let primeraLetra=frase1[0].toUpperCase();
frase1=primeraLetra + frase1.slice(1);
fraseCorta.push(frase1);
}
else if(frase1.length>20 && frase1.length<25){
    let primeraLetra=frase1[0].toUpperCase();
frase1=primeraLetra + frase1.slice(1);
    fraseLarga.push(frase1);
   
}
else if(frase1.length>25){
    fraseCompuesta.push(frase1);
    frase1=frase1.toUpperCase();
}

if(frase2.length<20){
    let primeraLetra=frase2[0].toUpperCase();
    frase2=primeraLetra + frase2.slice(1);
    fraseCorta.push(frase2);
    
    }
    else if(frase2.length>20 && frase2.length<25){
        let primeraLetra=frase2[0].toUpperCase();
        frase2=primeraLetra + frase2.slice(1);
        fraseLarga.push(frase2);
    }
    else if (frase2.length>25) {
        fraseCompuesta.push(frase2);
        frase2=frase2.toUpperCase();
    }

    if(frase3.length<20){
        let primeraLetra=frase3[0].toUpperCase();
        frase3=primeraLetra + frase3.slice(1);
        fraseCorta.push(frase3);
   
        }
        else if(frase3.length>20 && frase3.length<25){
            let primeraLetra=frase3[0].toUpperCase();
            frase3=primeraLetra + frase3.slice(1);
            fraseLarga.push(frase3);
            
        }
        else if (frase3.length>25){
            frase3=frase3.toUpperCase();
            fraseCompuesta.push(frase3);
            
        }

       alert(`${fraseCorta} - es una frase corta`);
       alert(`${fraseLarga} - es una frase larga`);
       alert(`${fraseCompuesta} - es una frase compuesta`);