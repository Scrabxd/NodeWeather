import React, { useState } from 'react'
import { 
  ListItemIcon,
  ListItemButton,
  Menu,
  MenuItem
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios'

function ConfigMenu (props) {
  const {
    onSelect,
  } = props
  const history = useHistory();
  const [configMenu, setConfigMenu] = useState(null)
  const isOpenConfig = Boolean(configMenu)

   const handleSignout = async () => {
    let Session = localStorage.Session;
    Session = JSON.parse(Session);

    await axios.post("/session/delete/token", { token: Session })
      .catch(console.log);

    localStorage.clear();
    window.location.href = "/";
  };

  const handleConfigMenu = (e) => {
    if (!configMenu) {
      onSelect(-1)
      return setConfigMenu(e.currentTarget)
    }

    setConfigMenu(null)
  }

  return <div className="d-flex align-items-end" style={{height: '100vh'}} >
    <ListItemButton id="config" onClick={handleConfigMenu}>
      <ListItemIcon
        sx={{
          color: 'black',
          minWidth: 0,
          mr: 3,
          justifyContent: 'center',
        }}
      >
        <SettingsOutlinedIcon size="20"/>
      </ListItemIcon>
      Settings
    </ListItemButton>
    <Menu
      id="config-menu"
      anchorEl={configMenu}
      open={isOpenConfig}
      onClose={handleConfigMenu}
      MenuListProps={{
        'aria-labelledby': 'config',
      }}
    >
      <MenuItem onClick={() => history.push('/MyProfile')}>
        <ListItemIcon>
          <AccountCircleIcon/>
        </ListItemIcon>
        My account
      </MenuItem>
      <MenuItem sx={{color: 'red'}} onClick={handleSignout}>
        <ListItemIcon sx={{color: 'red'}}>
          <LogoutIcon/>
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  </div>
}

export default ConfigMenu;
