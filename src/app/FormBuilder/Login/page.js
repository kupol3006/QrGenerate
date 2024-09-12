'use client';
import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { loginGoogleEndUserAsync } from '../../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log(tokenResponse.access_token);
        const isSuccess = await dispatch(loginGoogleEndUserAsync(tokenResponse.access_token));
        if (isSuccess) {
          // Lấy URL gốc từ localStorage
          const redirectUrl = localStorage.getItem('redirectUrl');
          if (redirectUrl) {
            router.push(redirectUrl);
            localStorage.removeItem('redirectUrl'); // Xóa URL sau khi sử dụng
          } 
          
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Box className='w-full h-screen flex justify-center items-center'>
        <Box
            sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: 'auto',
            backgroundColor: '#fff',
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 500 }}>
            Sign in
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '24px', color: '#5F6368' }}>
            to continue to Form Builder
            </Typography>
            <Button
                onClick={login}
                variant="outlined"
                startIcon={
                    <img
                        src="https://img.clerk.com/static/google.svg?width=80"
                        alt="Google logo"
                        style={{ width: '20px', height: '20px' }} // Adjust the size to fit the button
                    />
                }
                sx={{
                    textTransform: 'none',
                    color: '#5F6368',
                    borderColor: '#DADCE0',
                    fontWeight: 500,
                    padding: '6px 24px',
                    borderRadius: '8px',
                    width: '100%', // Make the button full width
                    justifyContent: 'center',
                    '&:hover': {
                    backgroundColor: '#F5F5F5',
                    borderColor: '#DADCE0',
                    },
                }}
                fullWidth
            >
                Continue with Google
            </Button>
        </Box>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default Login;
