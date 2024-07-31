'use client';
// import Image from "next/image";
import LinkQRGenerator from "./Components/Home/Link";
import CustomizedTabs from "./Components/Home/Tabs";
import QrCode from "./Components/Home/QrCode";
import ContactForm from "./Components/Home/Contact";
import TextForm from "./Components/Home/Text";
import EmailForm from "./Components/Home/Email";
import SmsForm from "./Components/Home/Sms";
import WifiForm from "./Components/Home/Wifi";
import BitcoinForm from "./Components/Home/Bitcoin";
import FacebookForm from "./Components/Home/Facebook";
import BankForm from "./Components/Home/Bank";
import { useSelector } from "react-redux";
import Header from "./Components/Home/Header";
import { Box, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import Image from 'next/image';
import BackgroundAnimation from "./Components/Home/BackgroundAnimation";
import Footer from "./Components/Home/Footer";

export default function Home() {
  const link = useSelector((state) => state.qrCode.link);
  const [showMore, setShowMore] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const qrCodeData = [
    {
      title: 'Email',
      type: 'Static',
      description: 'Receive predefined emails, ask for feedback or collect users inquiries about a specified product. All of these can be done by utilizing the predefined subject and message body.',
    },
    {
      title: 'URL',
      type: 'Static',
      description: 'Redirect your customers to a specific URL. You can specify the URL and the title of the page to be shown after scanning the QR code.',
    },
    {
      title: 'WiFi',
      type: 'Static',
      description: 'Share your WiFi network with your customers by scanning this QR code. You can specify the SSID, password, and the type of encryption.',
    },
    {
      title: 'Bitcoin',
      type: 'Static',
      description: 'Encode your Bitcoin address and the amount to be paid in a single QR code. Your customers can scan the QR code and pay the amount easily.',
    },
    {
      title: 'Facebook',
      type: 'Static',
      description: 'Get direct Facebook conversations after scanning this QR code.',
    },
    {
      title: 'Bank',
      type: 'Static',
      description: 'Receive payments from your customers by scanning this QR code. You can specify the bank account number, the amount, and the reference.',
    },
    {
      title: 'SMS',
      type: 'Static',
      description: 'Send predefined SMS messages to your customers. You can specify the phone number and the message body.',
    },
    {
      title: 'VCard',
      type: 'Static',
      description: 'Share your contact information with your customers by scanning this QR code. You can specify the name, the organization, the phone number, the email, the address, the URL, and the note.',
    },
    {
      title: 'Text',
      type: 'Static',
      description: 'Encode a predefined text message in a QR code. You can specify the message body and the title of the page to be shown after scanning the QR code.',
    }
  ];

  const plans = [
    {
      name: 'STARTER',
      priceMonthly: 1,
      priceYearly: 12,
      features: [
        'Subscription is available for a single user',
        '10000 scans',
        '10 dynamic QR codes',
        '4 shapes',
        '1400+ fonts',
        '24 QR code types',
        '1 domains can be connected',
        '10 MB max upload file size',
      ],
    },
    {
      name: 'LITE',
      priceMonthly: 1.5,
      priceYearly: 18,
      features: [
        'Subscription is available for a single user',
        '15000 scans',
        '15 dynamic QR codes',
        '5 shapes',
        '1400+ fonts',
        '24 QR code types',
        '2 domains can be connected',
        '10 MB max upload file size',
      ],
    },
    {
      name: 'PRO',
      priceMonthly: 2,
      priceYearly: 24,
      features: [
        'Subscription is available for a single user',
        '17000 scans',
        '17 dynamic QR codes',
        '5 shapes',
        '1400+ fonts',
        '24 QR code types',
        '3 domains can be connected',
        '10 MB max upload file size',
      ],
    },
  ];

  const freePlan = {
    name: 'FREE',
    features: [
      'Subscription is available for a single user',
      'Unlimited scans',
      'Unlimited dynamic QR codes',
      '4 shapes',
      '1400+ fonts',
      '24 QR code types',
      'Unlimited domains can be connected',
      'Unlimited MB max upload file size',
    ],
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <Box>
      <div className="w-full min-h-[700px] max-h-[8000px] bg-gradient-to-r from-purple-500 to-pink-500">

        <div className="w-full h-full relative bg-gradient-to-r from-blue-900 to-green-900 min-h-[700px] flex flex-col items-center justify-center mt-[60px]">
          <Header />
          <div className="text-center text-white z-10 mt-6"> {/* Đảm bảo nội dung nằm trên background */}
            <h1 className="text-[40px] font-semibold">Next-Gen QR Code Generator</h1>
            <p className="mt-4 text-[15px]">Design beautiful QR codes, stand out from the crowd. Create <br />dynamic QR codes to get scan statistics and insights.</p>
          </div>
          <div className="2xl:max-w-[1237px] m-auto flex flex-col 2xl:flex-row justify-center gap-[10px] p-[10px] xl:w-full xl:p-[20px] lg:flex-row lg:p-[10px] md:flex-col md:p-[10px] sm:p-[10px]">
            <BackgroundAnimation />
            <div className="2xl:min-w-[75%] xl:w-[70%] xl:max-w-[876px] min-h-[210px] bg-[#fff] rounded-[8px] p-[4px] lg:w-[57%] md:w-full  sm:w-[100%] lg:min-h-[581px]">
              <CustomizedTabs />
              {link === 0 && <LinkQRGenerator />}
              {link === 1 && <ContactForm />}
              {link === 2 && <TextForm />}
              {link === 3 && <EmailForm />}
              {link === 4 && <SmsForm />}
              {link === 5 && <WifiForm />}
              {link === 6 && <BitcoinForm />}
              {link === 7 && <FacebookForm />}
              {link === 8 && <BankForm />}
              {/* <Image src="/qr-code.png" alt="QR Code" width={200} height={200} /> */}
            </div>
            <div className="xl:w-[30%] min-h-[581px] max-h-[1110px] bg-[#fff] rounded-[8px] lg:w-[37%] md:w-full sm:w-[100%] z-1">
              <QrCode />
            </div>
          </div>
        </div>

      </div>
      <Box
        sx={{
          width: '12',
          padding: '4rem 2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
        className="2xl:max-w-[1237px] m-auto p-[10px] pt-[90px] xl:w-full xl:p-[20px] xl:pt-[90px] lg:p-[10px] lg:pt-[90px] md:p-[10px] md:pt-[90px] sm:p-[10px] sm:pt-[90px]"
      >
        <Typography variant="h4" fontWeight="bold" color={'#2563EB'} className="text-[21px]">
          9 QR code types available
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            margin: '30px 0',
            fontSize: '48px',
          }}
        >
          QR code types to create engaging customer experience
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '2rem',
            fontSize: '15px',
            color: '#16184b'
          }}
        >
          Build an outstanding digital experience for users with QR Codes. Use QR codes on
          your websites, or stick it offline on a product or information point.
        </Typography>
        <Grid container spacing={4}>
          {qrCodeData.slice(0, showMore ? qrCodeData.length : 4).map((qrCode, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                animation: showMore ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                // opacity: showMore ? 1 : 0,
                transform: showMore ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, animation 0.5s ease-in',
              }}
            >
              <Box
                sx={{
                  padding: '2rem',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  textAlign: 'left',
                  height: '280px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {qrCode.title === 'Email' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#dc3545',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'Facebook' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'URL' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#28a745',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'WiFi' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'Bitcoin' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'Bank' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#ffc107',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'SMS' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'VCard' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  {qrCode.title === 'Text' && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                      }}
                    />
                  )}
                  <Typography variant="h6" fontWeight="bold">
                    {qrCode.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle2" color="textSecondary">
                  {qrCode.type}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '1rem' }}>
                  {qrCode.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Button variant="text" onClick={handleShowMore} sx={{ marginTop: '2rem' }}>
          {showMore ? '' : 'Show more'}
        </Button>
      </Box>
      <Box
        sx={{
          padding: '4rem 2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
        className="2xl:max-w-[1237px] m-auto p-[10px] pt-[90px] xl:w-full xl:p-[20px] xl:pt-[90px] lg:p-[10px] lg:pt-[90px] md:p-[10px] md:pt-[90px] sm:p-[10px] sm:pt-[90px]"
      >
        <Typography variant="h4" fontWeight="bold" color={'#2563EB'} className="text-[21px]">
          Advanced QR Code Stats
        </Typography>
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            margin: '30px 0',
            fontSize: '48px',
          }}
        >
          Insights to help you understand your audience.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '2rem',
          }}
        >
          Get insights about daily scans, hour of the day, device types, and operating system, in addition to countries and cities.
        </Typography>
        <img src="https://qr.incard.biz/assets/images/qrcode-stats.jpg" alt="QR Code Stats" className="rounded-[1rem] shadow-[0_5px_7px_1px_rgba(0,0,0,0.3)]" />

      </Box>
      <Box className='p-5 pt-[90px]'>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[21px] font-extrabold text-blue-600 sm:text-[20px]">
            No hidden fees
          </h2>
          <h1 className=" text-[48px] font-semibold text-gray-900 sm:text-[45px] mt-[30px]">
            Straightforward Pricing
          </h1>
        </div>

        <div className="w-fit flex items-center justify-center mx-auto p-[4px] rounded-[8px] my-[30px] border-[2px] border-gray-300">
          <span
            className={`px-4 py-2 rounded-l-lg  cursor-pointer ${!isYearly
              ? 'bg-gray-200 text-gray-700'
              : 'white text-gray-700'
              }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly Billing
          </span>
          <span
            className={`px-4 py-2 rounded-r-lg cursor-pointer ${isYearly
              ? 'bg-gray-200 text-gray-700'
              : 'white text-gray-700'
              }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly Billing
          </span>
        </div>
        <div
          className="bg-cover bg-center 2xl:max-w-[1200px] m-auto p-[10px] pt-[10px] xl:w-full xl:p-[20px] md:pt-[10px] sm:p-[10px] sm:pt-[10px]"
          style={{
            backgroundImage:
              "url('https://qr.incard.biz/assets/images/qrcode-showcase-bg-1.png')",
            borderRadius: '1rem',
            boxShadow: '0 5px 7px 1px #0000004d',
          }}
        >
          <div className="container mx-auto px-4">


            <div className="flex flex-wrap justify-center mt-12 -mx-4"

            >
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-xl font-bold text-blue-600">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold text-gray-900">
                        $
                        {isYearly ? plan.priceYearly : plan.priceMonthly.toFixed(2)}
                      </span>
                      <span className="ml-2 text-lg text-gray-600">
                        / {isYearly ? 'Year' : 'Month'}
                      </span>
                    </div>
                    <ul className="mt-6 space-y-4 text-gray-600">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <svg
                            className="w-5 h-5 inline-block mr-2 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-8 w-full transition duration-300 ease-in-out">
                      Subscribe now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mt-12 mx-auto max-w-md">
              <h3 className="text-xl font-bold text-blue-600">
                {freePlan.name}
              </h3>
              <ul className="mt-6 space-y-4 text-gray-600">
                {freePlan.features.map((feature) => (
                  <li key={feature}>
                    <svg
                      className="w-5 h-5 inline-block mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg mt-8 w-full transition duration-300 ease-in-out">
                Sign up
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                <svg
                  className="w-4 h-4 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Get 15 days free trial after sign up, no credit card is required.
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </Box >
  );
}
