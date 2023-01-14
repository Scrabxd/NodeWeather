import React, { useState, useEffect } from 'react';
import './HrYStartups.scss';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalAddRecruiter from './ModalAddRecruiter';
import { IconButton, Alert } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

//Icons pagination
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function HrYStartups() {
    const [recruiters, setRecruiters] = useState([]);
    const [type_id, setType_id] = useState(0);
    const [open, setOpen] = useState(false);
    const [textModal, setTextModal] = useState('');

    useEffect(() => {
        getRecruiters();
        getSession()
    }, [])

    const getSession = async () => {
        let { Session } = localStorage;
        Session = JSON.parse(Session);
        Session = await axios.post('/session/get/token', { token: Session }).then(({ data }) => data);
        axios.get("/dataProfile/" + Session.id)
            .then((res) => {
                setType_id(res.data.data.type_id);
            });
    }

    const getRecruiters = async () => {
        await axios.get('/recruiters').then((response) => {
            setRecruiters(response.data);
        });
    }

    const deleteRecruiter = async (recruiter) => {
        setTextModal(recruiter.recruiter_name)
        await axios.delete('/DeleteRecruiter/' + recruiter.id).then((response) => {
            getRecruiters();
            setOpen(true);
        })
            .catch((err) => {
                console.log(err);
            }) //Funcion para mostrar error si no se pudo eliminar
    }

    return (
        <>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                className="deleteRecruiterConfirm"
            >
                <Alert
                    action={
                        <IconButton
                            onClick={() => { setOpen(false) }}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                    severity='success'
                    variant='outlined'
                    className='alertDeleteConfirm'
                >
                    Recruiter <span className='textDeletedConfirm'>
                        -{textModal}-
                        </span> deleted successfully!
                </Alert>
            </Modal>
            <TableContainer component={Paper} className='tableRecruitersContainer'>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell>Recruiter</TableCell>
                            <TableCell align="center">E-mail</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">LinkedIn</TableCell>
                            {
                                type_id === 3 || type_id === 1
                                    ? <TableCell align="center">
                                        <ModalAddRecruiter getRecruiters={getRecruiters} />
                                    </TableCell>
                                    : null
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            recruiters ?
                                recruiters.map((recruiter, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell className='tableCellStyled' align="center">
                                            {index}
                                        </TableCell>
                                        <TableCell className='tableCellStyled' align="left">
                                            {recruiter.recruiter_name}
                                        </TableCell>
                                        <TableCell className='tableCellStyled' align="center">
                                            <a href={`mailto: ${recruiter.email_contact}`}>
                                                {recruiter.email_contact}
                                            </a>
                                        </TableCell>
                                        <TableCell className='tableCellStyled' align="center">
                                            {recruiter.category_group}
                                        </TableCell>
                                        <TableCell className='tableCellStyled' align="center">
                                            {
                                                recruiter.linkedin_contact === null
                                                    ? recruiter.recruiter_name
                                                    : <a href={recruiter.linkedin_contact} target="_blank" >
                                                        {recruiter.recruiter_name}
                                                    </a>
                                            }
                                        </TableCell>
                                        {
                                            type_id === 3 || type_id === 1
                                                ? <TableCell className='tableCellStyled' align="center">
                                                    <IconButton
                                                        color='error'
                                                        onClick={() => deleteRecruiter(recruiter)}
                                                    >
                                                        <DeleteForeverIcon />
                                                    </IconButton>
                                                </TableCell>
                                                : null
                                        }
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
                {/* <div className='paginationContainerRecruiters'>
                <div className='paginationTextRecruiters'>
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
                    <span className='textPagesRecruiters'>
                        {paginationCompanies.offset} - {paginationCompanies.offset + paginationCompanies.limit} of {numCompanies ? numCompanies : <CircularProgress size={12} sx={{ color: '#800180', marginLeft: '9px' }} />}
                    </span>
                </div>
                <div className='buttonsPaginationContainerRecruiters'>
                    <IconButton
                        onClick={() => toggleFirstPage()}
                        size='small'
                        className='buttonPaginationRecruiters'
                    >
                        <KeyboardDoubleArrowLeftIcon size='large' />
                    </IconButton>
                    <IconButton
                        onClick={() => togglePrevPage()}
                        size='small'
                        className='buttonPaginationRecruiters'
                    >
                        <KeyboardArrowLeftIcon size='large' />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleNextPage()}
                        size='small'
                        className='buttonPaginationRecruiters'
                    >
                        <KeyboardArrowRightIcon size='large' />
                    </IconButton>
                    <IconButton
                        onClick={() => toggleLastPage()}
                        size='small'
                        className='buttonPaginationRecruiters'
                    >
                        <KeyboardDoubleArrowRightIcon size='large' />
                    </IconButton>
                </div>
            </div> */}
            </TableContainer>
        </>
    );
}