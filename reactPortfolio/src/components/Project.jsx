import { Link } from 'react-router-dom';


function Project(props) {
    return (
        
        <section className="project"> 
            <h3 className='project-title'>{props.title}</h3>
                <a href={props.url}>
                    <img src={props.body} id="project-pictures" className="img-fluid" />
                </a>
      </section>
    );
  }


  
  export default Project;
  