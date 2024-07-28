'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';
import { Box, TextField, Tab, Tabs, Typography } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import Header from '../Components/Header';

const Scan = () => {
    const [scanResult, setScanResult] = useState(null);
    const fileInputRef = useRef(null);
    const qrcodeRegionId = "html5qr-code-full-region";

    useEffect(() => {
        // Initialize the scanner when the component mounts
        const scanner = new Html5QrcodeScanner(
            qrcodeRegionId,
            { fps: 10, qrbox: { width: 250, height: 250, backgroundColor: '#FAFAFA' }, aspectRatio: { min: 1, max: 2 }, },
            false
        );

        scanner.render(onScanSuccess, onScanError);

        return () => {
            // Cleanup the scanner when the component unmounts
            scanner.clear().catch(error => {
                console.error('Failed to clear scanner. ', error);
            });
        };
    }, []);

    const onScanSuccess = (decodedText, decodedResult) => {
        // Handle on success condition with the decoded text or result.
        setScanResult(decodedText);
        // Optional: stop the scanning after success if required
        // scanner.stop().then((ignore) => { }).catch((err) => { });
    };

    const onScanError = (errorMessage) => {
        // handle on error condition, with error message
        console.error(errorMessage);
    };

    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const html5QrCode = new Html5Qrcode(qrcodeRegionId);
            try {
                const result = await html5QrCode.scanFile(file, true);
                setScanResult(result);
            } catch (err) {
                console.error('Error scanning file. ', err);
            }
        }
    };

    return (
        <div className='2xl:w-[1280px] w-[100%] min-h-screen max-h-[4000px] flex flex-col items-start p-[30px] pt-[100px] mx-auto'>
            <Header />
            <Typography variant="h4" gutterBottom>
                Quét mã QR Code Online
            </Typography>
            <div className='w-[100%] flex flex-col gap-10 mt-[30px] md:flex-row'>
                <div className='w-[100%] md:w-[50%]'>
                    <Box className='w-full border-b-[2px] border-gray'>
                        <Typography variant="h6" className='bg-[#FAFAFA] inline-block pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[17px] font-bold rounded-tl-[10px] rounded-tr-[10px] text-[#0891B4]'>
                            Quét mã từ ảnh hoặc từ camera
                        </Typography>
                    </Box>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                    />
                    <div
                        onDrop={(e) => {
                            e.preventDefault();
                            const file = e.dataTransfer.files[0];
                            if (file) {
                                const fileReader = new FileReader();
                                fileReader.onload = async () => {
                                    const html5QrCode = new Html5Qrcode(qrcodeRegionId);
                                    try {
                                        const result = await html5QrCode.scanFile(file, true);
                                        setScanResult(result);
                                    } catch (err) {
                                        console.error('Error scanning file. ', err);
                                    }
                                };
                                fileReader.readAsDataURL(file);
                            }
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onClick={() => fileInputRef.current.click()}
                        style={{
                            width: '100%',
                            height: '263px',
                            border: '2px dashed #cccccc',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            margin: '20px 0'
                        }}
                    >
                        <div id={qrcodeRegionId} style={{ width: "100%", height: "100%", position: 'absolute', top: 0, left: 0, zIndex: 2 }}></div>
                    </div>
                </div>
                {true &&
                    <Box className='w-[100%] md:w-[50%]'>
                        <Box className='w-full border-b-[2px] border-gray'>
                            <Typography variant="h6" className='bg-[#FAFAFA] inline-block pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-[17px] font-bold rounded-tl-[10px] rounded-tr-[10px] text-[#0891B4]'>
                                Kết quả quét QR Code ở đây
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                // p: 3,
                                border: '1px solid #e0e0e0',
                                borderRadius: '4px',
                                marginTop: '19px',
                                backgroundColor: '#fafafa',
                            }}
                        >
                            <TextField
                                fullWidth
                                multiline
                                rows={10}
                                value={scanResult}
                                variant="outlined"
                                placeholder="Nội dung mã qr code ở đây"
                            />
                        </Box>
                    </Box>
                }
            </div>
        </div>
    );
};

export default Scan;
