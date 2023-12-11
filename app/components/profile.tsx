import Image from "next/image";
import ProfilePic from "../../public/profile.jpg";
import HTMLIMG from "../../public/tech/html.svg";
import CSSIMG from "../../public/tech/css.svg";
import JSIMG from "../../public/tech/javascript.svg";
import ReactImg from "../../public/tech/react.svg";
import NodeImg from "../../public/tech/nodejs.svg";
import MongoDBImg from "../../public/tech/mongodb.svg";
import AWSImg from "../../public/tech/aws.svg";
import CPlusPlusImg from "../../public/tech/cPlusPlus.svg";
import PythonImg from "../../public/tech/python.svg";
import MySQLImg from "../../public/tech/mysql.svg";
import DjangoImg from "../../public/tech/django.svg";

export default function Profile() {
  return (
    <div className="w-full shadow rounded">
      <div className="block md:flex md:flex-wrap justify-center items-center p-8 md:px-36 bg-gradient-to-b from-white to-gray-100 rounded-t border-2">
        <div className="md:w-1/4 flex justify-center md:justify-end md:pr-8">
          <Image
            src={ProfilePic}
            alt="Saurabh Tiwari"
            className="rounded-full border-2 border-gray-400 shadow-lg"
            height={180}
            width={180}
          />
        </div>
        <div className="md:w-3/4 text-center md:text-left">
          <div className="mt-4 mb-2 md:my-0 text-4xl text-gray-700 font-black">
            Saurabh Tiwari
          </div>
          <div className="text-lg text-gray-500">
            Passionate software developer proficient in full-stack development,
            with expertise in both frontend and backend technologies, dedicated
            to crafting innovative and scalable solutions.
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-gray-100 rounded-b border-2 border-t-0 p-4 flex items-center md:justify-center gap-4 overflow-x-scroll scroll-smooth no-scrollbar">
        <Image src={HTMLIMG} alt="HTML" height={40} width={40} />
        <Image src={CSSIMG} alt="CSS" height={40} width={40} />
        <Image src={JSIMG} alt="JavaScript" height={40} width={40} />
        <Image src={ReactImg} alt="React Js" height={40} width={40} />
        <Image src={NodeImg} alt="Node Js" height={40} width={40} />
        <Image src={MongoDBImg} alt="MongoDB" height={40} width={40} />
        <Image src={MySQLImg} alt="MySQL" height={40} width={40} />
        <Image src={CPlusPlusImg} alt="C++" height={40} width={40} />
        <Image src={PythonImg} alt="Python" height={40} width={40} />
        <Image src={DjangoImg} alt="Django" height={40} width={40} />
        <Image src={AWSImg} alt="AWS" height={40} width={40} />
      </div>
    </div>
  );
}
