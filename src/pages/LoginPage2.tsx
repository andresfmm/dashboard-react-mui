// NATIVE
import React, { useState } from 'react';


// INSTALLED
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useDispatch } from 'react-redux';


// CUSTOM
import { theme } from '../commons/theme';
import { CopyRight } from '../components';
import { startLoginWithEmailPassword } from '../store/auth';
import { ILoginWithEmailPassword } from '../commons/interfaces';
import { EmailValidator, PasswordValidator } from '../commons/utils/Validators';





export const LoginPage2 = () => {


  const dispatch = useDispatch();

  // FORMS
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  
  const onLoginPressed = async(event:any) => { 

    event.preventDefault();
    
    const emailError = EmailValidator(email.value);
    const passwordError = PasswordValidator(password.value);


    if (emailError || passwordError) {

      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;

    }


    const data_login:ILoginWithEmailPassword = {
      email: email.value,
      password: password.value
    }

    const response = await dispatch( startLoginWithEmailPassword(data_login) );

    if( response && !response.ok ){
        setEmail({ ...email, error: response.message });
        setPassword({ ...password, error: response.message });
    }

  }

  

  return (
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: `url(${"assets/images/spa-login.jpg"})`,
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ingresa tus datos de acceso
            </Typography>
            <Box component="form" noValidate onSubmit={onLoginPressed} sx={{ mt: 1 }}>
              <TextField
                error={!!email.error}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                color='secondary'
                helperText={email.error}
                value={email.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail({ value: event.target.value, error: '' })
                }}
              />
              <TextField
                error={!!password.error}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color='secondary'
                helperText={password.error}
                value={password.value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword({ value: event.target.value, error: '' })
                }}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={onLoginPressed}
              >
                Iniciar session
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
              <CopyRight sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
