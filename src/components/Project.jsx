import { Link } from 'react-router-dom';


function Project(props) {
  return (
    <div className='parentContainer mt-5'>
      <div className="project row justify-content-center align-items-center">
        {/* Title */}
        <a href={props.deployment}>
          <h3 className='project-title text-center' style={{ color: 'white' }}>{props.title}</h3>
        </a>
        {/* Body */}
        <div className='anotherContainer' style={{ boxShadow: '0px 0px 5px 5px limegreen' }}>
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
