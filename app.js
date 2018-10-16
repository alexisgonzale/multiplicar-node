const argv = require('./config/yergs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
    break;

    case 'Craer':
        crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo craedo ${archivo}`))
            .catch(e =>console.log(e));
    break;

    default:
        console.log('Comando no reconocido');
} 