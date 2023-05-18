const contraseña=prompt("ingrese su contraseña");
const limite=contraseña.length;
const letras="abcdefghyjklmnñopqrstuvwxyz";
const letrasM="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

const numeros="0123456789";

function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}


function tiene_minusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}
function tiene_mayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letrasM.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}



if(limite<8)
{
   alert("la contreseña debe tener al menos 8 caracteres ");
}

else if(tiene_numeros(contraseña)==0)
{
   alert("la contreseña debe tener un numero");
}
else if(tiene_minusculas(contraseña)==1 && tiene_mayusculas(contraseña)==0)
{
   alert("la contreseña debe tener una mayuscula");
}
else if(tiene_minusculas(contraseña)==0 && tiene_mayusculas(contraseña)==1)
{
   alert("la contreseña debe tener una minuscula");
}
else{

   alert("la contraseña cumple con todos los requisitos");
}










