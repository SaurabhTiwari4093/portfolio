import OneProject from "../components/project";

import HTMLIMG from "../../public/tech/html.svg";
import CSSIMG from "../../public/tech/css.svg";
import JSIMG from "../../public/tech/javascript.svg";
import PythonImg from "../../public/tech/python.svg";
import FlaskImg from "../../public/tech/flask.svg";
import ReactImg from "../../public/tech/react.svg";
import NextImg from "../../public/tech/nextjs.svg";
import NodeImg from "../../public/tech/nodejs.svg";
import MongoDBImg from "../../public/tech/mongodb.svg";
import TypescriptImg from "../../public/tech/typescript.svg";
import TailwindImg from "../../public/tech/tailwind.svg";
import FirebaseImg from "../../public/tech/firebase.svg";
import BootstrapImg from "../../public/tech/bootstrap.svg";
import ExpressJsImg from "../../public/tech/expressjs.png";
import MaterialUIImg from "../../public/tech/materialUI.svg";
import VercelImg from "../../public/tech/vercel.svg";
import AWSImg from "../../public/tech/aws.svg";

import FloodPredictorImg from "../../public/projects/floodPredictor.png";
import PortfolioImg from "../../public/projects/portfolio.png";
import IccntsdImg from "../../public/projects/iccntsd.png";
import BHMImg from "../../public/projects/bhm.png";
import HackerNewsImg from "../../public/projects/hackerNews.png";
import CurrencyConverterImg from "../../public/projects/currencyConverter.png";
import KapableImg from "../../public/projects/kapable.png";
import TodoImg from "../../public/projects/todo.png";
import TextUtilesImg from "../../public/projects/textUtiles.png";
import EdcIITDImg from "../../public/projects/edc-iitd.png";
import CapEdcIITDImg from "../../public/projects/cap-edc-iitd.png";
import BeconEdcIITDImg from "../../public/projects/becon-edc-iitd.png";
import OpportunityPortalImg from "../../public/projects/opportunity-portal.png";
import DemoDashboardImg from "../../public/projects/demo-dashboard.png";
import MailHeroImg from "../../public/projects/mailhero.png";
import ChatAppImg from "../../public/projects/chatApp.png";

function Projects() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4 mb-4">
      <div className="text-3xl font-black text-gray-600 text-center mb-4">
        Projects
      </div>
      <div className="grid grid-cols-6 gap-4 text-gray-500">
        <OneProject
          image={PortfolioImg}
          title={"Portfolio"}
          desc={
            "A portfolio website is a platform showcasing my skills, projects, and professional experience in the field of software development."
          }
          techs={[
            {
              img: TypescriptImg,
              alt: "Typescript",
            },
            {
              img: NextImg,
              alt: "Next Js",
            },
            {
              img: TailwindImg,
              alt: "Tailwind CSS",
            },
            {
              img: FirebaseImg,
              alt: "Firebase",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://www.saurabh-tiwari.tech/"}
          code={"https://github.com/SaurabhTiwari4093/portfolio"}
        />
        <OneProject
          image={OpportunityPortalImg}
          title={"Opportunity Portal"}
          desc={
            "This webapp is the Opportunity Portal of eDC IITD, where students and startups can connect for internships and jobs. The website allows users to select their user type, view the available opportunities, and apply online."
          }
          techs={[
            {
              img: ReactImg,
              alt: "Next Js",
            },
            {
              img: MaterialUIImg,
              alt: "Material UI",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: ExpressJsImg,
              alt: "Express Js",
            },
            {
              img: MongoDBImg,
              alt: "MongoDB",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"https://opportunity-portal.saurabh-tiwari.tech/"}
          code={"https://github.com/SaurabhTiwari4093/Opportunity-Portal"}
        />
        <OneProject
          image={FloodPredictorImg}
          title={"Flood Predictor"}
          desc={
            "Flood Predictor is a web application that uses Machine Learning to predict floods based on weather and and various historical data."
          }
          techs={[
            {
              img: HTMLIMG,
              alt: "HTML",
            },
            {
              img: CSSIMG,
              alt: "CSS",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: PythonImg,
              alt: "Python",
            },
            {
              img: FlaskImg,
              alt: "Flask",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"#"}
          code={"https://github.com/SaurabhTiwari4093/Flood-Forecasting"}
        />
        <OneProject
          image={IccntsdImg}
          title={"ICCNTSD' 23"}
          desc={
            "2023 International Conference on Carbon Neutral Technology for Sustainable Development & 2023 Taiwan-India Exchange Workshop on Sustainable Renewable Energy and Smart Energy Storage Technology"
          }
          techs={[
            {
              img: HTMLIMG,
              alt: "HTML",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: ExpressJsImg,
              alt: "Express Js",
            },
            {
              img: MongoDBImg,
              alt: "MongoDB",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"#"}
          code={"https://github.com/SaurabhTiwari4093/ICCNTSD-Backend"}
        />
        <OneProject
          image={BHMImg}
          title={"BHM IIT Delhi"}
          desc={
            "The Board for Hostel Management provides a welcoming home where students create memories, share ideas, and grow alongside friends."
          }
          techs={[
            {
              img: ReactImg,
              alt: "React Js",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
          ]}
          href={"https://bhm.iitd.ac.in/"}
          code={"#"}
        />
        <OneProject
          image={KapableImg}
          title={"Kapable"}
          desc={
            "The website is about Kapable, an online learning platform that aims to empower children with 21st century skills such as communication, creativity, logic, and entrepreneurship."
          }
          techs={[
            {
              img: NextImg,
              alt: "Next Js",
            },
            {
              img: TailwindImg,
              alt: "Tailwind CSS",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://kapable-landing.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/kapable"}
        />
        <OneProject
          image={DemoDashboardImg}
          title={"Student Teacher Dashboard"}
          desc={
            "The demonstration website is a dashboard for managing educational curriculum, assignments, students, and teachers, with quick access links for administrators."
          }
          techs={[
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NextImg,
              alt: "Next Js",
            },
            {
              img: TailwindImg,
              alt: "Tailwind CSS",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://student-teacher-dashboard-saurabh.vercel.app/"}
          code={
            "https://github.com/SaurabhTiwari4093/student-teacher-dashboard"
          }
        />
        <OneProject
          image={BeconEdcIITDImg}
          title={"BECON'23 eDC IIT Delhi"}
          desc={
            "eDC IIT Delhi's Business & Entrepreneurship Conclave with 50+ events spread across 3 days is one of the biggest E-summit of India. eDC IIT Delhi aspires to inculcate the entrepreneurial environment in our country by creating an easily accessible set of resources and connecting people with entrepreneurial mindset."
          }
          techs={[
            {
              img: HTMLIMG,
              alt: "HTML",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: ExpressJsImg,
              alt: "Express Js",
            },
            {
              img: MongoDBImg,
              alt: "MongoDB",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"https://becon-edc-iitd.saurabh-tiwari.tech/"}
          code={"https://github.com/SaurabhTiwari4093/BECon-eDC-IITD"}
        />
        <OneProject
          image={CapEdcIITDImg}
          title={"CAP eDC IIT Delhi"}
          desc={
            "With the Campus Ambassador Program, we offer a platform with the best of both worlds - mentorship from experienced entrepreneurs and various skills training opportunities."
          }
          techs={[
            {
              img: HTMLIMG,
              alt: "HTML",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: ExpressJsImg,
              alt: "Express Js",
            },
            {
              img: MongoDBImg,
              alt: "MongoDB",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"https://cap-edc-iitd.saurabh-tiwari.tech/"}
          code={"https://github.com/SaurabhTiwari4093/CAP-eDC-IITD"}
        />
        <OneProject
          image={EdcIITDImg}
          title={"eDC IIT Delhi"}
          desc={
            "The Entrepreneurship Development Cell of IIT Delhi was set up in January 2007 with a vision to promote and nurture Entrepreneurship amongst the student community and help aspiring student entrepreneurs achieve their entrepreneurial aspirations."
          }
          techs={[
            {
              img: HTMLIMG,
              alt: "HTML",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: ExpressJsImg,
              alt: "Express Js",
            },
            {
              img: MongoDBImg,
              alt: "MongoDB",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"https://edc-iitd.saurabh-tiwari.tech/"}
          code={"https://github.com/SaurabhTiwari4093/eDC-Main-Website"}
        />
        <OneProject
          image={ChatAppImg}
          title={"Chat App"}
          desc={
            "A basic chat application built using Next JS, Socket.io and Node Js."
          }
          techs={[
            {
              img: NextImg,
              alt: "Next Js",
            },
            {
              img: TailwindImg,
              alt: "Tailwind CSS",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://chat-app-saurabh.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/chat-app-frontend"}
        />
        <OneProject
          image={MailHeroImg}
          title={"Mail Hero"}
          desc={
            "The webapp is called MailHero that allows users to send bulk emails with an attached Excel file containing the recipients details. Users can specify the email subject, body, and upload an Excel file with the email addresses and names of the receivers before sending the mail."
          }
          techs={[
            {
              img: ReactImg,
              alt: "React Js",
            },
            {
              img: MaterialUIImg,
              alt: "Material UI",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: NodeImg,
              alt: "Node Js",
            },
            {
              img: ExpressJsImg,
              alt: "Express Js",
            },
            {
              img: AWSImg,
              alt: "AWS",
            },
          ]}
          href={"https://mailhero.saurabh-tiwari.tech/"}
          code={"https://github.com/SaurabhTiwari4093/mailhero"}
        />
        <OneProject
          image={HackerNewsImg}
          title={"Hacker News"}
          desc={
            "This website is Hacker News, a social news website focusing on computer science and entrepreneurship. It features user-submitted stories, comments, and upvotes."
          }
          techs={[
            {
              img: ReactImg,
              alt: "React Js",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://hacker-news-saurabh.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/hacker-news"}
        />
        <OneProject
          image={CurrencyConverterImg}
          title={"Currency Converter"}
          desc={
            "This website is a currency converter that allows users to convert between different currencies and view the conversion rates."
          }
          techs={[
            {
              img: ReactImg,
              alt: "React Js",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
          ]}
          href={"#"}
          code={"https://github.com/SaurabhTiwari4093/currency-converter"}
        />
        <OneProject
          image={TodoImg}
          title={"Todo List"}
          desc={
            "This website is a simple todo-list application that allows users to add, view, and manage their tasks. It has a about and home page, where users can enter the title, description, due date, and due time of their todos."
          }
          techs={[
            {
              img: ReactImg,
              alt: "React Js",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://todo-list-saurabh.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/todo-list"}
        />
        <OneProject
          image={TextUtilesImg}
          title={"Text Utiles"}
          desc={
            "Text Utiles is a website that provides various tools for text analysis and manipulation, such as converting text to upper or lower case, clearing text."
          }
          techs={[
            {
              img: ReactImg,
              alt: "React Js",
            },
            {
              img: BootstrapImg,
              alt: "Bootstrap",
            },
            {
              img: JSIMG,
              alt: "JavaScript",
            },
            {
              img: VercelImg,
              alt: "Vercel",
            },
          ]}
          href={"https://text-utiles-saurabh.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/Text-Utiles"}
        />
      </div>
    </main>
  );
}

export default Projects;
