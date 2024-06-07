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
    <div className="w-full min-h-screen max-h-[8000px] bg-gradient-to-r from-purple-500 to-pink-500 pb-[50px]">
      <div className="max-w-[1237px] m-auto flex flex-row justify-center gap-[10px] pt-[70px]">
        <div className="max-w-[876px] min-h-[676px] bg-[#fff] rounded-[8px] p-[4px]">
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
        <div className="w-[351px] max-w-[351px] min-h-[676px] max-h-[1110px] bg-[#fff] rounded-[8px]">
          <QrCode />
        </div>
      </div>
    </div>
  );
}
