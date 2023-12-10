import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <>
      <title>Home</title>
      <main className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-3 md:col-span-2 bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4">
          <div className="text-3xl font-black text-gray-600 text-center mb-4">
            About me
          </div>
          <div className="text-gray-500 text-justify text-sm md:text-base">
            <p className="mb-3">
              Hello! I'm Saurabh Tiwari, a dynamic software developer and a
              final-year undergraduate student at the Indian Institute of
              Technology Delhi. My professional journey has been shaped by
              impactful internships, including the redevelopment of a
              Progressive Web App (PWA) with an impressive 15K Daily Active
              Users (DAU). Leveraging React optimization techniques like React
              Lazy, Suspense, Memo, and Windowing, I enhanced Lighthouse
              performance. Additionally, I implemented Debouncing and Throttling
              for efficient search functionality, ensuring swift API responses
              based on user input. My technical proficiency extends to projects
              developed with Next.js for server-side rendering, optimizing SEO
              and image loading, and incorporating Tailwind CSS for responsive
              design. Utilizing Material-UI (MUI) for production-ready
              components further showcases my comprehensive skill set.
            </p>
            <p>
              Beyond technical achievements, I've assumed pivotal roles such as
              Core Team Member (Tech) for BECON (IITD E-Summit), overseeing the
              registration portal for over 7000 students and spearheading the
              launch of the Campus Ambassador website. As the Technical
              Coordinator for the Entrepreneurship Development Cell (eDC), I
              designed and managed the EDC IIT Delhi website, also facilitating
              industry-academia collaborations through an innovative opportunity
              portal. Proficient in front-end and back-end technologies like
              HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB, and
              more. My journey in software development is complemented by a
              Silver Medal in Cricket at the IIT Premier League, highlighting my
              commitment to sportsmanship and teamwork. Explore my portfolio to
              discover the various facets of my professional journey, and don't
              hesitate to reach out for inquiries or collaboration
              opportunities!
            </p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4">
          <div className="text-3xl font-black text-gray-600 text-center mb-4">
            Personal info
          </div>
          <div className="flex flex-col justify-between gap-16 text-gray-500">
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <div className="flex gap-4 justify-between py-4 px-4 bg-gray-100 border rounded">
                <div className="text-gray-600 font-semibold">Email</div>
                <div>saurabhtiwari4093@gmail.com</div>
              </div>
              <div className="flex gap-4 justify-between py-4 px-4 bg-gray-100 border rounded">
                <div className="text-gray-600 font-semibold">Phone</div>
                <div>+918208183937</div>
              </div>
              <div className="flex gap-4 justify-between py-4 px-4 bg-gray-100 border rounded">
                <div className="text-gray-600 font-semibold">Birthday</div>
                <div>11th March 2002</div>
              </div>
              <div className="flex gap-4 justify-between py-4 px-4 bg-gray-100 border rounded">
                <div className="text-gray-600 font-semibold">Country</div>
                <div>India</div>
              </div>
            </div>
            <div className="text-lg font-bold text-gray-600">
              <Link
                href="/contact"
                className="flex gap-2 justify-center items-center py-4 px-4 bg-gray-200 hover:bg-gray-300 shadow rounded-full cursor-pointer"
              >
                <PhoneIcon className="w-6 h-6" />
                <div>Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
