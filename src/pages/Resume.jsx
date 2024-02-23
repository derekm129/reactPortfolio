import ResumePDF from '../utils/DerekModugno_Resume2024.pdf';
import resumejpg from '../assets/images/resume.png';

function App() {
  return (
    <div className="container text-center">
      <img src={resumejpg} id="resumeImg" />
      <div />
      <a
        href={ResumePDF}
        download="DerekModugno_Resume2024"
        target="_blank"
        rel="noreferrer"
      >
        {/* Download Button */}
        <button className="btn btn-primary m-2">Download .pdf file</button>
      </a>
    </div>
  )
}

export default App;