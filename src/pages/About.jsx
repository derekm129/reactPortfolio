import profilePic from '../assets/images/profilePic.png'

export default function About() {
  return (
    <div className='container text-center'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-4'>
          {/* Profile Pic */}
          <img src={profilePic} id="profilePic" />
          {/* Bio */}
          <p className='m-2'>
            Hello, I'm Derek Modugno and I'm a fullstack developer! I live in St. Louis, Missouri and am skilled with HTML, CSS, Javascript, React, and Git.
            I am currently enrolled in the UT Austin Coding Bootcamp.
          </p>
        </div>
      </div>
    </div>

  );
}
