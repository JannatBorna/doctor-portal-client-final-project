import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
       
    const [loginData, setLoginData ] = useState({});
    const { user, loginUser, authError, isLoading, signInWithGoogle} = useAuth();

    // login er por private page a jawa
    const location = useLocation();
    const history = useHistory();


       const handleOnChange = e => {
           const field = e.target.name;
           const value = e.target.value;
        //    console.log(field, value)
           const newLoginData = { ...loginData}
           newLoginData[field] = value;
           setLoginData(newLoginData);
       }
      
       const handleLoginSubmit = e => {
           loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
       }


       const handleGoogleSignIn = () => {
           signInWithGoogle(location, history)
       }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}}xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField 
                            sx={{width:'75%', m:1}}    id="standard-basic" label="Your Email"
                            name="email" 
                                onChange={handleOnChange}
                            variant="standard" />
                            
                            <TextField

                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                autoComplete="current-password"
                                variant="standard" />
                            

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>

                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? please Register</Button>
                            </NavLink>
                            
                    
                            {/* loading */}
                            {
                                isLoading && <CircularProgress
                                color="secondary" />
                            }

                            {/* register  successfully*/}
                            {
                                user?.email && <Alert severity="success">Login successfully!</Alert>
                            }

                            {/* error message */}

                            {
                                authError && <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {authError}
                                </Alert>
                            }
                       </form>
    <p>-----------------------------------------------</p>                
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
                
            </Grid>   
                       
           
        </Container>
    );
};

export default Login;