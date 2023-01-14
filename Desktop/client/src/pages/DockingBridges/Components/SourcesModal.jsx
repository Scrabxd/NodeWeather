import React, { useState } from 'react';
import './SourcesModal.scss';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import USAFlag from './img/USAFlag.png';
import CanadaFlag from './img/CanadaFlag.png';

export default function SourcesModal({ USEop, textButton }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const USELinks = [
    {
      name: 'Remote',
      link: 'https://remote.co/'
    },
    {
      name: 'Working Nomads',
      link: 'https://www.workingnomads.com/jobs'
    },
    {
      name: 'Angel',
      link: 'https://angel.co/'
    },
    {
      name: 'Freelancer.es',
      link: 'https://www.freelancer.es/jobs'
    },
    {
      name: 'Fiverr',
      link: 'https://www.fiverr.com/'
    },
    {
      name: 'UpWork',
      link: 'https://www.upwork.com/freelance-jobs/'
    },
    {
      name: 'FlexJobs',
      link: 'https://www.flexjobs.com/'
    },
    {
      name: 'CareerJet',
      link: 'https://www.careerjet.com/search/jobs?s=&l=&radius=15&sort=relevance'
    },
    {
      name: 'USAJobs',
      link: 'https://www.usajobs.gov/Search/Results?k=engineer&p=1'
    },
    {
      name: 'Money US News',
      link: 'https://money.usnews.com/careers/job-search?search=engineer&refine_by_salary=0&page=1'
    },
    {
      name: 'Jobs Cedarfair',
      link: 'https://jobs.cedarfair.com/our-jobs/jobs?page=1&view=search'
    }
  ]

  const CanadianLinks = [
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    },
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    },
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    },
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    },
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    },
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    },
    {
      name: 'Canada',
      link: 'https://www.use.com/'
    }
  ]


  return (
    <div>
      <IconButton
        className='SourcesModalButton'
        onClick={handleOpen}
        size='small'
        style={USEop ? {marginRight: '3px'} : {marginLeft: '3px'}}
      >
        {
          USEop
          ? <img src={USAFlag} alt="USAFlag" className='sourcesModalIcon'/>
          : <img src={CanadaFlag} alt="CanadaFlag" className='sourcesModalIcon'/>
        }
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='SourcesModalContainer'>
          <div className='SourcesListContainer'>
            <ul>
              {
                USEop
                  ? USELinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <a href={link.link} target='_blank'>{link.name}</a>
                      </li>
                    )
                  })
                  : CanadianLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <a href={link.link} target='_blank'>{link.name}</a>
                      </li>
                    )
                  })
              }
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}