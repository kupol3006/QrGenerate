'use client';
import React from 'react';
import { Box, Typography, Button, TextField, Input } from '@mui/material';
import { QRCode } from 'react-qrcode-logo';
import html2canvas from 'html2canvas';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import jsPDF from 'jspdf'; // Import thư viện jsPDF
import Image from 'next/image';
import styled from '@mui/material/styles/styled';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DraftsIcon from '@mui/icons-material/Drafts';
import Frame6 from '../ComponentsSvg/Frame6';
import Frame1 from '../ComponentsSvg/Frame1';
import Frame5 from '../ComponentsSvg/Frame5';
import Frame3 from '../ComponentsSvg/Frame3';
import Frame4 from '../ComponentsSvg/Frame4';
import Frame2 from '../ComponentsSvg/Frame2';
import { updateImageObject, setTextImage, setX, setY, setShape, setColor } from '../redux/slices/qrCodeSlice';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { height, width } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: 0,
    boxShadow: 'none',
    '&:first-of-type': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    '&:last-of-type': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
}));

function QrCode() {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState(null);
    const text = useSelector((state) => state.qrCode.text);
    const imageObject = useSelector((state) => state.qrCode.imageObject);
    const textImage = useSelector((state) => state.qrCode.textImage);
    const x = useSelector((state) => state.qrCode.x);
    const y = useSelector((state) => state.qrCode.y);
    const shape = useSelector((state) => state.qrCode.shape);
    const color = useSelector((state) => state.qrCode.color);

    const imageArray = [{ id: 0, src: '/frame0.svg', alt: 'QR Code' }, { id: 1, src: '/frame1.svg', alt: 'QR Code' }, { id: 2, src: '/frame2.svg', alt: 'QR Code' }, { id: 3, src: '/frame3.svg', alt: 'QR Code' }, { id: 4, src: '/frame4.svg', alt: 'QR Code' }, { id: 5, src: '/frame5.svg', alt: 'QR Code' }, { id: 6, src: '/frame6.svg', alt: 'QR Code' }];
    const qrStyleArray = [{ id: 0, style: 'squares', src: '/frame0.svg' }, { id: 1, style: 'squares', src: '/square.svg' }, { id: 1, style: 'dots', src: '/dots.svg' }, { id: 3, style: 'fluid', src: '/fluid.svg' }]
    const colorArray = [{ id: 0, color: '#000000' }, { id: 1, color: '#F47373' }, { id: 2, color: '#697689' }, { id: 3, color: '#37D67A' }, { id: 4, color: '#2CCCE4' }, { id: 5, color: '#555555' }, { id: 6, color: '#DCE775' }, { id: 7, color: '#FF8A65' }, { id: 8, color: '#BA68C8' }]
    const sizeCanvasArray = [
        { id: 1, name: 'Bình thường', scale: 1, width: 100, height: 100 },
        { id: 2, name: 'Trung bình', scale: 2, width: 50, height: 50 },
        { id: 3, name: 'Lớn', scale: 5, width: 0, height: 0 },
    ];
    const [sizeCanvas, setSizeCanvas] = useState(sizeCanvasArray[0]);

    const captureAndDownload = async () => {
        try {
            const element = inputRef.current;
            const elementWidth = element.offsetWidth;
            const elementHeight = element.offsetHeight;
            const canvasWidth = 400;  // Chiều rộng mong muốn của canvas
            const canvasHeight = 300; // Chiều cao mong muốn của canvas
            const canvas = await html2canvas(inputRef.current, {
                width: canvasWidth,
                height: canvasHeight,
                x: (elementWidth - canvasWidth) / 2,
                y: (elementHeight - canvasHeight) / 2,
                scale: sizeCanvas.scale,
            });
            const dataURL = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'captured-image.png';
            link.click();
            console.log(canvas);
        } catch (error) {
            console.error('Error capturing image:', error);
            // Xử lý lỗi (ví dụ: hiển thị thông báo cho người dùng)
        }
    };
    const downloadPDF = async () => {
        try {
            const canvas = await html2canvas(inputRef.current);
            const imgData = canvas.toDataURL('image/png');

            const doc = new jsPDF();
            const imgProps = doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = doc.internal.pageSize.getHeight();
            const imgWidth = pdfWidth - sizeCanvas.width;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;

            doc.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
            doc.save('qr-code.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
            // Xử lý lỗi (ví dụ: hiển thị thông báo cho người dùng)
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown1, setIsDropdown1] = useState(false);
    const [isDropdown2, setIsDropdown2] = useState(false);
    const [isDropdown3, setIsDropdown3] = useState(false);
    const [isDropdown4, setIsDropdown4] = useState(false);

    const contentRef = useRef(null);

    const toggleDropdown = (value) => {
        if (value === 'frame') {
            setIsOpen(!isOpen);
        } else if (value === 'shape') {
            setIsDropdown1(!isDropdown1);
        } else if (value === 'color') {
            setIsDropdown2(!isDropdown2);
        }
        else if (value === 'logo') {
            setIsDropdown3(!isDropdown3);
        } else {
            setIsDropdown4(!isDropdown4);
        }
    };

    const handleSelectFrame = (item) => {
        dispatch(updateImageObject(item));
    };
    const handleSelectShape = (item) => {
        dispatch(setShape(item));
    };
    const handleSelectColor = (item) => {
        dispatch(setColor(item.color));
    }

    const [inputText, setInputText] = useState('');
    const [inputColor, setInputColor] = useState('');

    const handleChangeTextImage = (event) => {
        setInputText(event.target.value);
        dispatch(setTextImage(event.target.value));
    };
    const handleChangeColor = (event) => {
        setInputColor(event.target.value);
        dispatch(setColor(event.target.value));
    };
    const handleSetX = (value) => {
        if (value === 'left') {
            let a = x - 1;
            dispatch(setX(a));
        } else {
            let a = x + 1;
            dispatch(setX(a));
        }
    };
    const handleSetY = (value) => {
        if (value === 'up') {
            let a = y - 1;
            dispatch(setY(a));
        } else {
            let a = y + 1;
            dispatch(setY(a));
        }
    };
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    return (
        <div className='flex flex-col items-center justify-center'>
            <Typography variant="h5" align="center" fontWeight={'bold'} margin={'10px 10px 2px 10px'}>
                Mã QR code của bạn!
            </Typography>
            <div ref={inputRef} className='w-[300px] h-[310px] overflow-hidden'>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div className=" w-[100%] h-[100%] relative mx-auto text-center">
                        {/* <div className="w-[190px] h-[240px] relative bg-[#fff] rounded-md border border-black">
                            <div className="w-full h-9 bg-black absolute bottom-0"></div>
                        </div>
                        <div className="relative">
                            <Box className='w-[190px] h-[190px]'></Box>
                            <div className="absolute top-0 left-0 border-t-[4px] border-l-[4px] border-black w-16 h-16"></div>
                            <div className="absolute bottom-0 right-0 border-b-[4px] border-r-[4px] border-black w-16 h-16"></div>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 border-[4px] border-black w-[190px] h-[193px]"></div>
                        </div>
                        <div className="w-[190px] h-[240px] relative bg-[#fff] border-t border-l border-r border-black overflow-hidden">
                            <div className="w-full h-[50px] bg-black absolute bottom-0"></div>
                            <div className='w-full h-[20px] rounded-tr-[1000%] rounded-tl-[1000%] absolute bottom-[-5%] bg-[#fff] '></div>
                        </div>

                        <div className="w-full h-[240px] relative bg-[#fff] border border-black">
                            <div className="absolute top-0 left-1 border-[4px] border-black w-[195px] h-32"></div>
                            <DraftsIcon fontSize='large' sx={{ width: '295px', height: '280px', position: 'absolute', bottom: -50, right: -10 }} />
                        </div> */}
                        {imageObject.id === 0 && <div></div>}
                        {imageObject.id === 1 && <Frame1 />}
                        {imageObject.id === 2 && <Frame2 />}
                        {imageObject.id === 3 && <Frame3 />}
                        {imageObject.id === 4 && <Frame4 />}
                        {imageObject.id === 5 && <Frame5 />}
                        {imageObject.id === 6 && <Frame6 />}
                        <QRCode value={text} style={{ position: 'absolute', top: 6, left: 53, zIndex: 1 }} bgColor="#ffffff" fgColor={color}
                            qrStyle={shape.style}
                            logoImage={file && URL.createObjectURL(file)}
                            logoHeight={50}
                            logoWidth={50}
                            size={162}
                        />
                        {/* <Typography variant="h5" align="center" fontWeight={'bold'} position={'absolute'} zIndex={0} color={'#fff'} sx={{ bottom: 5, left: 45 }}>Scan me</Typography> */}
                    </div>
                </Box>


            </div>
            <div style={{ display: 'flex', borderRadius: 4, overflow: 'hidden', marginTop: '7px' }}>
                <StyledButton
                    variant="contained"
                    color="success"
                    onClick={captureAndDownload}
                    startIcon={<ImageIcon />}
                    style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                >
                    PNG
                </StyledButton>
                <StyledButton
                    variant="contained"
                    color="error"
                    onClick={downloadPDF}
                    startIcon={<PictureAsPdfIcon />}
                    style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                    PDF
                </StyledButton>
            </div>
            <div className='w-[90%] rounded-[7px] overflow-hidden mt-[10px] mb-[8px]'>
                <div className="w-full bg-[#7DD3FC] p-[10px] cursor-pointer">
                    <div className="flex items-center justify-between" onClick={() => toggleDropdown('frame')}>
                        <h2 className="text-[15px] font-bold">Khung</h2>
                        {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">Mới</span> */}
                        {isOpen ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </div>
                    <div
                        ref={contentRef}
                        className={`transition-all  overflow-hidden ${isOpen ? 'max-h-[254px] duration-[1000ms]' : 'max-h-0 duration-[1000ms]'}`}
                        style={{ transitionProperty: 'max-height' }}
                    >
                        <div className="mt-4">
                            <div className="flex space-x-2">
                                {imageArray.map((item, index) => (
                                    <div key={index} className="w-[36px] h-[36px] flex items-center justify-center border-[2px] hover:border-[#0284C7] border-white cursor-pointer"
                                        onClick={() => handleSelectFrame(item)}
                                        style={imageObject.id === item.id ? { border: '2px solid #0284C7' } : { border: '2px solid #fff' }}
                                    >
                                        <Image src={item.src} alt="QR Code" width={24} height={24} className='w-6 h-6' />
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className={`transition-all  overflow-hidden ${imageObject.id >= 3 ? 'max-h-screen duration-[1000ms]' : 'max-h-0 duration-[1000ms]'}`}>
                            <div className="mt-4">
                                <div className="flex flex-col space-x-2">
                                    <h2 className="text-[15px] font-bold">Thay đổi chữ</h2>
                                    <TextField
                                        placeholder='Nhập văn bản thay thế'
                                        variant="outlined"
                                        sx={{
                                            width: '280px',
                                            marginTop: '5px',
                                            backgroundColor: '#fff',
                                            borderRadius: '5px',
                                            overflow: 'hidden',
                                            '& .MuiOutlinedInput-root': {
                                                padding: '8px 12px', // Adjust padding as needed
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                padding: 0, // Remove default padding for the input
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: 'none', // Remove the default border
                                            },
                                        }}
                                        value={inputText}
                                        onChange={handleChangeTextImage}
                                        size='small'
                                    // margin="normal"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className=" flex flex-col space-y-1">
                                    <h2 className="text-[15px] font-bold start-0">Tuỳ chỉnh vị trí</h2>
                                    <div className='w-[200px] h-[68px] grid grid-cols-3 grid-rows-2 gap-1 m-auto'>
                                        <Button
                                            variant='contained'
                                            color='success'
                                            className='w-[44px] h-full bg-[#0E9F6E] row-span-2'
                                            onClick={() => handleSetX('left')}
                                        >
                                            <ArrowLeftIcon />
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='success'
                                            className='w-[44px] h-full bg-[#0E9F6E]'
                                            onClick={() => handleSetY('up')}
                                        >
                                            <ArrowUpwardIcon />
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='success'
                                            className='w-[44px] h-full bg-[#0E9F6E] row-span-2'
                                            onClick={() => handleSetX('right')}
                                        >
                                            <ArrowRightIcon />
                                        </Button>
                                        <Button
                                            variant='contained'
                                            color='success'
                                            className='w-[44px] h-full bg-[#0E9F6E]'
                                            onClick={() => handleSetY('down')}
                                        >
                                            <ArrowDownwardIcon />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#CBD5E1] p-[10px] cursor-pointer mt-[1px]">
                    <div className="flex items-center justify-between" onClick={() => toggleDropdown('shape')}>
                        <h2 className="text-[15px] font-bold">Hình dạng</h2>
                        {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">Mới</span> */}
                        {isDropdown1 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </div>
                    <div
                        ref={contentRef}
                        className={`transition-all  overflow-hidden ${isDropdown1 ? 'max-h-[254px] duration-[1000ms]' : 'max-h-0 duration-[1000ms]'}`}
                        style={{ transitionProperty: 'max-height' }}
                    >
                        <div className="mt-4">
                            <div className="flex space-x-2">
                                {qrStyleArray.map((item, index) => (
                                    <div key={index} className="w-[36px] h-[36px] flex items-center justify-center border-[2px] hover:border-[#0284C7] border-white cursor-pointer"
                                        onClick={() => handleSelectShape(item)}
                                        style={qrStyleArray.id === item.id ? { border: '2px solid #0284C7' } : { border: '2px solid #fff' }}
                                    >
                                        <Image src={item.src} alt="QR Code" width={24} height={24} className='w-6 h-6' />
                                    </div>
                                ))}

                            </div>
                        </div>


                    </div>
                </div>
                <div className="w-full bg-[#CBD5E1] p-[10px] cursor-pointer mt-[1px]">
                    <div className="flex items-center justify-between" onClick={() => toggleDropdown('color')}>
                        <h2 className="text-[15px] font-bold">Màu sắc</h2>
                        {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">Mới</span> */}
                        {isDropdown2 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </div>
                    <div
                        ref={contentRef}
                        className={`transition-all  overflow-hidden ${isDropdown2 ? 'max-h-[254px] duration-[1000ms]' : 'max-h-0 duration-[1000ms]'}`}
                        style={{ transitionProperty: 'max-height' }}
                    >
                        <div className="mt-4">
                            <div className="flex space-x-2">
                                {colorArray.map((item, index) => (
                                    <div key={index} className="w-[28px] h-[28px] flex items-center justify-center border-[1.5px] border-white cursor-pointer rounded-[3px]"
                                        onClick={() => handleSelectColor(item)}
                                        style={{ backgroundColor: item.color }}
                                    >
                                    </div>
                                ))}

                            </div>
                            <div className='mt-1 flex items-end gap-2'>
                                <h2 className="text-[15px] font-semibold">Tùy chỉnh màu</h2>
                                <TextField
                                    placeholder='#000000'
                                    variant="outlined"
                                    size='small'
                                    sx={{
                                        width: '100px',
                                        marginTop: '5px',
                                        backgroundColor: '#fff',
                                        borderRadius: '5px',
                                        overflow: 'hidden',
                                        '& .MuiOutlinedInput-root': {
                                            padding: '2px 8px', // Adjust padding as needed
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: 0, // Remove default padding for the input
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Remove the default border
                                        },
                                    }}
                                    value={inputColor}
                                    onChange={handleChangeColor}
                                    onClick={() => dispatch(setColor('black'))}
                                // margin="normal"
                                />
                            </div>
                        </div>


                    </div>
                </div>
                <div className="w-full bg-[#CBD5E1] p-[10px] cursor-pointer mt-[1px]">
                    <div className="flex items-center justify-between" onClick={() => toggleDropdown('logo')}>
                        <h2 className="text-[15px] font-bold">Logo</h2>
                        {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">Mới</span> */}
                        {isDropdown3 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </div>
                    <div
                        ref={contentRef}
                        className={`transition-all  overflow-hidden ${isDropdown3 ? 'max-h-[254px] duration-[1000ms]' : 'max-h-0 duration-[1000ms]'}`}
                        style={{ transitionProperty: 'max-height' }}
                    >
                        <div className="mt-4">
                            <div className="flex space-x-2">
                                <div>
                                    <Input
                                        accept="image/*"
                                        id="upload-file"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="upload-file">
                                        <Button
                                            variant="contained"
                                            component="span"
                                            size='small'
                                            sx={{  // Use the 'sx' prop for styling
                                                width: '200px',
                                                background: 'linear-gradient(to right, #2980b9, #27ae60)',
                                                borderRadius: '5px',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                                // padding: '10px 20px',
                                                '&:hover': {
                                                    backgroundColor: 'darkgray',
                                                    transition: 'background-color 0.3s ease',
                                                },
                                            }}
                                        >
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" fontSize={'14px'}>
                                                <path d="M7 9h2v-4h3l-4-4-4 4h3zM10 6.75v1.542l4.579 1.708-6.579 2.453-6.579-2.453 4.579-1.708v-1.542l-6 2.25v4l8 3 8-3v-4z"></path>
                                            </svg>
                                            {file ? 'Thay đổi logo' : 'Tải lên logo của bạn'}
                                        </Button>

                                    </label>
                                    <Button
                                        variant="contained"
                                        color='error'
                                        component="span"
                                        size='small'
                                        sx={{  // Use the 'sx' prop for styling
                                            width: '200px',
                                            display: file ? 'flex' : 'none',
                                            borderRadius: '5px',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '12px',
                                            // padding: '10px 20px',

                                        }}
                                        onClick={() => setFile(null)}
                                    >
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="mr-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path> </svg>
                                        Xóa logo
                                    </Button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className="w-full bg-[#CBD5E1] p-[10px] cursor-pointer mt-[1px]">
                    <div className="flex items-center justify-between" onClick={() => toggleDropdown('size')}>
                        <h2 className="text-[15px] font-bold">Kích thước</h2>
                        {/* <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">Mới</span> */}
                        {isDropdown4 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    </div>
                    <div
                        ref={contentRef}
                        className={`transition-all  overflow-hidden ${isDropdown4 ? 'max-h-[254px] duration-[1000ms]' : 'max-h-0 duration-[1000ms]'}`}
                        style={{ transitionProperty: 'max-height' }}
                    >
                        <div className="mt-4">
                            <div className="flex space-x-2">
                                <div>
                                    {sizeCanvasArray.map((item, index) => (
                                        <Button
                                            key={index}
                                            variant="contained"
                                            color={sizeCanvas.id === item.id ? 'error' : 'primary'}
                                            component="span"
                                            size='small'
                                            sx={{  // Use the 'sx' prop for styling
                                                // width: '200px',
                                                borderRadius: '5px',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '12px',
                                                // padding: '10px 20px',
                                                border: '1px solid #fff',
                                                ":hover": {
                                                    border: '1px solid #CF2E2E',
                                                    transition: 'background-color 0.3s ease',
                                                }
                                            }}
                                            onClick={() => setSizeCanvas(item)}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            {/* {imageUrl && <img src={imageUrl} alt="Captured Image" />} */}

        </div>
    );
}

export default QrCode;