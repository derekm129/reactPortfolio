import profilePic from '../assets/images/DerekLinkdin_Final.png'

export default function About() {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-4' >
          {/* Profile Pic */}
          <img src={profilePic} id="profilePic" style={{ boxShadow: '0px 0px 5px 5px limegreen' }} />
          {/* Bio */}
          <p className='m-2' style={{ color: 'white' }}>
            Hello, I'm Derek Modugno and I'm a fullstack web developer skilled with several technologies including JavaScript, CSS, and HTML. I have a Web Development Bootcamp Certificate from the
            University of Texas, Austin, and a Bachelor's Degree from Indiana University, Bloomington. I am a creative problem-solver and team player with a passion for developing apps and learning new technologies.
          </p>
        </div>
      </div>
    </div>

  );
}
