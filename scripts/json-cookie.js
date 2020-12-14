jsObject = {
  frutas: [
    {
      nombre: 'Manzana',
      cantidad: 20,
    },
    {
      nombre: 'Plátano',
      cantidad: 50,
    },
    {
      nombre: 'Naranja',
      cantidad: 30,
      propiedades: ['Vitamina', 'Agua'],
    },
  ],
};

console.log(jsObject.frutas[1].nombre);
console.log(jsObject.frutas[2].cantidad);
console.log(jsObject.frutas[2].propiedades[1]);
strObject = JSON.stringify(jsObject);
console.log(strObject);
parsedObject = JSON.parse(strObject);
console.log(parsedObject.frutas[1].nombre);
console.log(parsedObject.frutas[2].cantidad);
console.log(parsedObject.frutas[2].propiedades[1]);
