import React from 'react';
import { useSelector } from 'react-redux';

const Frame5 = () => {
    const textImage = useSelector((state) => state.qrCode.textImage);
    const x = useSelector((state) => state.qrCode.x);
    const y = useSelector((state) => state.qrCode.y);
    const color = useSelector((state) => state.qrCode.color);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 333.18 341.76"
            width={245}
            height={249}
            fill={color}
        >
            <defs>
                <style>
                    {`
            .cls-1 {
              font-size: 50px;
              font-family: Caveat-Bold, Caveat;
              font-weight: 700;
            }
            .cls-2 {
              letter-spacing: -0.02em;
            }
          `}
                </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M66.68,269.5a3,3,0,0,1-3-3V4.5a3,3,0,1,1,6,0v262A3,3,0,0,1,66.68,269.5Z" />
                    <path d="M66.68,2a2.5,2.5,0,0,1,2.5,2.5v262a2.5,2.5,0,0,1-5,0V4.5A2.5,2.5,0,0,1,66.68,2m0-1a3.52,3.52,0,0,0-3.5,3.5v262a3.5,3.5,0,1,0,7,0V4.5A3.51,3.51,0,0,0,66.68,1Z" />
                    <path d="M66.68,6.5a3,3,0,0,1,0-6h262a3,3,0,0,1,0,6Z" />
                    <path d="M328.68,1a2.5,2.5,0,0,1,0,5h-262a2.5,2.5,0,0,1,0-5h262m0-1h-262a3.5,3.5,0,0,0,0,7h262a3.5,3.5,0,0,0,0-7Z" />
                    <path d="M329.68,268.5a3,3,0,0,1-3-3V3.5a3,3,0,0,1,6,0v262A3,3,0,0,1,329.68,268.5Z" />
                    <path d="M329.68,1a2.5,2.5,0,0,1,2.5,2.5v262a2.5,2.5,0,0,1-5,0V3.5a2.5,2.5,0,0,1,2.5-2.5m0-1a3.52,3.52,0,0,0-3.5,3.5v262a3.5,3.5,0,0,0,7,0V3.5a3.51,3.51,0,0,0-3.5-3.5Z" />
                    <path d="M67.68,269.5a3,3,0,0,1,0-6h262a3,3,0,1,1,0,6Z" />
                    <path d="M329.68,264a2.5,2.5,0,1,1,0,5h-262a2.5,2.5,0,0,1,0-5h262m0-1h-262a3.5,3.5,0,0,0,0,7h262a3.5,3.5,0,1,0,0-7Z" />
                    <path d="M44.27,115,39.36,161.1l-11.21-8.23a145.32,145.32,0,0,0-12,29.42A169.22,169.22,0,0,0,9.83,223a157.07,157.07,0,0,0,.59,20.81,139.87,139.87,0,0,0,3.44,20.63,109.27,109.27,0,0,0,17,38.42A111.47,111.47,0,0,1,9.42,265.76a143.09,143.09,0,0,1-5.87-20.95,164,164,0,0,1-3-21.64,180.26,180.26,0,0,1,2-43.95,159.49,159.49,0,0,1,10.91-37L1.92,133.88Z" />
                    <text
                        className="cls-1"
                        transform="translate(43.88 326.07) rotate(-5)"
                    >
                        <tspan className="cls-2"></tspan>
                        <tspan className='text-[65px]' x={`${27 + x}`} y={`${0 + y}`}>
                            {textImage}
                        </tspan>
                    </text>
                </g>
            </g>
        </svg>
    );
};

export default Frame5;