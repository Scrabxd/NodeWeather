import LanguageIcon from '@mui/icons-material/Language';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import { typeUser } from "./Users";


export const barPages = [
  {
    to: "/",
    name: "Main",
    Icon: HomeIcon,
    auths: [typeUser.USER, typeUser.ADMIN, typeUser.SADMIN]
  },  
  {
    to: "/Home",
    name: "Home",
    Icon: LanguageIcon,
    auths: [typeUser.USER, typeUser.ADMIN, typeUser.SADMIN]
  }, 
  {
    to: "/School",
    name: "Escuelas",
    Icon: SchoolIcon,
    auths: [typeUser.USER, typeUser.ADMIN, typeUser.SADMIN]
  }, 
  {
    to: "/Companies",
    name: "Compañias",
    Icon: ApartmentIcon,
    auths: [typeUser.USER, typeUser.ADMIN, typeUser.SADMIN]
  },
  {
    to: "/Prueba",
    name: "Prueba",
    Icon: LanguageIcon,
    auths: [typeUser.USER, typeUser.ADMIN, typeUser.SADMIN]
  }, 
];


