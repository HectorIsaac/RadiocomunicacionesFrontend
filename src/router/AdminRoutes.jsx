import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarRadio } from "../navbar/NavbarRadio"
import { GruposDePermisos, RegistroDeVisita ,Roles,Usuario, Permisos } from "../administracion/pages"
import { Asignaciones,ConfiguracionDeReportes, HistorialDeEntradas, HojaDeServicio } from "../utilidades/pages"
import { Accesorios, Corporaciones, Estatus, Marcas, Puestos, Radios, RecursoCompras, Servicios, Tipos, Usuarios, Vehiculos, ZonasRegiones } from "../catalogo/pages"
import { Principal } from "../../Principal"
import { CambiarContraseña } from "../log/CambiarContraseña"

export const AdminRoutes = () => {
  return (
      <>   
    <NavbarRadio/>

    <div className="container-fluid">
        <Routes>
            <Route path="principal" element={<Principal/>}/>
            <Route path="administracionUsuario" element={<Usuario/>}/>
            <Route path="administracionRoles" element={<Roles/>}/>
            <Route path="administracionPermisos" element={<Permisos/>}/>
            <Route path="administracionGruposPermisos" element={<GruposDePermisos/>}/>
            <Route path="administracionVisita" element={<RegistroDeVisita/>}/>
            <Route path="catalogoAccesorio" element={<Accesorios/>}/>
            <Route path="catalogoCorporacion" element={<Corporaciones/>}/>
            <Route path="catalogoEstatus" element={<Estatus/>}/>
            <Route path="catalogoMarca" element={<Marcas/>}/>
            <Route path="catalogoPuesto" element={<Puestos/>}/>
            <Route path="catalogoRadio" element={<Radios/>}/>
            <Route path="catalogoRecurso" element={<RecursoCompras/>}/>
            <Route path="catalogoServicio" element={<Servicios/>}/>
            <Route path="catalogoTipos" element={<Tipos/>}/>
            <Route path="catalogoUsuarios" element={<Usuarios/>}/>
            <Route path="catalogoVehiculos" element={<Vehiculos/>}/>
            <Route path="catalogoZonasRegiones" element={<ZonasRegiones/>}/>  
            <Route path="utilidadesAsignaciones" element={<Asignaciones/>}/>
            <Route path="utilidadesConfigReportes" element={<ConfiguracionDeReportes/>}/>
            <Route path="utilidadesHistorialEntradas" element={<HistorialDeEntradas/>}/>
            <Route path="utilidadesHojaServicio" element={<HojaDeServicio/>}/>
            <Route path="updatePwd" element={<CambiarContraseña/>}/>
            <Route path="/" element={<Navigate to="/principal"/>} />
        </Routes>
        </div>
    </>  
  )
}