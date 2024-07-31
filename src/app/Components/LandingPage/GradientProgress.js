import React, { useState, useEffect } from 'react';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const AutoRotatingCircularProgress = () => {
    return (
        // <GradientCircularProgress variant="indeterminate" size={100} thickness={5} />
        <>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e01cd5" />
                        <stop offset="100%" stopColor="#1CB5E0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} size={70} />
        </>
    );
};

export default AutoRotatingCircularProgress;