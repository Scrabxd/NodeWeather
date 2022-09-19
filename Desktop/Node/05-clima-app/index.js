

const {  inquirerMenu, pause, input  } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() =>{
    let opt;
    const busquedas = new Busquedas();
do {
    opt = await inquirerMenu()
    switch (opt) {
        case 1:
                // Mostrar mensaje para que la persona escriba
                const lugar = await input('Ciudad: ');
                await busquedas.ciudad(lugar)

                // Buscar los lugares
                
                // Seleccionar el lugar

                //  Clima

                // Mostrar resultados

                console.log('\n Informacion de la ciudad \n'.green);
                console.log(`Ciudad:`);
                console.log(`Lat:`);
                console.log(`Lng:`);
                console.log(`Temperatura:`);
                console.log(`Minima:`);
                console.log(`Maxima:`);
        break;
    
        case 2:
            
        break;
        case 0:
        
        break;

    }
    if ( opt !== 0) await pause();
} while (opt !== 0);

}


main();