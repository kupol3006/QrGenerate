// src/pages/index.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import {
    Container,
    Typography,
    Button,
    TextField,
    Box,
} from '@mui/material';
import CopyToClipboard from 'react-copy-to-clipboard';
import confetti from 'canvas-confetti';
import { QRCode } from 'react-qrcode-logo';
import Link from 'next/link';

const HomePage = () => {
    const [formPublished, setFormPublished] = useState(false);
    const confettiCanvas = useRef(null);
    const [isCanvasMounted, setIsCanvasMounted] = useState(true);

    useEffect(() => {
        const myConfetti = confetti.create(confettiCanvas.current, {
            resize: true,
            useWorker: true,
        });
        myConfetti({
            particleCount: 300,
            spread: 160,
            origin: { y: 0 },

        });
        setTimeout(() => setIsCanvasMounted(false), 3000);
        // Clean up the confetti instance when the component unmounts
        return () => myConfetti.reset();

    }, []);

    const handlePublishForm = () => {
        // Logic to publish your form, e.g., make an API call.
        // For this example, we'll just toggle the state.
        setFormPublished(true);
    };

    const [copied, setCopied] = useState(false);
    const formUrl = 'https://example.com/form-url';

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className='w-full h-screen'>
            {isCanvasMounted && <canvas ref={confettiCanvas} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', zIndex: 0 }} />}
            {/* <Head>
                <title>PageForm - Create Beautiful Forms</title>
            </Head> */}
            <Container  >
                {true ? (
                    <>
                        {/* Show confetti when the form is published */}
                        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                            <div className=" rounded-lg shadow-md p-8 text-center">
                                <div className="flex items-center justify-center mb-0 py-4 border-b-[2px]">
                                    <span role="img" aria-label="party" className="text-5xl mr-2">
                                        🎊🎊
                                    </span>
                                    <h2 className="text-4xl font-bold">Form Published</h2>
                                    <span role="img" aria-label="party" className="text-5xl ml-2">
                                        🎊🎊
                                    </span>
                                </div>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                                    className="py-7 px-0 border-b-[2px]  mb-4"
                                >
                                    <Typography variant="h5" sx={{ marginBottom: 1 }}>
                                        Share this form
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Anyone with the link can view and submit the form
                                    </Typography>
                                    {/* Thêm phần nhập liên kết hoặc nút sao chép liên kết tại đây */}
                                </Box>
                                <div className="mb-4 flex flex-col items-center gap-2">
                                    <QRCode value={formUrl} bgColor="#ffffff"
                                        qrStyle={'squares'}
                                        // logoImage={file && URL.createObjectURL(file)}
                                        logoHeight={50}
                                        logoWidth={50}
                                        size={162}
                                    />
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        value={formUrl}
                                        readOnly
                                    />
                                </div>
                                <CopyToClipboard text={formUrl} onCopy={handleCopy}>
                                    <button
                                        className={`w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out ${copied ? 'bg-green-600' : ''
                                            }`}
                                    >
                                        {copied ? 'Copied!' : 'Copy link'}
                                    </button>
                                </CopyToClipboard>

                                <div className="flex items-center justify-between mt-8">
                                    <Link href="/" className="text-black hover:underline">
                                        {'<-'} Go back home
                                    </Link>
                                    <Link href="/" className="text-black hover:underline">
                                        Form details {'->'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        {/* <Typography variant="h3" gutterBottom>
                            Create Your Form
                        </Typography> */}
                        {/* ... your form creation UI here ... */}
                        {/* <Button
                            variant="contained"
                            color="primary"
                            onClick={handlePublishForm}
                        >
                            Publish Form
                        </Button> */}
                    </div>
                )}
            </Container>
        </div>
    );
};

export default HomePage;