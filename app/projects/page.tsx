import OneProject from "../components/project";
import HTMLIMG from "../../public/tech/html.svg";
import CSSIMG from "../../public/tech/css.svg";
import JSIMG from "../../public/tech/javascript.svg";
import PythonImg from "../../public/tech/python.svg";
import FlaskImg from "../../public/tech/flask.svg";
import FloodPredictorImg from "../../public/projects/floodPredictor.png";

function Projects() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4 mb-4">
      <div className="text-3xl font-black text-gray-600 text-center mb-4">
        Projects
      </div>
      <div className="grid grid-cols-2 gap-4 text-gray-500">
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
              img:PythonImg,
              alt:"Python",
            },
            {
              img: FlaskImg,
              alt: "Flask",
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
