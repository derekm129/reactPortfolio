import { Link } from 'react-router-dom';


function Project(props) {
  return (
    <div className='parentContainer'>
      <div className="project row justify-content-center align-items-center">
        <h3 className='project-title text-center'>{props.title}</h3>
        <div className='anotherContainer'>
          <a href={props.url}>
            <img src={props.body} id="project-pictures" className="project-pictures img-fluid" />
          </a>
          <div className='projectContainer'>
            <a href={props.deployment}>
              {props.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Project;
