import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Personal from "./Personal";
import Biz from "./Biz"
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/biz" element={<Biz />} />
          <Route path="/" element={<Personal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
