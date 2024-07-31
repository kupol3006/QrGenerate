'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Header from '../Components/Home/Header';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        console.log(res); // or do something with the response
        router.push('/Dashboard');
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });
  // const login = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  //   onError: () => console.error('Login failed'),
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here, e.g., API call for login
  // };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Header />
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
          <Typography variant="h4" component="h1" gutterBottom className="mb-4">
            <span className="h-8 inline-block mr-2 align-middle">QR Code Generator Logo</span>
            <span className="text-blue-500 font-bold text-lg">PRO</span>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom className="mb-2 text-center">
            Create, Manage and Track
          </Typography>
          <Typography variant="h3" component="h3" gutterBottom className="mb-4 text-center text-2xl font-bold">
            all your QR Codes in one
          </Typography>
          <Typography variant="body1" gutterBottom className="mb-4 text-center">
            Sign up now and try all features free for 14 days
          </Typography>
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              placeholder="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <FormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
              }
              label={
                <Typography variant="body2">
                  I agree with the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>,{' '}
                  <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>,{' '}
                  <a href="#" className="text-blue-500 hover:underline">Acceptable Use Policy</a> and{' '}
                  <a href="#" className="text-blue-500 hover:underline">Data Processing Agreement</a>.
                </Typography>
              }
            /> */}
            <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4" >
              Login
            </Button>
            <Button
              onClick={() => login()}
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              className="mt-4 w-full"
              sx={{ width: 384 }}
            >
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;