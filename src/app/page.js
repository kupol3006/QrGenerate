// import Image from "next/image";
import LinkQRGenerator from "./Components/Link";
import CustomizedTabs from "./Components/Tabs";

export default function Home() {
  return (
    <div>
      <CustomizedTabs />
      <LinkQRGenerator />
      {/* <Image src="/qr-code.png" alt="QR Code" width={200} height={200} /> */}
    </div>
  );
}
