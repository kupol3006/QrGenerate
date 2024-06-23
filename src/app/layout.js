'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import * as React from 'react';
import Header from "./Components/Header";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <Header />
          {children}
          {/* <ToastContainer toastStyle={{}} /> */}
        </body>
      </Provider>
    </html>
  );
}
