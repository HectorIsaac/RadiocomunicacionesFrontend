import { GrStakeholder, GrNotes, GrBladesVertical, GrShieldSecurity } from 'react-icons/gr';
import { NavDropdown } from 'react-bootstrap';

export const NavUtilidades = () => {
  return (
    <NavDropdown title="Utilidades" id="collasible-nav-dropdown">
    <NavDropdown.Item href="utilidadesAsignaciones"><GrStakeholder/> Asignaciones</NavDropdown.Item>
    <NavDropdown.Item href="utilidadesConfigReportes"><GrShieldSecurity/> Configuración de Reportes</NavDropdown.Item>
    <NavDropdown.Item href="utilidadesHistorialEntradas"><GrBladesVertical/> Historial de Entradas</NavDropdown.Item>
    <NavDropdown.Item href="utilidadesHojaServicio"><GrNotes/> Hoja de Servicio</NavDropdown.Item>
  </NavDropdown>
  )
}
