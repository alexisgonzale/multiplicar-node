
const opts= {
    base: {
        demand: true,
        alias: 'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv = require('yargs') 
            .command('Listar', 'Imprime en consola l atabla de multiplicar', opts)
            .command('Crear', 'Genara un archivo con la tabla de multiplicar', opts)
            .help()
            .argv;
                    
module.exports = {
    argv
}