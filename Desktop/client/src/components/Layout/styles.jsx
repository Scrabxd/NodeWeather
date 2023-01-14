import { 
  Drawer as MuiDrawer,
} from '@mui/material'
import {styled } from '@mui/material/styles'
import _ from 'lodash'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  height: '100vh',
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    width: ".8rem",
},
"::-webkit-scrollbar-track": {
    backgroundColor: '#e9e9e9',
    borderRadius: "15rem",
},
"::-webkit-scrollbar-thumb": {
  background: '#BDBDBD',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '20px',
  borderRadius: '10px',
},
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  height: '100vh',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    width: ".4rem",
},
"::-webkit-scrollbar-track": {
    backgroundColor: '#e9e9e9',
    borderRadius: "15rem",
},
"::-webkit-scrollbar-thumb": {
  background: '#BDBDBD',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '20px',
  borderRadius: '10px',
},
});

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    zIndex: '66',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


