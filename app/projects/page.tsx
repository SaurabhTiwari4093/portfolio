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
import AWSImg from "../../public/tech/aws.svg";
import TypescriptImg from "../../public/tech/typescript.svg";
import TailwindImg from "../../public/tech/tailwind.svg";
import FirebaseImg from "../../public/tech/firebase.svg";
import VercelImg from "../../public/tech/vercel.svg";
import BootstrapImg from "../../public/tech/bootstrap.svg";
import ExpressJsImg from "../../public/tech/expressjs.png";

import FloodPredictorImg from "../../public/projects/floodPredictor.png";
import PortfolioImg from "../../public/projects/portfolio.png";
import IccntsdImg from "../../public/projects/iccntsd.png";
import BHMImg from "../../public/projects/bhm.png";
import HackerNewsImg from "../../public/projects/hackerNews.png";
import CurrencyConverterImg from "../../public/projects/currencyConverter.png";
import KapableImg from "../../public/projects/kapable.png";
import TodoImg from "../../public/projects/todo.png";
import TextUtilesImg from "../../public/projects/textUtiles.png";

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
          href={"https://flood-predictor.iccntsd.in/"}
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
          href={"https://www.iccntsd.in/"}
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
          ]}
          href={"https://hacker-news-saurabh.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/hacker-news"}
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
          ]}
          href={"https://text-utiles-saurabh.vercel.app/"}
          code={"https://github.com/SaurabhTiwari4093/Text-Utiles"}
        />
      </div>
    </main>
  );
}

export default Projects;
