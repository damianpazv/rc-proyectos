

var producto={nombre:"auriculares", descripcion:"tipo in-ear",precio:5000,id:Math.floor(Math.random()*1000)};
console.log(producto);
console.log(producto.nombre,producto.descripcion);
producto.stock=23;
producto.imagen=true;
console.log(producto);
producto["codigo"]=5551;
console.log(producto);
delete producto.stock;
producto.precio=6000;
producto.colores=["blanco","negro","azul"];
console.log(producto.colores);

