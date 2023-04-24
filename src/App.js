import logo from './logo.svg';
import './App.css';
import AppRouter from './Components/Router/AppRouter/AppRouter';
import React, { useEffect } from 'react';
/* import ReactGA from 'react-ga';
ReactGA.initialize('G-LNJBZG00N8'); */

function App() {
/*   useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []); */

  return (
    <div className="App">
     <AppRouter />
    </div>
  );
}

export default App;
