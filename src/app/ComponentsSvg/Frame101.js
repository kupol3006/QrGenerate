import React from 'react';
import { useSelector } from 'react-redux';

const Frame101 = () => {
    const color = useSelector((state) => state.qrCode.color);
    return (
        <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1169 1654"
            fill={color}
        >
            <defs>
                <style>
                    {`
            .cls-1, .cls-2 {
              stroke-width: 0px;
            }
            .cls-3 {
              font-family: UTM-Impact, 'UTM Impact';
              font-size: 108.87px;
            }
            .cls-2 {
              fill: #fff;
            }
          `}
                </style>
            </defs>
            <g id="Layer_2-2" data-name="Layer 2">
                <g>
                    <rect className="cls-2" x="25" y="25" width="1119" height="1604" />
                    <path
                        className="cls-1"
                        d="m1119,50v1554H50V50h1069M1159.69,0H9.31C4.17,0,0,4.17,0,9.31v1635.38c0,5.14,4.17,9.31,9.31,9.31h1150.38c5.14,0,9.31-4.17,9.31-9.31V9.31c0-5.14-4.17-9.31-9.31-9.31h0Z"
                    />
                </g>
                <text className="cls-3" transform="translate(372.34 198.38)">
                    <tspan x="0" y="0">
                        Cửa hàng
                    </tspan>
                </text>
            </g>
        </svg>
    );
};

export default Frame101;