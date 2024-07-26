import ResumePDF from '../utils/DerekModugno_Resume.pdf';
import resumejpg from '../assets/images/resume2.png';
import '../App.css';

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <img src={resumejpg} id="resumeImg" />
      </div>
      <div className="mt-4">
        {/* Download Button */}
        <a
          href={ResumePDF}
          download="DerekModugno_Resume2024"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-primary m-4">Download .pdf file</button>
        </a>
      </div>
    </div>
  )
}

export default App;