import React from 'react'
import {
  List,
  ListItemIcon,
  ListItemButton as MuiListItemButton,
  Link,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { typeUser } from '../../utils/Users';
import { FaGoogleDrive } from "react-icons/fa";
import ContentPasteSearchSharpIcon from '@mui/icons-material/ContentPasteSearchSharp';
import { SiGoogleclassroom } from "react-icons/si";
import { useTransition } from 'react';

const ListItemButton = styled(MuiListItemButton)`
  color: #067b7b;
  margin: 5px 5px;
  border-radius: 20px;

  :hover {
    background-color: #f2f9f9;
  }
`;

function ListPages(props) {

  const {
    pageIndex,
    onClick,
    pages,
    user
  } = props

  const openDrive = () => {
    if (user.link_drive)
      window.open(
        user.link_drive,
        '_blank'
      )
  }

  return <List>
    {
      pages.map(({ name, Icon, to }, index) =>
        <div title={name} key={index}>
          <ListItemButton
            onClick={() => onClick(index, to)}
            selected={index == pageIndex}
            sx={{paddingLeft: '10px'}}
          >
            <ListItemIcon
              sx={{
                color: 'black',
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              <Icon size="20" />
            </ListItemIcon>
            {name}
          </ListItemButton>
        </div>
      )
    }

    {/* {
      user.type_id == typeUser.ENGLISH ?
      <ListItemButton onClick={() => onClick(pages.lenght, '/EnglishClass')} >
          <ListItemIcon
            sx={{
              color: 'black',
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <SiGoogleclassroom size="20" />
          </ListItemIcon>
          English Class
        </ListItemButton> : null
    } */}
  </List>;
}

export default ListPages;
