"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavButtons(props: any) {
  const pathname = usePathname();
  return (
    <Link
      href={props.href}
      target={props.label === "Resume" ? "_blank" : ""}
      rel={props.label === "Resume" ? "noopener noreferrer" : ""}
      className={`link ${
        pathname === props.href ? "bg-gray-300" : ""
      } px-6 md:px-8 py-2 rounded-full shadow bg-gray-100 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center border`}
    >
      {props.icon}
      <div className="hidden md:block">{props.label}</div>
    </Link>
  );
}

export default NavButtons;
