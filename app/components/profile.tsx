import Image from "next/image";
import ProfilePic from "../../public/profile.jpg";

export default function Profile() {
  return (
    <div className="block md:flex md:flex-wrap justify-center items-center p-8 md:px-36 bg-gradient-to-b from-white to-gray-100 rounded border shadow">
      <div className="md:w-1/4 flex justify-center md:justify-end md:pr-8">
        <Image
          src={ProfilePic}
          alt="Saurabh Tiwari"
          className="rounded-full border shadow-lg"
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
          with expertise in both frontend and backend technologies, dedicated to
          crafting innovative and scalable solutions.
        </div>
      </div>
    </div>
  );
}
