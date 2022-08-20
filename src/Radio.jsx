import { RouterApp } from "./router/RouterApp"
import './navbar/styless.css';
import { AuthProvider } from "./log/context";
import { AppTheme } from "./theme";
export const Radio = () => {

 
  return (
      <>
      <div className="Radio" >
      <header className="Radio-header">
        <AuthProvider>
          <AppTheme>
            <RouterApp/>
          </AppTheme>
        </AuthProvider>
     </header>
     </div>
     </>
  )
}