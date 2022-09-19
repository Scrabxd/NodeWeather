const inquirer = require('inquirer');

require('colors');


//Menu completo
const questions = [{
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
        {
            value: 1,
            name: `${'1.'.green} Buscar ciudad`
        },
        {
            value: 2,
            name: `${'2.'.green} Historial`
        },
        {
            value: 0,
            name: `${'0.'.green} Salir`
        },
    ]
}];

const question2 = [
    {
        type:'input',
        name: 'pauseOpt',
        message:`Press ${'Enter'.green} to continue`

    }
]

const inquirerMenu = async() => {
    console.clear()
    console.log('====================='.blue)
    console.log('Seleccione una Opción'.white)
    console.log('=====================\n'.blue)

    const {opcion} = await inquirer.prompt(questions);

    return opcion
}

const pause = async() =>{
    console.log('\n')
    const {pauseOpt} = await inquirer.prompt(question2);

    return pauseOpt
}

const input = async(message) => {
    const question = [
        {
        type:'input',
        name:'desc',
        message,
        validate(value){
            if(value.length === 0 ){
                return 'Por favor ingrese un valor';
            }
            return true;
            }
        }

    ]
    const {desc} = await inquirer.prompt(question)
    return desc;
}


const listarTareasBorrar = async(tareas = [])=> {

    const choices = tareas.map( (tarea,i) => {
        const idx = `${i + 1}.`.green;
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc.desc}`
        }
    });


    choices.unshift({
        value:'0',
        name:`${'0'.green}. Cancelar`

    });

    const preguntas = [
        {
            type:'list',
            name:'id',
            messages: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas);
    return id;

}

const confirmar = async( message ) => {
    const question = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok
}


const mostrarListadoChecklist = async(tareas = [])=> {

    const choices = tareas.map( (tarea,i) => {
        
        const idx = `${i + 1}.`.green;
        
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    
    const pregunta = [
        {
            type:'checkbox',
            name:'ids',
            messages: 'Seleccione!',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta);
    return ids;

}

module.exports = {
    inquirerMenu,
    pause,
    input,
    listarTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}