import Link from "next/link";
import Image from "next/image";

function Social(props: any) {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 shadow rounded-full bg-gray-200 hover:bg-gray-300"
    >
      <Image src={props.logo} alt={props.alt} height={30} width={30} />
    </Link>
  );
}

export default Social;
