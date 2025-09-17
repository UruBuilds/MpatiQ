import React, { useEffect } from 'react';
import Landing from './screens/Landing';

// Defining the App function

function App() {
  useEffect(() => {
    // On first load, ignore any hash and reset scroll.
    if (window.location.hash) {
      window.scrollTo(0, 0);
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return (
    <div className="App">
      {/* Evoking the component exported from Landing.jsx and imported here */}
      <Landing />
    </div>
  );
}

export default App;
