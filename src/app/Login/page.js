'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., API call for login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
        <Typography variant="h4" component="h1" gutterBottom className="mb-4">
          {/* <img src="" alt="" /> */}
          <span className="h-8 inline-block mr-2 align-middle" >QR Code Generator Logo</span>
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
          <FormControlLabel
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
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
            SIGN UP NOW
          </Button>
          <Button variant="outlined" fullWidth startIcon={<GoogleIcon />} className="mt-4">
            Sign up with a Google Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;