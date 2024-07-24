import profilePic from '../assets/images/DerekLinkdin_Final.png'

export default function About() {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center align-items-center'>
        {/* Bio */}
        <div className='col-md-6'>
          <p className='m-3' style={{ color: 'white', boxShadow: '0px 0px 3px 3px limegreen' }}>
            Hello, I'm Derek Modugno and I'm a fullstack web developer skilled with several technologies including JavaScript, CSS, and HTML. I have a Web Development Bootcamp Certificate from the
            University of Texas, Austin, and a Bachelor's Degree from Indiana University, Bloomington. I am a creative problem-solver and team player with a passion for developing apps and learning new technologies.
          </p>
          {/* Buttons */}
          <div className="buttons mt-3">
            <a href="https://www.linkedin.com/in/derek-modugno-9927b72b1/" className='mb-2'>
              <button>View Linkedin</button>
            </a>
            <a href="https://github.com/derekm129" className='mb-2'>
              <button>View GitHub</button>
            </a>
          </div>
        </div>
        {/* Profile Picture */}
        <div className='col-md-4'>
          <img src={profilePic} id="profilePic" style={{ boxShadow: '0px 0px 3px 3px limegreen' }} />
        </div>
      </div>
    </div>

  );
}
