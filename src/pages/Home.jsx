// Imports
// import '../App.css';
import Project from '../components/Project';

// Project Images
import horisean from '../assets/images/horisean.png';
import syntax from '../assets/images/syntaxScreenshot.png';
import project1 from '../assets/images/project1Page.png';
import ecommerce from '../assets/images/e-commerce.png';
import employeeTracker from '../assets/images/employeeTracker.png';
import calendar from '../assets/images/calendar.png';
import pwGenerator from '../assets/images/pwGeneratorScreenshot.png';
import quiz from '../assets/images/quizScreenshot.png';

// Home Page
export default function Home() {
  return (
    <div className='mx-auto'>
      <div className='projects-list justify-content-center'>
        <Project
          url={"https://derekm129.github.io/passwordGenerator/"}
          // deployment={"https://github.com/derekm129/passwordGenerator"}
          body={pwGenerator}
          title={"Password Generator"}
        />
        <Project
          url={"https://derekm129.github.io/timedQuiz/"}
          // deployment={"https://github.com/derekm129/timedQuiz"}
          body={quiz}
          title={"TimedQuiz"}
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
          title={"Calendar App"}
        />
        <Project
          url={"https://syntax-8rz6.onrender.com/"}
          // deployment={"https://github.com/grayd500/Syntax"}
          body={syntax}
          title={"Fictional Band Page"}
        />
      </div>
    </div>
  );
}
