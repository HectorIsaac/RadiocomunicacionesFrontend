import { NavDropdown } from 'react-bootstrap';
import { GiMicrochip, GiPoliceBadge, GiVirtualMarker, GiPoliceCar, GiGhostAlly, GiVibratingShield, GiWifiRouter, GiCog, GiConfirmed, GiSurroundedShield, GiPsychicWaves } from 'react-icons/gi';
export const NavCatalogo = () => {
  return (
    <NavDropdown title="Catálogos" id="collasible-nav-dropdown" >
            <NavDropdown.Item href="catalogoAccesorio"><GiMicrochip/> Accesorios</NavDropdown.Item>
            <NavDropdown.Item href="catalogoCorporacion"><GiPoliceBadge/> Corporaciones</NavDropdown.Item>
            <NavDropdown.Item href="catalogoMarca"><GiVirtualMarker/> Marcas</NavDropdown.Item>
            <NavDropdown.Item href="catalogoPuesto"><GiGhostAlly/> Puestos</NavDropdown.Item>
            <NavDropdown.Item href="catalogoRadio"><GiWifiRouter/> Radios</NavDropdown.Item>
            <NavDropdown.Item href="catalogoRecurso"><GiVibratingShield/> Recursos</NavDropdown.Item>
            <NavDropdown.Item href="catalogoServicio"><GiCog/> Servicios</NavDropdown.Item>
            <NavDropdown.Item href="catalogoEstatus"><GiConfirmed/> Estatus</NavDropdown.Item>
            <NavDropdown.Item href="catalogoTipos"><GiSurroundedShield/> Tipos</NavDropdown.Item>
            <NavDropdown.Item href="catalogoUsuarios"><GiPsychicWaves/> Usuarios</NavDropdown.Item>
            <NavDropdown.Item href="catalogoVehiculos"><GiPoliceCar/> Vehículos</NavDropdown.Item>
            <NavDropdown.Item href="catalogoZonasRegiones"><GiPoliceBadge/> Zonas-Regiones</NavDropdown.Item>
          </NavDropdown>
  )
}