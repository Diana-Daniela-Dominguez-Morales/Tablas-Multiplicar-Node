const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base =4, listar= true, limit= 10 ) => {
    try {
        
        let salida='';
        let consola='';
        for (let i = 1 ; i<=limit; i++){
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${base * i}\n`;
        }

        if(listar){
            console.log("==============")
            console.log('Tabla del'.red,colors.red(base))
            console.log("=============")

            console.log(salida)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida )

        return `tabla-${base}.txt creada`
    } catch (error) {
        return error
    }    
}
module.exports = {
   crearArchivo
}

