"use client";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, CodeBracketSquareIcon } from "@heroicons/react/24/solid";

function Project(props: any) {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 rounded shadow bg-white border">
      <Image
        src={props.image}
        alt={props.title}
        className="w-full h-52 rounded-t"
      />
      <div className="p-4">
        <div className="text-lg md:text-2xl font-bold text-center text-gray-600 mb-4">
          {props.title}
        </div>
        <div className="text-sm md:text-base mb-4 text-gray-500">
          {props.desc}
        </div>
        <div className="flex flex-wrap gap-4 items-center mb-4">
          {props.techs.map((tech: any, key: any) => {
            return (
              <Image
                src={tech.img}
                alt={tech.alt}
                height={25}
                width={25}
                key={key}
              />
            );
          })}
        </div>
        <div className="flex gap-4 items-center justify-center text-gray-600 text-sm">
          {props.href !== "#" ? (
            <Link href={props.href} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-50 hover:bg-gray-100 rounded-full shadow border font-semibold py-1.5 px-4 flex gap-1 items-center justify-center">
                <EyeIcon className="h-4 w-4" />
                <span className="hidden md:block">Watch online</span>
              </button>
            </Link>
          ) : (
            <></>
          )}
          {props.code !== "#" ? (
            <Link href={props.code} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-50 hover:bg-gray-100 rounded-full shadow border font-semibold py-1.5 px-4 flex gap-1 items-center justify-center">
                <CodeBracketSquareIcon className="h-4 w-4" />
                <span className="hidden md:block">View Source</span>
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
