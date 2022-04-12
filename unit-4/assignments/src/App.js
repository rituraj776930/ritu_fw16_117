import logo from './logo.svg';
import './App.css';

import Joinus from './sprint-1/day-1/assignments/Joinus';
import Settings from './sprint-1/day-1/assignments/Settings';
import Login from './sprint-1/day-1/assignments/Login';
import Cntact from './sprint-1/day-1/assignments/Cntact';
import Search from './sprint-1/day-1/assignments/Search';
import Help from './sprint-1/day-1/assignments/Help';
import Download from './sprint-1/day-1/assignments/Download';
import Home from './sprint-1/day-1/assignments/Home';

function App() {
  return (
    <div className="App">
      <Joinus/>
      <Settings/>
      <Login/>
      <Cntact/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
    </div>
  );
}

export default App;
