
// EJERCICIO 1
const personas = [
    { nombre: 'Juan', edad: 25, ciudad: 'Buenos Aires', sueldo: 50000 },
    { nombre: 'María', edad: 30, ciudad: 'Rosario', sueldo: 65000 },
    { nombre: 'Pedro', edad: 40, ciudad: 'Córdoba', sueldo: 80000 },
    { nombre: 'Lucía', edad: 35, ciudad: 'Mendoza', sueldo: 75000 }
    ];
let sueldoTotal=0;
    personas.forEach((persona) => {
    sueldoTotal=persona.sueldo + sueldoTotal;
    
    })    

    console.log(sueldoTotal);
    alert(`El suledo total es: ${sueldoTotal}`);


// EJERCICIO 2
const mayores30=[];
    personas.forEach((persona) => {

if(persona.edad>30)
{
    mayores30.push(persona);
}

})

console.log(mayores30);
alert(`Los mayores de 30 son ${mayores30.length} personas`);

//EJERCICIO 3

const productos = [
    { nombre: 'Camisa', precio: 150, stock: 20, vendidos: 5, sold: true },
    { nombre: 'Pantalón', precio: 250, stock: 15, vendidos: 8, sold: false },
    { nombre: 'Zapatillas', precio: 500, stock: 10, vendidos: 3, sold: true },
    { nombre: 'Bolso', precio: 300, stock: 25, vendidos: 12, sold: false },
    { nombre: 'Cinturón', precio: 100, stock: 30, vendidos: 10, sold: true },
    { nombre: 'Sombrero', precio: 200, stock: 5, vendidos: 1, sold: false },
    { nombre: 'Bufanda', precio: 50, stock: 50, vendidos: 20, sold: true },
    { nombre: 'Guantes', precio: 80, stock: 40, vendidos: 18, sold: false },
    { nombre: 'Gorra', precio: 120, stock: 8, vendidos: 2, sold: true },
    { nombre: 'Gafas de sol', precio: 180, stock: 12, vendidos: 6, sold: false },
    { nombre: 'Pulsera', precio: 20, stock: 60, vendidos: 30, sold: true },
    { nombre: 'Collar', precio: 40, stock: 45, vendidos: 25, sold: false },
    { nombre: 'Anillo', precio: 60, stock: 35, vendidos: 15, sold: true },
    { nombre: 'Pendientes', precio: 30, stock: 55, vendidos: 22, sold: false },
    { nombre: 'Reloj', precio: 400, stock: 6, vendidos: 4, sold: true }
    ];

    productos.forEach((producto) => {
  if(producto.sold)
  {
    let tresProductos=producto.precio*3;
    let ganancia=tresProductos*0.30;
    console.log(`La ganancia por vender 3 productos de tipo ${producto.nombre} es de : $ ${ganancia}`);
    alert(`La ganancia por vender 3 productos de tipo ${producto.nombre} es de : $ ${ganancia}`);
  }


    });
    