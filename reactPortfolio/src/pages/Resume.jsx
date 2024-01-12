import ResumePDF from '../utils/DerekModugno_Resume2024.pdf';

function App () {
  return (
    <div>
      <h2>Resume</h2>

      <a
        href={ResumePDF}
        download="DerekModugno_Resume2024"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download .pdf file</button>
      </a>
    </div>
  )
}

export default App;