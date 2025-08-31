import React from 'react';
import Landing from './screens/Landing';

// Defining the App function

function App(){
  return(
    <div className="App">
      {/* Evoking the component exported from Landing.jsx and imported here */}
      <Landing />
    </div>
  );
}

export default App;