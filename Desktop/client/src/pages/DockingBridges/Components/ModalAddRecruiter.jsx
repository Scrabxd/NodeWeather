import React, { useState, useEffect } from 'react';
import './ModalAddRecruiter.scss';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Button, TextField, IconButton, Typography, Alert } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalAddRecruiter({ getRecruiters }) {
    const [open, setOpen] = useState(false);
    const [openConf, setOpenConf] = useState(false);
    const [textModal, setTextModal] = useState('');
    const [recruiter, setRecruiter] = useState({
        recruiter_name: '',
        category_group: '',
        email_contact: '',
        linkedin_contact: ''
    })

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addRecruiter = () => {
        setTextModal(recruiter.recruiter_name)
        axios.put('/AddRecruiter', { recruiter })
            .then(res => {
                handleClose();
                getRecruiters();
                setOpenConf(true);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <Modal
                open={openConf}
                onClose={() => { setOpenConf(false) }}
                className="addRecruiterConfirm"
            >
                <Alert
                    action={
                        <IconButton
                            onClick={() => { setOpenConf(false) }}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                    severity='success'
                    variant='outlined'
                    className='alertAddConfirm'
                >
                    Recruiter <span className='textModalAdd'>
                        -{textModal}-
                    </span> added successfully!
                </Alert>
            </Modal>
            <IconButton color='success' onClick={handleOpen} >
                <PersonAddAlt1Icon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                className='modalAddRecruiter'
            >
                <div className='textFieldsContainer'>
                    <Typography variant='h5' align='center' className='title'>Add Recruiter</Typography>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        ariant="outlined"
                        className='textFieldStyled'
                        onChange={(e) => setRecruiter({ ...recruiter, recruiter_name: e.target.value })}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Category"
                        ariant="outlined"
                        className='textFieldStyled'
                        onChange={(e) => setRecruiter({ ...recruiter, category_group: e.target.value })}
                    />
                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        className='textFieldStyled'
                        onChange={(e) => setRecruiter({ ...recruiter, email_contact: e.target.value })}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Linked In"
                        variant="outlined"
                        className='textFieldStyled'
                        onChange={(e) => setRecruiter({ ...recruiter, linkedin_contact: e.target.value })}
                    />
                    <Button
                        variant="contained"
                        color='success'
                        onClick={addRecruiter}
                    >
                        ADD
                    </Button>
                </div>
            </Modal>
        </div>
    )
}