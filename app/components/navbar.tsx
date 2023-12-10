'use client';
import {
  HomeIcon,
  NewspaperIcon,
  CodeBracketSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 flex justify-center gap-4 my-4 p-2 border shadow rounded text-gray-700 font-semibold">
      <Link href="/" className={`link ${pathname === '/' ? 'bg-gray-300' : ''} px-6 md:px-8 py-2 rounded-full shadow bg-gray-100 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center`}>
        <HomeIcon className="w-5 h-5" />
        <div className="hidden md:block">Home</div>
      </Link>
      <Link href="/Saurabh_Tiwari_Resume.pdf" className="px-6 md:px-8 py-2 rounded-full shadow bg-gray-100 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center">
        <NewspaperIcon className="w-5 h-5" />
        <div className="hidden md:block">Resume</div>
      </Link>
      <Link href="/projects" className={`link ${pathname === '/projects' ? 'bg-gray-300' : ''} px-6 md:px-8 py-2 rounded-full shadow bg-gray-100 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center`}>
        <CodeBracketSquareIcon className="w-5 h-5" />
        <div className="hidden md:block">Projects</div>
      </Link>
      <Link href="/contact" className={`link ${pathname === '/contact' ? 'bg-gray-300' : ''} px-6 md:px-8 py-2 rounded-full shadow bg-gray-100 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center`}>
        <PhoneIcon className="w-5 h-5" />
        <div className="hidden md:block">Contact</div>
      </Link>
    </div>
  );
}

export default Navbar;
