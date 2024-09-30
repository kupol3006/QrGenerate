// components/Footer.js
import Link from 'next/link';
import XIcon from '@mui/icons-material/X';
// import X from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white w-full border-t border-gray-200 py-8">
            <div className="2xl:w-[63%] container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center sm:w-[100%]">
                <div className="flex flex-col items-start mb-4 md:mb-0">
                    <Link href="/">
                        <Image src="/logo-dondon-footer.png" alt="logo" width={50} height={50} />
                    </Link>
                    <div className="flex mt-4 gap-1">
                        <Link href="#">
                            <XIcon style={{ width: 24, height: 24 }} />
                        </Link>
                        <Link href="#">
                            <InstagramIcon style={{ width: 24, height: 24 }} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-16">
                    <div className="flex flex-col">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">COMPANY</h4>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Contact</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Support</Link>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-medium text-gray-800 mb-2">RESOURCES</h4>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Terms and conditions</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Privacy policy</Link>
                        <Link href="/" className="text-gray-600 hover:text-gray-800">Blog</Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-8">
                QR Code Generator © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;