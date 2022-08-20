import {  useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FiRadio } from 'react-icons/fi';
import { FcServices, FcFolder, FcInspection, FcKey } from 'react-icons/fc';
import { FaPowerOff } from 'react-icons/fa';
import { NavAdministracion } from './NavAdministracion';
import { NavCatalogo } from './NavCatalogo';
import './styless.css';
import { NavUtilidades } from './NavUtilidades';
import { useContext } from 'react';
import { AuthContext } from '../log/context/AuthContext';

export const NavbarRadio = () => {
  const navigate = useNavigate();

    const {user,logout}= useContext(AuthContext);

    const onLogout = ()=>{
        logout();
        navigate('/login',{
            replace: true
        });
    }

  return (
    <>
    <header className="App-header">
     <Navbar expand="lg"  className='configNav' >
      <Container>
        <Nav className="me-auto ">
          <Navbar.Brand  href="principal"><FiRadio/> Radiocomunicaciones</Navbar.Brand>
        </Nav>
        <Nav className="me-auto">
          <div className='faNav'>
            <FcServices />
          </div>
          <NavAdministracion/>
          <div className='faNav'>
            <FcFolder />
          </div>
          <NavCatalogo/>
          <div className='faNav'>
            <FcInspection />
          </div>
            <NavUtilidades/>
          <div className='faNav'>
            <FcKey />
          </div>
          <Nav.Link href="updatePwd"> Cambiar contraseña</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="#logout" onClick={onLogout}> <FaPowerOff/> </Nav.Link>
        </Nav>
            <div className="navbar-collapse collapse  order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>
                </ul>
            </div>
      </Container>
    </Navbar>
  </header>
  </>
  )
}