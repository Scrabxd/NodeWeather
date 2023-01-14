import React, { useEffect, useState } from 'react';
import './table.scss'
import Grid from '@mui/material/Grid/Grid';
import { Button, Checkbox, CircularProgress, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FiltersCompanies from '../Companies/Components/FiltersCompanies';

//Icons pagination
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Stack } from '@mui/system';

const buttonsName = [ 'Agregar Persona', 'Empresa', 'Escuela', 'Proyectos', 'Eventos', 'Gobierno', 'Becas' ];
const searchInputPlaceholder = 'Escribe lo que deseas encontrar: personas, empresas, productos, servicios, escuelas, proyectos, eventos, gobiernos, becas'
const dataTable = [
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	},
	{
		categoria: 'Productos y servicions',
		resultados: '125,000',
		descripcion: 'Explora dentro de las empresas registradas productos y servicios ofrecidos. Encuentra la solucion a tu necesidad en nuestro buscador'
	}
]


function Main () {

	const [ paginationMain, setPaginationMain ] = useState({
		limit: 15,
		offset: 0,
	});
	const [numData, setNumdata] = useState("");
	const handleOpenPositions = () => setOpenPositions(true);
	const [categoryName, setCategoryName] = useState("");
	const [openPositions, setOpenPositions] = useState(false);

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	const handleAction = ( event ) => {
		console.log('Child did:', event);
	}

	
	const toggleNextPage = () => {
		paginationMain.offset + paginationMain.limit > numData
		  ? ""
		  : setPaginationMain({
			  ...paginationMain,
			  offset: paginationMain.offset + paginationMain.limit,
			});
	};
	
	  const togglePrevPage = () => {
		paginationMain.offset - paginationMain.limit <= -1
			? setPaginationMain({
				...paginationMain,
				offset: 0,
			})
			: setPaginationMain({
				...paginationMain,
				offset: paginationMain.offset - paginationMain.limit,
			});
	};
	
	  const toggleFirstPage = () => {
		setPaginationMain({
			...paginationMain,
			offset: 0,
		});
	};
	
	  const toggleLastPage = () => {
		setPaginationMain({
			...paginationMain,
			offset: numData - paginationMain.limit,
		});
	};


    return (

		<>

			<Grid container justifyContent='center' paddingX={ 5 } rowSpacing={ 2 } mt={ 5 }>

				<Grid container gap={ 2 } wrap='wrap' sx={{ justifyContent:{ xs: 'center', sm: 'center', lg: 'center', xl: 'space-between'  } }}>
					{
						buttonsName.map(( button, index ) => (
							<Grid item key={ index }>
								<Button 
									variant='contained' 
									endIcon={ <AddIcon/> } 
									size='large' 
									sx={{ 
										borderRadius: 3, 
										height: {
											xs: 35,
											md: 45,
										}, 
										fontSize: {
											xs: 12,
											md: 14,
										},
										width: {
											xs: 150,
											md: 'auto',
										}
									}}
								>
									{ button }
								</Button>
							</Grid>
						))
					}
				</Grid>

				{/* <Grid item xs={ 12 } display='flex' justifyContent='space-between' wrap='wrap'>
					
					{
						buttonsName.map(( button, index ) => (
							<Button 
								key={ index } 
								variant='contained' 
								endIcon={ <AddIcon/> } 
								size='large' 
								sx={{ 
									borderRadius: 3, 
									height: {
										xs: 35,
										sm: 45,
									}, 
									fontSize: {
										xs: 12,
										sm: 14,
									}
								}}
							>
								{ button }
							</Button>
						))
					}

				</Grid> */}

				<Grid item xs={ 12 }>

					<TextField
						type='search'
						fullWidth
						variant='outlined'
						placeholder={ searchInputPlaceholder }
						InputProps={{
							startAdornment: <SearchIcon fontSize='medium' sx={{ mr: 1 }}/>
						}} 
						className='search-bar'
					/>


				</Grid>

				<Grid item xs={ 12 }>

					<TableContainer component={Paper} className="companiesDeskContainer">
						<input placeholder="Search" type="text" className="input" required=""></input>
						<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell align="center">Categoria</TableCell>
								<TableCell align="center">Resultado</TableCell>
								<TableCell align="center">Descripcion</TableCell>
								<TableCell align="center">Filtro</TableCell>
								<FiltersCompanies onAction={handleAction}/>
							</TableRow>
						</TableHead>
						<TableBody>
						{dataTable ? (
							dataTable.map((data, index) => (
								<TableRow
									className="tableRowCompaniesHover"
									key={index}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									onClick={() => {
										handleOpenPositions(), setCategoryName(data.categoria);
									}}
								>
								<TableCell align="center">{data.categoria}</TableCell>
								<TableCell align="center">{data.resultados}</TableCell>
								<TableCell align="left">{data.descripcion}</TableCell>
	
								<TableCell align="center">
								<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
								</TableCell>
							</TableRow>
						))
						) : (
							<TableRow>
								<TableCell align="center" colSpan={6}>
									<CircularProgress sx={{ color: "#800180" }} />
								</TableCell>
							</TableRow>
						)}
						</TableBody>
						</Table>
						<div className="paginationContainerCompanies">
							<div className="paginationTextCompanies">
								<span>Companies per page </span>
								<Select
								size="small"
								defaultValue="15"
								onChange={(e) =>
									setPaginationMain({
									...paginationMain,
									limit: e.target.value,
									})
								}
								>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={50}>50</MenuItem>
								</Select>
								<span className="textPagesCompanies">
									{paginationMain.offset} -{" "}
									{paginationMain.offset + paginationMain.limit} of{" "}
									{numData ? (
										numData
									) : (
										<CircularProgress
										size={12}
										sx={{ color: "#800180", marginLeft: "9px" }}
								/>
									)}
								</span>
							</div>
							<div className="buttonsPaginationContainerCompanies">
								<IconButton
									onClick={() => toggleFirstPage()}
									size="small"
									className="buttonPagination"
								>
									<KeyboardDoubleArrowLeftIcon size="large" />
								</IconButton>
								<IconButton
									onClick={() => togglePrevPage()}
									size="small"
									className="buttonPagination"
								>
									<KeyboardArrowLeftIcon size="large" />
								</IconButton>
								<IconButton
									onClick={() => toggleNextPage()}
									size="small"
									className="buttonPagination"
								>
									<KeyboardArrowRightIcon size="large" />
								</IconButton>
								<IconButton
									onClick={() => toggleLastPage()}
									size="small"
									className="buttonPagination"
								>
								<KeyboardDoubleArrowRightIcon size="large" />
									</IconButton>
							</div>
						</div>
					</TableContainer>

				</Grid>

			</Grid>

			

		</>

    )
}

export default Main;