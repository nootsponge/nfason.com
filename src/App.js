import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Personal from "./Personal";
import Biz from "./Biz"
import NotFound from './NotFound';
import Films from './Films';
import Games from './Games';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/biz" element={<Biz />} />
          <Route path="/films" element={<Films />} />
          <Route path="/games" element={<Games />} />
          <Route path="/" element={<Personal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
