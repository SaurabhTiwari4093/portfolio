import Image from "next/image";
import JSIMG from "../../public/tech/javascript.svg";
import ReactImg from "../../public/tech/react.svg";
import NodeImg from "../../public/tech/nodejs.svg";
import MongoDBImg from "../../public/tech/mongodb.svg";
import AWSImg from "../../public/tech/aws.svg";
import CPlusPlusImg from "../../public/tech/cPlusPlus.svg";
import PythonImg from "../../public/tech/python.svg";
import MySQLImg from "../../public/tech/mysql.svg";
import DjangoImg from "../../public/tech/django.svg";
import GitHubImg from "../../public/tech/github.svg";

function Tech() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 rounded border my-4 p-4 shadow">
      <div className="text-3xl font-black text-gray-600 text-center">
        Tech I like
      </div>
      <div className="flex items-center md:justify-center gap-4 overflow-x-scroll scroll-smooth no-scrollbar mt-4">
        <Image src={JSIMG} alt="JavaScript" height={40} width={40} />
        <Image src={ReactImg} alt="React Js" height={40} width={40} />
        <Image src={NodeImg} alt="Node Js" height={40} width={40} />
        <Image src={MongoDBImg} alt="MongoDB" height={40} width={40} />
        <Image src={MySQLImg} alt="MySQL" height={40} width={40} />
        <Image src={CPlusPlusImg} alt="C++" height={40} width={40} />
        <Image src={PythonImg} alt="Python" height={40} width={40} />
        <Image src={DjangoImg} alt="Django" height={40} width={40} />
        <Image src={GitHubImg} alt="Flask" height={40} width={40} />
        <Image src={AWSImg} alt="AWS" height={40} width={40} />
      </div>
    </div>
  );
}

export default Tech;
