'use client';
// import Image from "next/image";
import LinkQRGenerator from "./Components/Link";
import CustomizedTabs from "./Components/Tabs";
import QrCode from "./Components/QrCode";
import ContactForm from "./Components/Contact";
import TextForm from "./Components/Text";
import EmailForm from "./Components/Email";
import SmsForm from "./Components/Sms";
import WifiForm from "./Components/Wifi";
import BitcoinForm from "./Components/Bitcoin";
import FacebookForm from "./Components/Facebook";
import BankForm from "./Components/Bank";
import { useSelector } from "react-redux";

export default function Home() {
  const link = useSelector((state) => state.qrCode.link);
  return (
    <div className="w-full min-h-screen max-h-[8000px] bg-gradient-to-r from-purple-500 to-pink-500 pb-[20px]">
      <div className="2xl:max-w-[1237px] m-auto flex flex-col 2xl:flex-row justify-center gap-[10px] p-[10px] pt-[90px] xl:w-full xl:p-[20px] xl:pt-[90px] lg:flex-row lg:p-[10px] lg:pt-[90px] md:flex-col md:p-[10px] md:pt-[90px] sm:p-[10px] sm:pt-[90px]">
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
        <div className="xl:w-[30%] min-h-[581px] max-h-[1110px] bg-[#fff] rounded-[8px] lg:w-[37%] md:w-full sm:w-[100%]">
          <QrCode />
        </div>
      </div>
    </div>
  );
}
