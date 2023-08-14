// NATIVE
import React, { useState } from 'react';


// INSTALLED
import Link from '@mui/material/Link';
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


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



import { useDispatch } from 'react-redux';


// CUSTOM
import { theme } from '../commons/theme';
import { CopyRight } from '../components';
import { startLoginWithEmailPassword } from '../store/auth';
import { ILoginWithEmailPassword } from '../commons/interfaces';
import { EmailValidator, PasswordValidator } from '../commons/utils/Validators';
import { Checkbox, Container, FormControlLabel } from '@mui/material';





export const Login1 = () => {


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
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      



        <Card sx={{
          marginTop: 7,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 500
        }}>

          <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
           <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar session
          </Typography>
          <Box component="form" onSubmit={onLoginPressed} noValidate sx={{ mt: 2, padding: 3 }}>
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
            sx={{ mt: 3, mb: 2 }}
            onClick={onLoginPressed}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                  Olvido contraseña?
              </Link>
            </Grid>
          </Grid>
        </Box>
        </Card>
        
      <CopyRight sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  )
}
