const { number } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs"); //* Importamos el argv de yargs 

const colors = require('colors');
 
console.clear(); 

//* Ejecutamos la funcion de multiplicar 
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(error => console.log(error))


//console.log(process.argv)
//console.log(argv)

//console.log('base-yarns:',argv.base )
//const base = 5;

//* Ver los argumentos que son enviados desde consola 
    //console.log(process.argv) 

//* obtener los argumentos que estan en la consola 
    //const [,,arg3 ='base=7'] = process.argv
    //const [, base=5] = arg3.split('=')
    
 


    //crearArchivo(base)
   // .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  //  .catch(error => console.log(error))

