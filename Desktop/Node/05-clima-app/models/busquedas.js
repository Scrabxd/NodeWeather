const axios = require('axios');

class Busquedas{
    historial = ['Tegucigalpa','Madrid','SanJose'];

    constructor(){
        //TODO: leer DB si es que existe.
    }

    get paramsMapbox(){
        return{
                'access_token': 'pk.eyJ1Ijoic2NyYWIiLCJhIjoiY2w4ODlwaDI1MWd5cDN2cXVqdGs2cm9obiJ9.lJdG4k_CNzu0LkXDubTX4Q',
                'limit': 5,
                'language':'es'
        }
    }

    async ciudad( lugar = ''){
        // console.log('Ciudad',lugar);
        
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const res = await instance.get();
            
            console.log(res.data)
            
            return []; // retornar los lugares que coincidan con lo que escribio la persona

        } catch (error) {
            return [];
            
        }


    }

}



module.exports = Busquedas;