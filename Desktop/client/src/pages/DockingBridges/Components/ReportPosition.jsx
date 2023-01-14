import React, { useState } from 'react';
import './ReportPosition.scss'
import axios from 'axios';
import { IconButton, Button, CircularProgress, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CloseIcon from '@mui/icons-material/Close';

export default function ReportPosition({ position, user_id }) {
    const [open, setOpen] = useState(false);
    const [openConf, setOpenConf] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const createReport = async () => {
        setLoading(true);
        axios.post('/createReport', {
            user_id,
            position_id: position.id,
        })
            .then((res) => {
                handleClose();
                setOpenConf(true);
                counterReport();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const counterReport = async () => {
        const updateReport = position.reports + 1;
        await axios.put('/counterReport', {
            position_id: position.id,
            updateReport
        })
            .then((res) => setLoading(false))
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <IconButton
                onClick={handleOpen}
                sx={{ color: '#800180' }}
            >
                <ReportProblemIcon />
            </IconButton>
            <Modal
                open={openConf}
                className="modalReportConfirm"
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
                    className='alertReportConfirm'
                >
                    Position: <span className='positionReportName'>
                        {position.position_name}
                    </span> report created!
                </Alert>
            </Modal>
            <Modal
                open={open}
                onClose={handleClose}
                className='reportPositionModal'
            >
                <div className='modalReportContainer'>
                    <Typography variant="h6" align='center' component="h2" className='titleReportPosition'>
                        Are you shure you want to report this position?
                    </Typography>
                    <div className='dataPositionContainer'>
                        <Typography align='center' className='dataForPosition'>
                            Company: {position.company_name}
                        </Typography>
                        <Typography align='center' className='dataForPosition'>
                            Job Posting: {position.position_name}
                        </Typography>
                        <Typography align='center' className='dataForPosition'>
                            City: {position.city}
                        </Typography>
                    </div>
                    <div className='buttonsReportContainer'>
                        <Button
                            variant="outlined"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            color="error"
                            variant="outlined"
                            onClick={() => createReport()}
                        >
                            {
                                loading
                                    ? <CircularProgress size={18} sx={{ color: 'red' }} />
                                    : 'Report'
                            }
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}