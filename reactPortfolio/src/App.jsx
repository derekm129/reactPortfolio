// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="container flex-column justify-flex-start min-100-vh">
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
