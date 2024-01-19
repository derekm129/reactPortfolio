// Imports
// import '../App.css';
import Project from '../components/Project';

// Project Images
import horisean from '../assets/images/horisean.png';
import plantPic from '../assets/images/plantScreenshot.png';
import project1 from '../assets/images/project1Page.png';
import ecommerce from '../assets/images/e-commerce.png';
import employeeTracker from '../assets/images/employeeTracker.png';
import calendar from '../assets/images/calendar.png';

export default function Home() {
  return (
    <div className='projects-list'>
      <Project
        url={"https://derekm129.github.io/horiseon-refactor/#social-media-marketing"}
        deployment={"https://github.com/derekm129/horiseon-refactor"}
        body={horisean}
        title={"Horisean Refactor"}
      />
      <Project
        url={"https://nameless-wave-14504-8d3cae4aaa8e.herokuapp.com/"}
        body={plantPic}
        title={"Plant Parenthood"}
      />
      <Project
        url={"https://lildano50.github.io/group-project-1/"}
        body={project1}
        title={"What to Do"}
      />
      <Project
        url={"https://github.com/derekm129/E-commerce-Back-End"}
        body={ecommerce}
        title={"E-Commerce Backend"}
      />
      <Project
        url={"https://github.com/derekm129/Employee-Tracker"}
        body={employeeTracker}
        title={"Employee Tracker"}
      />
      <Project
        url={"https://derekm129.github.io/calendarApp/"}
        body={calendar}
        title={"Calendar App"}
      />
    </div>
  );
}
