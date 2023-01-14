import { useEffect, useState } from "react";
import {Button, Card, CardActions, CardContent, CardHeader, Chip, Grid} from "@mui/material"
import CheckIcon from "@mui/icons-material/Check";

const chipsValues = [ 'Agricultura', 'Alimentación', 'Comercio', 'Construcción', 
'Educación', 'Hotelería', 'Industria química', 'Mecánica', 'Electrica', 'Comunicación', 
'Cultura', 'Minería', 'Petroleo y gas', 'Salud', 'Correos', 'Financiero', 'Servicios publicos', 
'Silvicultura', 'Textiles' ];

export const FiltersDesktop = ({ onApplyFilters }) => {

    const [ filters, setFilters ] = useState([])

    useEffect(() => {
      
        onApplyFilters( filters )

    }, [])

    // useEffect( () => {
    //
    //     if( filters.length <= 0 ){
    //         onApplyFilters( filters )
    //     }
    //
    // }, [ filters ])
    

    const onHandleClickChips = ( { target } ) => {
        
        const chipValue = target.innerText;

        const newFilters = filters.includes( chipValue )
                            ? filters.filter( item => item !== chipValue ) // remover el filtro si ya ha sido seleccionado
                            : [ ...filters, chipValue ] // agregar el filtro si no ha sido seleccionado
        
        setFilters( newFilters )

    }

    const onHandleApplyFilters = () => {

        onApplyFilters( filters )
        console.log( 'request' )

    }

    return (
        <>

            <Card sx={{ width: '25%', borderRadius: '12px', marginY: '10px', display: { xs: 'none', sm: 'block'} }}>

                <CardHeader 
                    title='Filter by category' 
                    subheader={ `${ chipsValues.length } categories` }
                />
                <CardContent>

                    <Grid container justifyContent='center' gap={ 1 } wrap='wrap' sx={{ maxHeight: '22rem', overflowY: 'auto' }}  >
                        {
                            chipsValues.map( (value, index) => (
                                <Grid item key={ index }>
                                    <Chip 
                                        label={ value } 
                                        size='medium' 
                                        icon={ ( filters.includes( value ) ) ? <CheckIcon /> : null } 
                                        onClick={ ( e ) => onHandleClickChips( e ) }
                                        color={ ( filters.includes( value ) ) ? 'primary' : 'default' }
                                    />
                                </Grid>
                            ) )
                        }

                    </Grid>

                    <CardActions sx={{ justifyContent: 'center', mt: { sm: '1rem', lg: '2rem' } }}  >
                        <Button
                            variant="contained"
                            onClick={ onHandleApplyFilters }
                            sx={{ borderRadius: '12px' }}
                        >
                            Apply Filters
                        </Button>
                    </CardActions>

                </CardContent>
                
            </Card>
        </>
    )
}
