import React, { useState, useEffect } from 'react';
import './DockingBridges.scss'
import axios from 'axios';
import CompaniesDesk from './Components/CompaniesDesk';
import CompaniesMobile from './Components/CompaniesMobile'
import PositionsDesk from './Components/PositionsDesk';
import PositionsMobile from './Components/PositionsMobile'
import FiltersPositions from './Components/FiltersPositions';
import FiltersCompanies from './Components/FiltersCompanies';
import HrYStartups from './Components/HrYStartups'
import { Button, Typography } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SourcesModal from './Components/SourcesModal';

//Iconos
import { MdWork } from 'react-icons/md'
import BusinessIcon from '@mui/icons-material/Business';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function DockingBridges() {
    //Get positions
    const [numPositions, setNumPositions] = useState();
    const [positions, setPositions] = useState();
    //Get companies
    const [numCompanies, setNumCompanies] = useState();
    const [companies, setCompanies] = useState();
    //Extra states for filters
    const [numRecruiters, setNumRecruiters] = useState();
    const [value, setValue] = useState(0);
    //Get Favorites
    const [numFavorites, setNumFavorites] = useState();
    const [favorites, setFavorites] = useState();

    const favoritesArray = favorites ? favorites.split(',') : [];

    useEffect(() => {
        countCompanies();
        countPositions();
        countRecruiters();
        countFavorites();
    }, [])

    useEffect(() => {
        setNumFavorites(favoritesArray.length)
    }, [favoritesArray])

    const countCompanies = () => {
        axios.get("/countCompanies")
            .then(({ data }) => {
                setNumCompanies(data.count);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const countPositions = () => {
        axios.get("/countPositions")
            .then((res) => {
                setNumPositions(res.data.count)
            })
            .catch(error => {
                console.log(error)
            })
    };

    const countRecruiters = () => {
        axios.get("/countRecruiters")
            .then((res) => {
                setNumRecruiters(res.data.count)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const countFavorites = async () => {
        let { Session } = localStorage;
        Session = JSON.parse(Session);
        Session = await axios.post('/session/get/token', { token: Session }).then(({ data }) => data);
        axios.get("/dataProfile/" + Session.id)
            .then((res) => {
                setFavorites(res.data.data.favorites)
            });
    }

    return (
        <div className='Docking-Container'>
            <div className='App-Bar'>
                <div className='numCompaniesContainer'>
                    {
                        value == 0
                            ? <>
                                <span className='numberCompanies'>
                                    {
                                        numPositions
                                            ? numPositions
                                            : <CircularProgress size={24} sx={{ color: '#800180' }} />
                                    }
                                </span>
                                <p className='numCompaniesText'>
                                    listed positions
                                </p>
                            </>
                            : value == 1
                                ? <>
                                    <span className='numberCompanies'>
                                        {
                                            numCompanies
                                                ? numCompanies
                                                : <CircularProgress size={24} sx={{ color: '#800180' }} />
                                        }
                                    </span>
                                    <p className='numCompaniesText'>
                                        listed companies
                                    </p>
                                </>
                                : value == 2
                                    ? <>
                                        <span className='numberCompanies'>
                                            {
                                                numRecruiters
                                                    ? numRecruiters
                                                    : <CircularProgress size={24} sx={{ color: '#800180' }} />
                                            }
                                        </span>
                                        <p className='numCompaniesText'>
                                            recruiters
                                        </p>
                                    </>
                                    : <>
                                        <span className='numberCompanies'>
                                            {
                                                numFavorites
                                                    ? numFavorites
                                                    : <CircularProgress size={24} sx={{ color: '#800180' }} />
                                            }
                                        </span>
                                        <p className='numCompaniesText'>
                                            favorites
                                        </p>
                                    </>
                    }
                </div>
                <div className='sourcesFiltersContainer'>
                    <div className='sourcesModalsContainerDB'>
                        <span className='sourcesContainerText'>SOURCES</span>
                        <div className='buttonsSourcesContainer'>
                            <SourcesModal USEop={true} />
                            <SourcesModal USEop={false} />
                        </div>
                    </div>
                    {
                        value == 0
                            ? <FiltersPositions />
                            : value == 1
                                ? <FiltersCompanies />
                                : null

                    }
                </div>
            </div>
            <div className='Components-Container'>
                {
                    value == 0
                        ? <>
                            <PositionsMobile numPositions={numPositions} />
                            <PositionsDesk numPositions={numPositions} />
                        </>
                        : value == 1
                            ? <>
                                <CompaniesMobile numCompanies={numCompanies} />
                                <CompaniesDesk numCompanies={numCompanies} />
                            </>
                            : value == 2
                                ? <HrYStartups />
                                : <>
                                    <PositionsDesk favoritesOp={true} />
                                    <PositionsMobile favoritesOp={true} />
                                </>
                }
            </div>
            <BottomNavigation
                className='Bottom-Navigation'
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction className='buttonText' label="Positions" icon={<MdWork className='buttonIcon' />} />
                <BottomNavigationAction className='buttonText' label="Companies" icon={<BusinessIcon className='buttonIcon' />} />
                <BottomNavigationAction className='buttonText' label="HR & Startups" icon={<LocationCityIcon className='buttonIcon' />} />
                <BottomNavigationAction className='buttonText' label="Favorites" icon={<FavoriteIcon className='buttonIcon' />} />
            </BottomNavigation>
        </div>
    )
}   