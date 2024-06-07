// components/CustomSVG.js
import { useSelector } from 'react-redux';
import React from 'react';

const Frame6 = () => {
    const textImage = useSelector((state) => state.qrCode.textImage);
    const x = useSelector((state) => state.qrCode.x);
    const y = useSelector((state) => state.qrCode.y);
    const color = useSelector((state) => state.qrCode.color);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 354.24" width="290"
            height="300" fill={color}>
            <defs>
                <style>
                    {`
            .cls-1 { fill: #262626; }
            .cls-2, .cls-3 { fill: #fff; }
            .cls-3 { font-size: 54.25px; font-family: BarlowCondensed-Black, Barlow Condensed; font-weight: 800; }
          `}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M243.82,0H26.25A6.85,6.85,0,0,0,19.4,6.85v267.5a6.85,6.85,0,0,0,6.85,6.85H243.82a6.85,6.85,0,0,0,6.85-6.85V6.85A6.85,6.85,0,0,0,243.82,0Zm-2.23,222.08H28.69a.31.31,0,0,1-.31-.31V8.87a.31.31,0,0,1,.31-.31h212.9a.31.31,0,0,1,.31.31v212.9A.31.31,0,0,1,241.59,222.08Z" />
                    <path className="cls-1" d="M136.39,118.32a2.31,2.31,0,0,0-2.78,0L0,218.29H.07v89H270v-89Z" />
                    <path className="cls-2" d="M243.35,1H26.71a6.5,6.5,0,0,0-6.49,6.49V273.71a6.5,6.5,0,0,0,6.49,6.49H243.35a6.49,6.49,0,0,0,6.49-6.49V7.49A6.49,6.49,0,0,0,243.35,1Zm-2.21,220.5h-212V9.5h212Z" />
                    <path d="M163.46,272.65l-19.09-14.52a15.48,15.48,0,0,0-18.74,0l-19.09,14.52L6.93,215.1a4.62,4.62,0,0,0-6.93,4V354.24H270V219.85a5.06,5.06,0,0,0-7.58-4.38Z" />
                    <text className="cls-3" transform={`translate(${39 + (x || 0)} ${333.95 + (y || 0)})`}>{textImage}</text>
                    <path id="Vien_la_thu" data-name="Vien la thu" className="cls-2" d="M129.64,256.65a8.9,8.9,0,0,1,10.26,0l50.23,35.55-50-38a8.87,8.87,0,0,0-10.75,0L80,291.8Z" />
                </g>
            </g>
        </svg>
    )
};

export default Frame6;