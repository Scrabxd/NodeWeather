import React, { useState, useEffect } from 'react';
import './CompaniesMobile.scss';
import axios from 'axios';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Button } from '@mui/material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Modal from '@mui/material/Modal';
import PositionsModal from './PositionsModal';

// Iconos de Paginación
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function Row({ companie }) {
    const [open, setOpen] = useState(false);
    const [openPositions, setOpenPositions] = useState(false);
    const [companyName, setCompanyName] = useState('');

    const handleOpenPositions = () => setOpenPositions(true);

    const handleClose = () => setOpenPositions(false);

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
                    <PositionsModal companyName={companyName} />
                </Box>
            </Modal>
            <TableRow>
                <TableCell sx={{ padding: '0px' }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ padding: '6px 6px' }} component="th" scope="row">
                    {companie.name}
                </TableCell>
                <TableCell sx={{ padding: '6px 6px' }} align="center">
                    {companie.categories}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: '0 0' }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography sx={{ backgroundColor: '#054b5d15', padding: '9px' }} variant="boddy1" gutterBottom component="div">
                                {companie.description_1}
                            </Typography>
                            <Typography sx={{ backgroundColor: '#054b5d15', padding: '9px' }} variant="boddy2" gutterBottom component="div">
                                {companie.email_contact}
                            </Typography>
                            <Table size="small" aria-label="purchases" sx={{ backgroundColor: '#054b5d15' }}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ border: '3px solid #F2F2F2' }}>
                                            City
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #F2F2F2', paddingX: '3px' }} colSpan={2}>
                                            {companie.location_city}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ border: '3px solid #F2F2F2' }}>
                                            Last Founding
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #F2F2F2', paddingX: '3px' }} colSpan={2}>
                                            {companie.founding_last}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ border: '3px solid #F2F2F2' }}>
                                            Total Founding
                                        </TableCell>
                                        <TableCell sx={{ border: '3px solid #F2F2F2', paddingX: '3px' }} colSpan={2}>
                                            {companie.founding_total}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 9 }}>
                                <Typography sx={{ color: '#054b5d', fontWeight: 'bold' }} textAlign='center'>
                                    {companie.total_positions} Vacantes
                                </Typography>
                                <Button
                                    onClick={() => { handleOpenPositions(), setCompanyName(companie.name) }}
                                    sx={{ maxWidth: '171px', backgroundColor: '#054b5d', color: 'white' }}
                                >
                                    {'Ver las vacantes de ' + companie.name}
                                </Button>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function CompaniesMobile({ numCompanies }) {
    const [companies, setCompanies] = useState();
    const [paginationCompanies, setPaginationCompanies] = useState({
        limit: 15,
        offset: 0,
    })

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
        <div className='tableContainerCompaniesMobile'>
            <Table aria-label="collapsible table" stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ padding: '0px' }} />
                        <TableCell>Company</TableCell>
                        <TableCell align="center">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        companies ?
                            companies.map((companie, index) => (
                                <Row key={index} companie={companie} />
                            ))
                            : null
                    }
                </TableBody>
            </Table>
            <div className='buttonsPaginationCompaniesMobile'>
                <IconButton
                    onClick={() => toggleFirstPage()}
                    size='small'
                    className='buttonPaginationCompaniesMobile'
                >
                    <KeyboardDoubleArrowLeftIcon size='large' />
                </IconButton>
                <IconButton
                    onClick={() => togglePrevPage()}
                    size='small'
                    className='buttonPaginationCompaniesMobile'
                >
                    <KeyboardArrowLeftIcon size='large' />
                </IconButton>
                <span className='textPaginationCompaniesMobile'>
                    {paginationCompanies.offset + 1} - {paginationCompanies.offset + paginationCompanies.limit} of {numCompanies}
                </span>
                <IconButton
                    onClick={() => toggleNextPage()}
                    size='small'
                    className='buttonPaginationCompaniesMobile'
                >
                    <KeyboardArrowRightIcon size='large' />
                </IconButton>
                <IconButton
                    onClick={() => toggleLastPage()}
                    size='small'
                    className='buttonPaginationCompaniesMobile'
                >
                    <KeyboardDoubleArrowRightIcon size='large' />
                </IconButton>
            </div>
        </div>
    );
}