import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './FiltersPositions.scss'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

export default function FiltersPositions() {
    const [open, setOpen] = useState(false)
    const [jobName, setJobName] = useState(true)

    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <>
            <Button sx={{ color: '#d97828', width: '121px', display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'flex-end' }} onClick={toggleDrawer}>
                <TuneIcon sx={{ color: '#d97828', fontSize: '33px' }} />
                <span style={{ color: '#ecbb93', fontWeight: 'bold', fontSize: '9px' }}>Filter Positions</span>
            </Button>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer}
            >
                <div className='FiltersPositionsContainer'>
                    <div className='titleContainer'>
                        <span className='findPositionText'>
                            Find your perfect position
                        </span>
                        <h1 className='titleFilters'>
                            Filters
                        </h1>
                        <IconButton
                            onClick={() => setOpen(!open)}
                            color='error'
                            size='large'
                            className='iconClose'
                        >
                            <CloseIcon sx={{ fontSize: 39 }} />
                        </IconButton>
                    </div>
                    <div className='firstTextFieldsContainer'>
                        <TextField
                            size='small'
                            id='outlined-basic'
                            label='Keywords'
                            variant='outlined'
                            className='inputFilters'
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <span className='keywordsPhrase'>
                            Keywords to search in job titles or descriptions
                        </span>
                    </div>
                    <div className='radiosContainer'>
                        <span className='searchForKeyword'>
                            Search for your keyword in:
                        </span>
                        <div
                            className='selectRadioContainer'
                            onClick={() => setJobName(!jobName)}
                        >
                            <span className='JobName'>
                                Job names
                            </span>
                            <div
                                className='radioBorder'
                                style={jobName ? null : { justifyContent: 'flex-end' }}
                            >
                                <div className='radioDot'></div>
                            </div>
                            <span className='descriptionText'>
                                Descriptions
                            </span>
                        </div>
                    </div>
                    <div className='firstTextFieldsContainer'>
                        <TextField
                            size='small'
                            id='outlined-basic'
                            label='Company Name'
                            variant='outlined'
                            className='inputFilters'
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <span className='keywordsPhrase'>
                            In which company would you like to work?
                        </span>
                    </div>
                    <div className='selectsContainer'>
                        <span className='selectTextLabel'>Select Cities</span>
                        <Select
                            size='small'
                            defaultValue=''
                            fullWidth
                        >
                            <MenuItem value='Dice'>Dice</MenuItem>
                            <MenuItem value='Simplyhired'>Simplyhired</MenuItem>
                        </Select>
                    </div>
                    <div className='selectsContainer'>
                        <span className='selectTextLabel'>Select Categories</span>
                        <Select
                            size='small'
                            defaultValue=''
                            fullWidth
                        >
                            <MenuItem value='Dice'>Dice</MenuItem>
                            <MenuItem value='Simplyhired'>Simplyhired</MenuItem>
                        </Select>
                    </div>
                    <div className='sourcesContainer'>
                        <span className='filterBySource'>
                            Filter by sourse
                        </span>
                        <div className='sources'>
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Dice'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Simplyhired'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Theladders'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Monster'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Database'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Ziprecruiters'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Jooble'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Jobs.lever'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Indeed'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Dynamitejobs'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Powertofly'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Weworkremotely'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Careerbuilder'
                            />
                            <Chip
                                onClick={(e) => console.log(e.target.innerText)}
                                className='chipStyle'
                                label='Linked In'
                            />
                        </div>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <Button
                            variant='outlined'
                        >
                            Apply Filters
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}