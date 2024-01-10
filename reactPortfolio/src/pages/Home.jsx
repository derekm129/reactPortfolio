import horisean from '../assets/images/horisean.png';
import plantPic from '../assets/images/plantScreenshot.png';
import project1 from '../assets/images/project1Page.png';
import '../App.css';
import Project from '../components/Project';

export default function Home() {
    return (
      <div>
        <h1>My Portfolio</h1>
        <Project 
          url={"https://derekm129.github.io/horiseon-refactor/#social-media-marketing"} 
          body={horisean}
          title={"Horisean Refactor"}
        />
        {/* <Project 
          url={""} 
          body={}
          title={""}
        />
        <Project 
          url={""} 
          body={}
          title={""}
        />
        <Project 
          url={""} 
          body={}
          title={""}
        />
        <Project 
          url={""} 
          body={}
          title={""}
        />
        <Project 
          url={""} 
          body={}
          title={""}
        />
         */}
          {/* <section className="project"> 
            <a href="https://derekm129.github.io/horiseon-refactor/#social-media-marketing">
                <img src={horisean} id="horisean" className="float-left" />
            </a>
            <h3>Horisean Refactor</h3>
              <p>For this project I refactored code for a webpage in order to make it more accessible. I renamed and combined HTML and CSS elements in order to make the code more efficient.</p>
          </section>
          {/* <Project></Project> */}

          {/* <section className="project">
            <a href="https://nameless-wave-14504-8d3cae4aaa8e.herokuapp.com/">
              <img src={plantPic} id="project-pictures" className="float-right"/>
            </a>
            <h3>Plant Parenthood</h3>
              <p>For this group project I worked mostly on the backend for a website that lets users search for plant information by entering the name of a plant in the search bar.</p>
            </section> */}

            {/* <section className="project">
                <a href="https://lildano50.github.io/group-project-1/"> 
                  <img src={project1} id="project-pictures" className="float-left"/>
                </a>
                <h3>What to Do</h3>
                  <p>This was my first group project I worked on at the UT Austin Coding Bootcamp. This website allows a user to enter a zip code in order to find random activities to do in their area. I helped make this app along with Daniel Park, Phuc Dinh, and Dasarathan T.</p>
            </section> */} 

      </div>
    );
  }
  