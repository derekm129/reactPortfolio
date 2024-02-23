import profilePic from '../assets/images/profilePic.png'

export default function About() {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-4' >
          {/* Profile Pic */}
          <img src={profilePic} id="profilePic" style={{ boxShadow: '0px 0px 5px 5px limegreen' }} />
          {/* Bio */}
          <p className='m-2' style={{ color: 'white' }}>
            Hello, I'm Derek Modugno and I'm a fullstack web developer! Skilled in JavaScript, CSS, HTML, and GitHub. I have a Web Development Bootcamp Certificate from the
            University of Texas, Austin, and a Bachelor's of Arts from Indiana University, Bloomington. I work well with a team as well as independantly.
          </p>
        </div>
      </div>
    </div>

  );
}
