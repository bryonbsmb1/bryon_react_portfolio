import { a } from "react-router-dom";
const Portfolio = () => {
  return (
    <article className="container">
      <div className="row">
        <div className="col card">
          <img
            className="card-img-top"
            src="./assets/note-taker.PNG"
            alt="Note Taker"
          />
          <div className="card-body">
            <a
              className="btn btn-primary"
              href=
             "https://sarahmaskill-note-taker.herokuapp.com/notes"
              target="blank"
            >
              Notetaker
            </a>
          </div>
        </div>
        <div className="col card">
          <img
            className="card-img-top"
            src="assets/my-app/assets/weatherapp.jpeg"
            alt="weather app webpage"
          />
          <div className="card-body">
            <a
              className="btn btn-primary"
              href="https://bryonbsmb1.github.io/weatherdashboard/"
            >
              Weather Dashboard
            </a>
          </div>
        </div>
        <div className="col card">
          <img
            className="card-img-top"
            src="assets/Photoportfolio.PNG"
            alt="photo portfolio webpage"
          />
          <div className="card-body">
            <a
              className="btn btn-primary"
              href="https://sarahmaskill.myportfolio.com/work"
              target="blank"
              alt="Photo Portfolio Webpage"
            >
              Photo Portfolio
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col card">
          <img className="card-img-top" src="assets/only-plants.PNG" />
          <div className="card-body">
            <a
              className="btn btn-primary"
              href="https://only-plants.herokuapp.com/"
              target="blank"
            >
              Only Plants
            </a>
          </div>
        </div>
        <div className="col card">
          <img className="card-img-top" src="assets/Health-4-U.PNG" />
          <div className="card-body">
            <a
              className="btn btn-primary"
              href="https://github.com/sarahmaskill/health4u"
            >
              Password Generator
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Portfolio;

