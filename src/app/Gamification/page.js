'use client';

import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import NameList from '../Components/Gamification/Gamification';

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white', textColor: 'black' } },
  { option: '2', style: { backgroundColor: 'blue', textColor: 'black' } },
];

const WheelLuckyDraw = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [Wheel, setWheel] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadWheel = async () => {
      try {
        const { Wheel } = await import('react-custom-roulette');
        setWheel(() => Wheel);
      } catch (error) {
        console.error('Failed to load the wheel component:', error);
      }
    };

    loadWheel();
  }, []);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <div className='flex flex-col justify-center items-center'>
        {Wheel ? (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
            onStopSpinning={() => {
              setMustSpin(false);
              setOpen(true);
            }}
            innerRadius={10}
            radiusLineColor={'#000000'}
            radiusLineWidth={2}
            fontSize={16}
            perpendicularText={false}
            textDistance={40}
            primaryColor={'#3e3e3e'}
            contrastColor={'#ffffff'}
            pointerProps={{src: 'https://cdn2.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'}}
          />
        ) : (
          <div>Loading...</div>
        )}
        <Button variant="contained" color="primary" onClick={handleSpinClick} className="mt-4">
          Spin
        </Button>
      </div>
      <NameList />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Congratulations!</DialogTitle>
        <DialogContent>
          You have won prize number {data[prizeNumber].option}!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WheelLuckyDraw;
