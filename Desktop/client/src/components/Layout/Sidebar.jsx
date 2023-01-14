import React, { useState, useEffect, useMemo, useCallback } from 'react'
import {
  IconButton,
  Box,
  Stack,
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Talentum from '../../assets/img/logo/roadmap.svg'
import Ticon from '../../assets/img/logo/roadmaplogo.svg'
import ListPages from './listPages'
import { barPages } from "../../utils/Sidebar";
import axios from 'axios'
import { typeUser } from '../../utils/Users'
import { Pages } from '../../utils/permitions'
import _ from 'lodash'
import { Drawer, DrawerHeader} from './styles'
import ConfigMenu from './configMenu'
import './burgerButton.css'
const sizeResponsive = window.screen.availWidth < 1057;

function Sidebar(props) {
  const {
    pathname,
  } = props.location
  const history = useHistory();
  const [isOpen, setOpen] = useState(false)
  const [selectedPage, setSelectedPage] = useState(0);
  const [user, setUser] = useState({});
  const [isSubscribe, setSubscribe] = useState(true);
  const [loading, setLoading] = useState(false);



  const handleListButton = useCallback((index, page) => {
    setSelectedPage(index);
    history.push(page)
  }, [selectedPage])

  return <>
  
    <Drawer
      sx={{
        position: 'sticky',
        height: '100vh',
        top: '0',
        left: 0,
        overflow: 'hidden'
      }}
      anchor="left" variant="permanent"
      open={isOpen}
      onBlur={sizeResponsive ? () => setOpen(false) : null}
    >
    <DrawerHeader>
        <IconButton onClick={() => setOpen(!isOpen)}>
           <MenuIcon /> 
          {/* <label for="check" class="bar">
    <input id="check" type="checkbox"/>

    <span class="top"></span>
    <span class="middle"></span>
    <span class="bottom"></span>
</label> */}
        </IconButton>
      </DrawerHeader>
      
      <Stack style={{ margin: '30px 30px' }}
        direction="column" justifyContent="center" alignItems="center">
        <img src={isOpen ? Talentum : Ticon} width={isOpen ? "190" : '37'} />
      </Stack>
      {
        !loading && (<ListPages
          // pageIndex={selectedPage}
          onClick={handleListButton}
          pages={barPages}
          //  user={user}
        />)
      }
      <ConfigMenu onSelect={setSelectedPage} />
    </Drawer>
    
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    }}>
      {props.children}
    </Box>
  </>
}

export default Sidebar;
