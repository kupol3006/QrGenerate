'use client';
import React, { useState } from 'react';
import FormCreatorStep1 from './Step/Form1';
import FormCreator from './Step/Form2';
import ReactLoading from 'react-loading';
import FormPage from './FormBuilder';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default function CreateForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 1000); // Simulate loading time
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (

    <div className="w-full bg-gray-100 flex justify-center pt-[50px]">
      {/* <PerfectScrollbar> */}
      {loading ? (
        <div className='w-full flex justify-center items-center h-[calc(100vh-106px)]'>
          <ReactLoading type="spinningBubbles" color="#000000" height={70} width={70} />
        </div>
      ) : (

        <div className='w-[98%] flex justify-center '>
          {step === 1 && <FormCreatorStep1 onNext={handleNextStep} />}
          {step === 2 && <FormCreator onBack={handlePreviousStep} onNext={handleNextStep} />}
          {step === 3 && <FormPage onBack={handlePreviousStep} />}
        </div>

      )}
      {/* </PerfectScrollbar> */}
    </div>
  );
}