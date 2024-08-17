'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, Container, InputAdornment, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Header from '../Components/Home/Header';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const router = useRouter();

  const userData = [{ email: 'truongdieuphat@gmail.com', password: 'Hth@123456!!' }];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userData[0].email && password === userData[0].password) {
      router.push('/Dashboard');
    } else {
      toast.error('Email hoặc mật khẩu không đúng.', {
        position: 'top-right',
        autoClose: 3000,
        transition: Flip,
      });
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        Cookies.set('google_token', tokenResponse.access_token, { expires: 7 });
        Cookies.set('google_user', JSON.stringify(res.data), { expires: 7 });
        console.log(res);
        router.push('/Dashboard');
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="w-full flex flex-col items-center justify-center h-screen bg-gray-100">
        <Header />
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
          <Typography variant="h6" component="h1" gutterBottom className="mb-4 flex items-center">
            <Image src="/logo-teca-icon.png" alt="logo" width={50} height={50} />
            <span className="h-8 inline-block mr-2 align-middle">TECA</span>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom className="mb-2 text-center">
            Welcome to Teca! 👋🏻
          </Typography>
          <Typography variant="body1" gutterBottom className="mb-4 text-center">
            Sign up now and try all features free for 14 days
          </Typography>
          <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col justify-center items-center">
            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size='small'
            />
            <TextField
              placeholder="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? 'text' : 'password'} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={()=>handleClickShowPassword()} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              
            />

            <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4 hover:bg-[#016597]" sx={{ backgroundColor: '#016597' }}>
              Login
            </Button>
            <div
              className="relative text-gray-500 text-sm mt-4 mb-2 pl-0 w-full flex items-center justify-center"
            >
              <span className="relative z-10 bg-[#fff] ">
                or
              </span>
              <span className="absolute inset-y-[10px] left-0 w-full border-t border-gray-300"></span>
            </div>
            <IconButton
              onClick={() => login()}
              className="mt-0 w-[30px] h-[30px] p-0"
              color='error'
            >
              <GoogleIcon />
            </IconButton>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;