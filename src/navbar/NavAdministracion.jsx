import { FaUser, FaUsers, FaUserShield, FaUsersCog, FaUserTag } from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';

export const NavAdministracion = () => {
  return (
    <NavDropdown title="Administración" id="collasible-nav-dropdown">
            <NavDropdown.Item  href="administracionUsuario" ><FaUser/> Usuarios</NavDropdown.Item>
            <NavDropdown.Item  href="administracionRoles"><FaUsers/> Roles</NavDropdown.Item>
            <NavDropdown.Item  href="administracionPermisos"><FaUserShield/> Permisos</NavDropdown.Item>
            <NavDropdown.Item  href="administracionGruposPermisos"><FaUsersCog/> Grupos de permisos</NavDropdown.Item>
            <NavDropdown.Item  href="administracionVisita"><FaUserTag/> Registro de visita</NavDropdown.Item>
          </NavDropdown>
  )
}
