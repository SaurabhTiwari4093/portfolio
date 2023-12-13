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
import CPlusPlusImg from "../../public/tech/cPlusPlus.svg";
import MySQLImg from "../../public/tech/mysql.svg";
import DjangoImg from "../../public/tech/django.svg";
import GitHubImg from "../../public/tech/github.svg";
import TypescriptImg from "../../public/tech/typescript.svg";
import TailwindImg from "../../public/tech/tailwind.svg";
import FirebaseImg from "../../public/tech/firebase.svg";
import VercelImg from "../../public/tech/vercel.svg";

import FloodPredictorImg from "../../public/projects/floodPredictor.png";
import PortfolioImg from "../../public/projects/portfolio.png";

function Projects() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4 mb-4">
      <div className="text-3xl font-black text-gray-600 text-center mb-4">
        Projects
      </div>
      <div className="grid grid-cols-2 gap-4 text-gray-500">
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
              img: VercelImg,
              alt: "Vercel",
            },
            {
              img: FirebaseImg,
              alt: "Firebase",
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
              img:AWSImg,
              alt:"AWS",
            },
          ]}
          href={"https://flood-predictor.iccntsd.in/"}
          code={"https://github.com/SaurabhTiwari4093/Flood-Forecasting"}
        />
      </div>
    </main>
  );
}

export default Projects;
