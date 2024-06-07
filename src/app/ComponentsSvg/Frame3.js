import React from 'react';
import { useSelector } from 'react-redux';

const Frame3 = () => {
    const textImage = useSelector((state) => state.qrCode.textImage);
    const x = useSelector((state) => state.qrCode.x);
    const y = useSelector((state) => state.qrCode.y);
    const color = useSelector((state) => state.qrCode.color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 270 344"
            width={290}
            height={249}
            fill={color}
        >
            <defs>
                <style>
                    {`
            .cls-1 {
              font-size: 50px;
              fill: #fff;
              stroke: #000;
              stroke-miterlimit: 10;
              font-family: BarlowCondensed-Black, Barlow Condensed;
              font-weight: 800;
            }
          `}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M3.5,269.5a3,3,0,0,1-3-3V4.5a3,3,0,0,1,6,0v262A3,3,0,0,1,3.5,269.5Z" />
                    <path d="M3.5,2A2.5,2.5,0,0,1,6,4.5v262a2.5,2.5,0,0,1-5,0V4.5A2.5,2.5,0,0,1,3.5,2m0-1A3.5,3.5,0,0,0,0,4.5v262a3.5,3.5,0,0,0,7,0V4.5A3.5,3.5,0,0,0,3.5,1Z" />
                    <path d="M3.5,6.5a3,3,0,0,1,0-6h262a3,3,0,0,1,0,6Z" />
                    <path d="M265.5,1a2.5,2.5,0,0,1,0,5H3.5a2.5,2.5,0,0,1,0-5h262m0-1H3.5a3.5,3.5,0,0,0,0,7h262a3.5,3.5,0,0,0,0-7Z" />
                    <path d="M266.5,268.5a3,3,0,0,1-3-3V3.5a3,3,0,0,1,6,0v262A3,3,0,0,1,266.5,268.5Z" />
                    <path d="M266.5,1A2.5,2.5,0,0,1,269,3.5v262a2.5,2.5,0,0,1-5,0V3.5A2.5,2.5,0,0,1,266.5,1m0-1A3.51,3.51,0,0,0,263,3.5v262a3.5,3.5,0,0,0,7,0V3.5A3.51,3.51,0,0,0,266.5,0Z" />
                    <path d="M4.5,269.5a3,3,0,0,1,0-6h262a3,3,0,0,1,0,6Z" />
                    <path d="M266.5,264a2.5,2.5,0,0,1,0,5H4.5a2.5,2.5,0,0,1,0-5h262m0-1H4.5a3.5,3.5,0,0,0,0,7h262a3.5,3.5,0,0,0,0-7Z" />
                    <rect x="0.5" y="264.5" width="269" height="79" />
                    <path d="M269,265v78H1V265H269m1-1H0v80H270V264Z" />
                    <text className="cls-1" transform={`translate(${45 + x} ${322.67 + y})`}>
                        {textImage}
                    </text>
                </g>
            </g>
        </svg>
    );
};

export default Frame3;