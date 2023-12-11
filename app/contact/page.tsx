import Image from "next/image";
import Link from "next/link";
import GithubLogo from "../../public/contact/github.svg";
import LinkedINLogo from "../../public/contact/linkedin.svg";
import EmailLogo from "../../public/contact/email.svg";
import WhatsappLogo from "../../public/contact/whatsapp.svg";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

function Contact() {
  return (
    <>
      <title>Contact</title>
      <main className="bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4 mb-4">
        <div className="text-3xl font-black text-gray-600 text-center mb-4">
          Contact
        </div>
        <div className="text-gray-500 text-center mb-6">
          If you are looking for help with a project or need assistance, you can
          contact me!
        </div>
        <div className="grid grid-cols-3 gap-4">
          <form className="col-span-3 md:col-span-2 p-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Name"
                required
                className="col-span-2 md:col-span-1 rounded shadow p-2 px-4 placeholder:text-gray-400 text-gray-600 focus:outline-gray-300"
              />
              <input
                placeholder="Contact Number"
                required
                className="col-span-2 md:col-span-1 rounded shadow p-2 px-4 placeholder:text-gray-400 text-gray-600 focus:outline-gray-300"
              />
              <input
                placeholder="Email address"
                type="email"
                required
                className="col-span-2 rounded shadow p-2 px-4 placeholder:text-gray-400 text-gray-600 focus:outline-gray-300"
              />
              <textarea
                placeholder="Subject"
                rows={4}
                required
                className="col-span-2 rounded shadow p-2 px-4 placeholder:text-gray-400 text-gray-600 focus:outline-gray-300"
              />
            </div>
            <div className="flex justify-center">
              <button className="rounded-full shadow p-2 px-6 mt-4 text-gray-600 hover:text-gray-700 font-semibold flex items-center justify-center gap-1 bg-gray-200 hover:bg-gray-300">
                <RocketLaunchIcon className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
          <div className="col-span-3 md:col-span-1 p-4 py-12">
            <div className="text-gray-500 text-center mb-4">
              Do you want more direct communication? There's another way to
              contact me.
            </div>
            <div className="flex justify-center gap-4">
              <Link
                href="mailto:saurabhtiwari4093@gmail.com"
                className="p-2 shadow rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <Image src={EmailLogo} alt="Email" height={30} width={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/saurabh-tiwari-b6b640227/"
                className="p-2 shadow rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <Image
                  src={LinkedINLogo}
                  alt="LinkedIn"
                  height={30}
                  width={30}
                />
              </Link>
              <Link
                href="https://github.com/SaurabhTiwari4093"
                className="p-2 shadow rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <Image src={GithubLogo} alt="GitHub" height={30} width={30} />
              </Link>
              <Link
                href="https://wa.me/918208183937"
                className="p-2 shadow rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <Image
                  src={WhatsappLogo}
                  alt="Whatsapp"
                  height={30}
                  width={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
