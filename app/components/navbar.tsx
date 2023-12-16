import {
  HomeIcon,
  NewspaperIcon,
  CodeBracketSquareIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import NavButtons from "./navButtons";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 flex justify-center gap-4 my-4 p-2 border shadow rounded text-gray-700 font-semibold">
      <NavButtons
        href="/"
        icon={<HomeIcon className="w-5 h-5" />}
        label="Home"
      />
      <NavButtons
        href="/projects"
        icon={<CodeBracketSquareIcon className="w-5 h-5" />}
        label="Projects"
      />
      <NavButtons
        href="/contact"
        icon={<PhoneIcon className="w-5 h-5" />}
        label="Contact"
      />
      <NavButtons
        href="/Saurabh-Tiwari-Resume.pdf"
        icon={<NewspaperIcon className="w-5 h-5" />}
        label="Resume"
      />
    </div>
  );
}

export default Navbar;
