import { HomeIcon, NewspaperIcon,CodeBracketSquareIcon,PhoneIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 flex justify-center gap-4 my-4 p-2 border shadow rounded text-gray-700 font-semibold">
        <div className="px-8 py-2 rounded-full border shadow border-gray-300 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center">
            <HomeIcon className="inline-block w-5 h-5"/>
            <div>Home</div>
        </div>
        <div className="px-8 py-2 rounded-full border shadow border-gray-300 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center">
            <NewspaperIcon className="inline-block w-5 h-5"/>
            <div>Resume</div>
        </div>
        <div className="px-8 py-2 rounded-full border shadow border-gray-300 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center">
            <CodeBracketSquareIcon className="inline-block w-5 h-5"/>
            <div>Projects</div>
        </div>
        <div className="px-8 py-2 rounded-full border shadow border-gray-300 bg-gray-200 hover:bg-gray-300 cursor-pointer flex gap-1 justify-center items-center">
            <PhoneIcon className="inline-block w-5 h-5"/>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Navbar