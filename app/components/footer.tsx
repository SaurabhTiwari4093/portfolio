import Link from "next/link";

function Footer() {
  return (
    <div className="w-full flex justify-center text-center bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4">
      <div className="text-gray-500 flex flex-col gap-2 items-center justify-center">
        <div>
          &#169;2023 Designed and developed by{" "}
          <span className="text-gray-700">Saurabh Tiwari</span>
        </div>
        <div className="text-sm">
          <Link
            href="https://github.com/SaurabhTiwari4093/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 border hover:bg-gray-200 px-4 py-1 rounded-full hover:text-gray-700"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
