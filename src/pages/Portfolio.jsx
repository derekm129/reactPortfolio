import Project from '../components/Project';
import '../App.css';

// Project Images
import syntax from '../assets/images/syntaxScreenshot.png';
import ecommerce from '../assets/images/e-commerce.png';
import employeeTracker from '../assets/images/employeeTracker.png';
import calendar from '../assets/images/calendar.png';
import pwGenerator from '../assets/images/pwGeneratorScreenshot.png';
import weather from '../assets/images/wthrScreenshot.png';

// Home Page
export default function Portfolio() {
  return (
    <div>
      <div className='projects-list justify-content-center'>
        <Project
          url={"https://derekm129.github.io/passwordGenerator/"}
          // deployment={"https://github.com/derekm129/passwordGenerator"}
          body={pwGenerator}
          title={"Password Generator"}
        />
        <Project
          url={"https://derekm129.github.io/weatherDashboard/"}
          // deployment={"https://github.com/derekm129/timedQuiz"}
          body={weather}
          title={"Weather Dashboard"}
        />
        <Project
          url={"https://github.com/derekm129/E-commerce-Back-End"}
          // deployment={"https://github.com/derekm129/E-commerce-Back-End"}
          body={ecommerce}
          title={"E-Commerce Backend"}
        />
        <Project
          url={"https://github.com/derekm129/Employee-Tracker"}
          // deployment={"https://github.com/derekm129/Employee-Tracker"}
          body={employeeTracker}
          title={"Employee Tracker"}
        />
        <Project
          url={"https://derekm129.github.io/calendarApp/"}
          // deployment={"https://github.com/derekm129/calendarApp"}
          body={calendar}
          title={"Day Planner App"}
        />
        <Project
          url={"https://syntax-8rz6.onrender.com/"}
          // deployment={"https://github.com/grayd500/Syntax"}
          body={syntax}
          title={"UTA Final Group Project"}
        />
      </div>
    </div>
  );
}
