'use client';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import NameList from '../Components/Gamification/Gamification';
import { DeviceFrameset } from 'react-device-frameset'
// import 'react-device-frameset/styles/marvel-devices.min.css'
// import { Wheel } from 'react-custom-roulette';

const WheelLuckyDraw = () => {
  const [names, setNames] = useState([
    {
      option: "Ali",
      image: { uri: "https://via.placeholder.com/50", offsetX: 0, offsetY: 0, sizeMultiplier: 1, landscape: false },
      style: { borderRadius: "50%"  },
      optionSize: 14,
    },
    {
      option: "Beatriz",
      image: { uri: "https://via.placeholder.com/50", offsetX: 0, offsetY: 0, sizeMultiplier: 1, landscape: false },
      style: { borderRadius: "50%" },
      optionSize: 14,
    },
  ]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [Wheel, setWheel] = useState(null);
  const [open, setOpen] = useState(false);
  const [remainingSpins, setRemainingSpins] = useState(3); 

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
    if (remainingSpins > 0) {
      const newPrizeNumber = Math.floor(Math.random() * names.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setRemainingSpins(remainingSpins - 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateNames = (newNames) => {
    setNames(newNames);
  };

  const updateRemainingSpins = (newSpins) => {
    setRemainingSpins(newSpins);
  };

  return (
    <div className="h-screen flex flex-row justify-center items-center">
      
      {/* <DeviceFrameset device="iPhone X" color="black" landscape={false} zoom={0.8} > */}
      <div className='w-full h-full'
        style={{ backgroundImage: 'url("https://img.pikbest.com/backgrounds/20200217/blue-drawing-cartoon-ocean-background_2773918.jpg!w700wp")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex flex-col justify-around items-center transform scale-[0.87] '
          
        >
          {Wheel ? (
            <Wheel
              mustStartSpinning={mustSpin}  // Correct usage to start spinning
              prizeNumber={prizeNumber}
              data={names.map(item => ({
                option: item.option,
                style: item.style,
                optionSize: item.optionSize,
                ...(item.image.uri !== "https://via.placeholder.com/50" && { 
                  image: {
                    ...item.image,
                    element: <img src={item.image.uri} alt={item.option} style={{ width: 1, height: 1}} /> 
                  } 
                })
              }))}
              backgroundColors={[
                '#EEB211',
                '#3369E8',
                '#D50F25',
                '#009925',
                '#00A3E0',
                '#FF6900',
                '#A200FF',
                '#FF0097',
              ]}
              textColors={['#fff']}
              onStopSpinning={() => {
                setMustSpin(false);
                setOpen(true);
              }}
              innerRadius={0}
              radiusLineColor={'#000000'}
              radiusLineWidth={1}
              fontSize={18}
              perpendicularText={true}
              textDistance={60}
              primaryColor={'#3e3e3e'}
              contrastColor={'#ffffff'}
              duration={100}
              spinDuration={5000}
              outerBorderWidth={0}
              // pointerProps={{ style: { width: 30, height: 30, marginRight: '30px', marginTop: '40px' } }}
            />

          ) : (
            <div>Loading...</div>
          )}
          <Button variant="contained" size='large' color="primary" onClick={handleSpinClick} className="mt-0 hover:bg-[#FA423C]" disabled={remainingSpins === 0} fullWidth sx={{ backgroundColor: '#FA423C' }}>
            Spin ({remainingSpins} left)
          </Button>
          
          {/* Custom Popup */}
          {open && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              backgroundColor: '#fff',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              zIndex: 1000
            }}>
              <h2>Congratulations!</h2>
              <p>You have won prize {names[prizeNumber]?.option || 'N/A'}!</p>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Close
              </Button>
            </div>
          )}
        </div>
        </div>
      {/* </DeviceFrameset> */}
      
      <NameList 
        initialNames={names} 
        onNamesChange={updateNames} 
        onRemainingSpinsChange={updateRemainingSpins} 
        initialRemainingSpins={remainingSpins} 
      />
      
    </div>
  );
};

export default WheelLuckyDraw;