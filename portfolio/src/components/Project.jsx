import timedQuiz from "./timed-quiz.png";
import passwordGenerator from "./password-generator.png";
import workScheduler from "./work-scheduler.png";
import weatherApp from "./weather-app.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {
    return (
        <div className="project">
            <div className="container">
                <div className="row align-items-center my-7">
                    <div className="col-lg-7">
                    <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Timed Quiz</h3>
                            <p>In this project, I designed a timed coding quiz challenge. I used bootstrap, html and javascript to accomplish the requirements needed.</p>
                            <a href="https://bryonbsmb1.github.io/bballCodeQuiz/"></a>
                        </div>
                        <div className="showcase-right-img">
                            <a href="https://bryonbsmb1.github.io/bballCodeQuiz/">
                                <img src={timedQuiz} alt="Screenshot of timed quiz" />
                                <a href="https://github.com/bryonbsmb1/bballCodeQuiz/settings/pages"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                            </a>
                        </div>
                    </section>

                    <section className="showcase-left">
                        <div className="showcase-left-text">
                            <h3>Day Planner</h3>
                            <p>In this project, I designed a work day schedule that presents timeblocks for standard business hours. Each timeblock is color coded to indicate whether it is in the past, present or future. The client can enter tasks in a timeblock and save the data.</p>
                        </div>
                        <div className="showcase-left-img">
                            <a href="https://bryonbsmb1.github.io/dayplanner.github.io/">
                                <img src={workScheduler} alt="Screenshot of work scheduler webpage"/>
                                <a href="https://github.com/bryonbsmb1/dayplanner.github.io/settings/pages"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                            </a>
                        </div>
                    </section>

                        <section className="showcase-right">
                            <div className="showcase-right-text">
                                <h3>Password Generator</h3>
                                <p>This project showcases a password generator that lets the user generate a password given certain specifications.</p>
                            </div>
                            <div className="showcase-right-img">
                                <a href="https://bryonbsmb1.github.io/bballpasswordassignment/">
                                    <img src={passwordGenerator} alt="Screenshot of password generator webpage"/>
                                    <a href="https://github.com/bryonbsmb1/bballpasswordassignment/settings"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                </a>
                            </div>
                        </section>

                        

                       

                        <section className="showcase-left">
                            <div className="showcase-left-text">
                                <h3>Weather App</h3>
                                <p>This application is a weather app that shows current and 5-day weather forecast for a given city.</p>
                            </div>
                            <div className="showcase-left-img">
                                <a href="https://bryonbsmb1.github.io/weatherdashboard/">
                                    <img src={weatherApp} alt="Screenshot of Weather App"/>
                                    <a href="https://github.com/bryonbsmb1/weatherdashboard"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Project