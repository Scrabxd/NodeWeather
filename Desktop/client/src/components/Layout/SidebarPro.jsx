import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, } from 'react-pro-sidebar';
// import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent,} from 'react-pro-sidebar';
import { Folder, Forum, Receipt, Settings, Wallet } from "@mui/icons-material";
import Ticon from '../../assets/img/logo/roadmaplogo.svg'
import {BurgerButton} from "./BurgerButton";
import { Link } from 'react-router-dom';

const menuBusquedaValues = [
    { label: 'Todo', link: '' },
    { label: 'Empresas y Startups', link: '/Companies' },
    { label: 'Productos y servicios', link: '' },
    { label: 'Personas', link: '' },
    { label: 'Escuelas', link: '/School' },
    { label: 'Proyectos', link: '' },
    { label: 'Eventos', link: '' },
    { label: 'Becas', link: '' },
]
export const SidebarPro = ({ children }) => {

    const { collapseSidebar  } = useProSidebar();

    const onHandleCollapseSidebar = () => {

        collapseSidebar();

    }

    return(

        <div id='app' style={{ height: '100vh', display: 'flex' }}>
            <Sidebar rootStyles={{
                height: '100vh', color: 'white', }}
                 defaultCollapsed={ true }
                 backgroundColor={'#0E1B6B'}
            >
                <Menu>
                    <MenuItem
                        icon={ <BurgerButton collapseSidebar={ onHandleCollapseSidebar } /> }
                    ></MenuItem>

                    <MenuItem
                        icon={ <img src={ Ticon } alt="roadmap logo" style={{ width: '100%' }} /> }
                    >
                        Roadmap
                    </MenuItem>

                    <SubMenu icon={ <Settings fontSize='small' /> } label='Busqueda' >
                        {
                            menuBusquedaValues.map(( option, index ) => (
                                <MenuItem
                                    key={ index }
                                    rootStyles={{ backgroundColor: '#0E1B6B' }}
                                    routerLink={ <Link to={ option.link }/> }
                                >
                                    { option.label }
                                </MenuItem>
                            ))
                        }
                    </SubMenu>

                    <MenuItem icon={ <Folder sx={{ fontSize: '1rem' }} /> }>Agregar a Roadmap</MenuItem>
                    <MenuItem icon={ <Receipt sx={{ fontSize: '1rem' }} /> }>Mi Cuenta</MenuItem>
                    <MenuItem icon={ <Forum sx={{ fontSize: '1rem' }} /> }>Foros</MenuItem>
                    <MenuItem icon={ <Wallet fontSize='small' sx={{ fontSize: '1rem' }} /> }>Donar</MenuItem>
                </Menu>
            </Sidebar>
            { children }
        </div>

    );

}