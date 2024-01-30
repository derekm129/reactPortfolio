import { Link } from 'react-router-dom';


function Project(props) {
  return (
    <div className='parentContainer'>
      <div className="project row justify-content-center align-items-center">
        {/* Title */}
        <a href={props.deployment}>
          <h3 className='project-title text-center'>{props.title}</h3>
        </a>
        {/* Body */}
        <div className='anotherContainer'>
          <a href={props.url}>
            <img src={props.body} id="project-pictures" className="project-pictures img-fluid" />
          </a>
        </div>
      </div>
    </div>
    // </div >
  );
}



export default Project;
