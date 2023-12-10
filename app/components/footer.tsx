import Link from "next/link";

function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="text font-semibold text-gray-500 flex flex-col gap-2 items-center justify-center">
        <div>&#169;2023 Designed and developed by <span className="text-gray-700">Saurabh Tiwari</span></div>
        <div>
          <Link
            href="https://github.com/SaurabhTiwari4093/portfolio"
            className="hover:bg-slate-100 px-4 py-2 rounded hover:text-gray-700"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
