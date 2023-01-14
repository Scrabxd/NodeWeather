import React, { useState, useEffect } from 'react';
import './CompaniesDesk.scss';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Select, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import PositionsModal from './PositionsModal';
import PositionsDesk from './PositionsDesk';

//Icons pagination
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function CompaniesDesk({ numCompanies }) {
    const [companies, setCompanies] = useState();
    const [companyName, setCompanyName] = useState('');
    const [openPositions, setOpenPositions] = useState(false);
    const [paginationCompanies, setPaginationCompanies] = useState({
        limit: 15,
        offset: 0,
    })

    const handleOpenPositions = () => setOpenPositions(true);
    const handleClose = () => setOpenPositions(false);

    useEffect(() => {
        getCompanies();
    }, [paginationCompanies])

    const getCompanies = () => {
        axios.post("/getAllCompanies", { paginationCompanies })
            .then(({ data }) => {
                setCompanies(data.companies)
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const toggleNextPage = () => {
        paginationCompanies.offset + paginationCompanies.limit > numCompanies
            ? ''
            : setPaginationCompanies({
                ...paginationCompanies,
                offset: paginationCompanies.offset + paginationCompanies.limit
            })
    }

    const togglePrevPage = () => {
        paginationCompanies.offset - paginationCompanies.limit <= -1
            ? setPaginationCompanies({
                ...paginationCompanies,
                offset: 0
            })
            : setPaginationCompanies({
                ...paginationCompanies,
                offset: paginationCompanies.offset - paginationCompanies.limit
            })
    }

    const toggleFirstPage = () => {
        setPaginationCompanies({
            ...paginationCompanies,
            offset: 0
        })
    }

    const toggleLastPage = () => {
        setPaginationCompanies({
            ...paginationCompanies,
            offset: numCompanies - paginationCompanies.limit
        })
    }

    return (
        <>
            <Modal
                open={openPositions}
                onClose={handleClose}
            >
                <Box sx={{
                    position: 'absolute',
                    margin: '1.5rem 2rem',
                    overflowY: 'scroll',
                    backgroundColor: 'white',
                    maxHeight: 'calc(100vh - 3rem)',
                    width: 'calc(100vw - 4rem)'
                }}>
                    <PositionsDesk companyName={companyName} />
                </Box>
            </Modal>
            <TableContainer component={Paper} className='companiesDeskContainer'>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Company</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">City</TableCell>
                            <TableCell align="center">Last Founding</TableCell>
                            <TableCell align="center">Total Founding</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            companies ?
                                companies.map((companie, index) => (
                                    <TableRow
                                        className='tableRowCompaniesHover'
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={() => { handleOpenPositions(), setCompanyName(companie.name) }}
                                    >
                                        <TableCell align="left">
                                            {
                                                paginationCompanies.offset + index + 1
                                            }
                                        </TableCell>
                                        <TableCell align="left">{companie.name}</TableCell>
                                        <TableCell align="center">{companie.categories}</TableCell>
                                        <TableCell align="center">{companie.location_city}</TableCell>
                                        <TableCell align="center">{companie.founding_last}</TableCell>
                                        <TableCell align="center">{companie.funding_total}</TableCell>
                                    </TableRow>))
                                :
                                <TableRow>
                                    <TableCell align="center" colSpan={6}>
                                        <CircularProgress sx={{ color: '#800180' }} />
                                    </TableCell>
                                </TableRow>
                        }
                    </TableBody>
                </Table>
                <div className='paginationContainerCompanies'>
                    <div className='paginationTextCompanies'>
                        <span>Companies per page </span>
                        <Select
                            size='small'
                            defaultValue='15'
                            onChange={(e) => (
                                setPaginationCompanies({
                                    ...paginationCompanies, limit: e.target.value
                                })
                            )}
                        >
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                        <span className='textPagesCompanies'>
                            {paginationCompanies.offset} - {paginationCompanies.offset + paginationCompanies.limit} of {numCompanies ? numCompanies : <CircularProgress size={12} sx={{ color: '#800180', marginLeft: '9px' }} />}
                        </span>
                    </div>
                    <div className='buttonsPaginationContainerCompanies'>
                        <IconButton
                            onClick={() => toggleFirstPage()}
                            size='small'
                            className='buttonPagination'
                        >
                            <KeyboardDoubleArrowLeftIcon size='large' />
                        </IconButton>
                        <IconButton
                            onClick={() => togglePrevPage()}
                            size='small'
                            className='buttonPagination'
                        >
                            <KeyboardArrowLeftIcon size='large' />
                        </IconButton>
                        <IconButton
                            onClick={() => toggleNextPage()}
                            size='small'
                            className='buttonPagination'
                        >
                            <KeyboardArrowRightIcon size='large' />
                        </IconButton>
                        <IconButton
                            onClick={() => toggleLastPage()}
                            size='small'
                            className='buttonPagination'
                        >
                            <KeyboardDoubleArrowRightIcon size='large' />
                        </IconButton>
                    </div>
                </div>
            </TableContainer>
        </>
    );
}