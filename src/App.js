import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Biz from "./Biz";
import Films from "./Films";
import Games from "./Games";
import Music from "./Music";
import NotFound from "./NotFound";
import Personal from "./Personal";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/personal" element={<Personal />} />
          <Route path="/films" element={<Films />} />
          <Route path="/games" element={<Games />} />
          <Route path="/music" element={<Music />} />
          <Route path="/" element={<Biz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
