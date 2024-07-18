'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import * as React from 'react';
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <body className={inter.className}>
            {/* <Header /> */}
            {children}
            <ToastContainer toastStyle={{}} />
          </body>
        </Provider>
      </GoogleOAuthProvider>
    </html>
  );
}
