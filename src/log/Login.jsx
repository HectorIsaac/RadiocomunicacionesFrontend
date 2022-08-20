import { Button, Grid, TextField, } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./context";
import { AuthLayout } from "./layout/LogLayout";

export const Login = () => {

    const {login}= useContext(AuthContext)

   const navigate= useNavigate();
    const onLogin = ()=>{

      const lastpath = localStorage.getItem('lastPath') || '/';

      login('Hector Isaac');
        navigate(lastpath,{
            replace: true
        });
    }

  return (
    <AuthLayout title='login'>

    <form>

      <Grid container>
        <Grid item xs={12} sx={{mt: 2}}>
          <TextField 
            label="Usuario"
            type="text"
            placeholder="Usuario"
            fullWidth
           />
        </Grid>
        <Grid item xs={12} sx={{mt: 2}}>
          <TextField
            label="contraseña"
            type="password"
            placeholder="contraseña"
            fullWidth
          />
        </Grid>
        <Grid container spacing={2} sx={{mb: 2, mt:1}}>
          <Grid item xs={12} >
            <Button onClick={onLogin} variant='contained' fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
    </AuthLayout>
  )
}

