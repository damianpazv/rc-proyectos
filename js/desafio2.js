var nombresfem=["lourdes","maria","julia","paula","sol","pia","laura","ines","virginia","rosario","constanza","paz","mora","claudia","emilia"];
console.log(nombresfem);

nombresfem.push("alicia");
console.log(nombresfem);

nombresfem.pop("alicia");
console.log(nombresfem);

nombresfem.unshift("cecilia");
console.log(nombresfem);

nombresfem.shift("cecilia");
console.log(nombresfem);

var arrayslice=nombresfem.slice(1,4);
console.log(arrayslice);


arrayslice.splice(1,1,"mora","malena");
console.log(arrayslice);

var arrayconcat=nombresfem.concat(arrayslice);
console.log(arrayconcat);

arrayconcat.sort();
console.log(arrayconcat);

arrayconcat.reverse();
console.log(arrayconcat);

var arrayjoin=arrayconcat.join();
console.log(arrayjoin);

console.log(arrayconcat.indexOf("manzana"));
console.log(arrayconcat.includes("pera"));