import { Route, Routes } from "react-router-dom"
import {AdminRoutes} from './AdminRoutes'
import { Login } from "../log/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const RouterApp = () => {
  return (
      <>  
    <Routes>
      
      <Route path="/login" element={
        <PublicRoute>
          <Login/>
        </PublicRoute>
      } />

      <Route path="/*" element={
              <PrivateRoute>
                <AdminRoutes/>
              </PrivateRoute>
       }
            />
            {/*<Route path="login" element={<Login/> } />*/}
            {/*<Route path="/*" element={<AdminRoutes/> } />*/}

    </Routes>
    </>
  )
}