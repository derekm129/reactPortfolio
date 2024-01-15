import { Link } from 'react-router-dom';


function Project(props) {
    return (
        <div className='container'>
            <div className="project row justify-content-center align-items-center"> 
                    <h3 className='project-title'>{props.title}</h3>
                        <a href={props.url}>
                            <img src={props.body} id="project-pictures" className="img-fluid" />
                        </a>
        </div>
      </div>
    );
  }


  
  export default Project;
  