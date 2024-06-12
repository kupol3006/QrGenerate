'use client';
import React, { useState } from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full text-center">
        <Typography variant="h4" component="h1" gutterBottom className="mb-4 flex items-center justify-center">
          <img src="/qr-code-generator-logo.svg" alt="QR Code Generator Logo" className="h-8 mr-2" />
          <span className="text-blue-500 font-bold text-lg">PRO</span>
        </Typography>
        <Typography variant="body1" className="mb-4">
          No account yet?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
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
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
              />
            }
            label="Keep me signed in"
            className="text-sm text-gray-600 ml-[-1rem]" // Adjust spacing
          />
          <Link href="/forgot-password" className="text-blue-500 hover:underline text-right mb-4">
            Forgot password?
          </Link>
          <Button type="submit" variant="contained" color="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            LOG IN
          </Button>
        </form>
        <Typography variant="body2" className="mt-4 text-gray-600">
          or
        </Typography>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          className="mt-4 border border-gray-300 text-gray-600 hover:bg-gray-100 py-2 px-4 rounded"
        >
          Sign in with a Google Account
        </Button>
        <div className="mt-6 text-gray-600">
          English
          <span className="ml-2">▼</span> {/* Dropdown icon */}
        </div>
      </div>
    </div>
  );
};

export default Login;