import profilePic from '../assets/images/DerekLinkdin_Final.png';
import '../App.css';


export default function About() {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center align-items-center'>
        {/* Bio */}
        <div className='col-md-6 mt-5'>
          <p className='m-1' style={{ color: 'white', fontSize: '2em' }} >Hello, I'm Derek Modugno and I'm a fullstack developer.</p>
          <p className='m-1' style={{ color: 'white', fontSize: '1.5em' }}>
            I am skilled with several technologies including JavaScript, CSS, and HTML. I have a Web Development Bootcamp Certificate from the
            University of Texas, Austin, and a Bachelor's Degree from Indiana University, Bloomington. I am a creative problem-solver and team player with a passion for developing apps and learning new technologies.
          </p>
          {/* Buttons */}
          <div className="buttons mt-3">
            <a href="https://www.linkedin.com/in/derek-modugno-9927b72b1/" className='mb-2 m-2'>
              <button className='btn btn-lg bg-success'>View Linkedin</button>
            </a>
            <a href="https://github.com/derekm129" className='mb-2 m-2'>
              <button className='btn btn-lg bg-success'>View GitHub</button>
            </a>
          </div>
        </div>
        {/* Profile Picture */}
        <div className='col-md-4 mt-4'>
          <img src={profilePic} id="profilePic" style={{ boxShadow: '0px 0px 3px 3px green' }} />
        </div>
      </div>
    </div>

  );
}
