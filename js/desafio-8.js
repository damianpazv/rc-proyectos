const intervalo=setInterval( () =>{
    const fecha= new Date();

const intl=Intl.DateTimeFormat('sp-AR',
{
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
})

    document.body.innerHTML= intl.format(fecha);
},1000)