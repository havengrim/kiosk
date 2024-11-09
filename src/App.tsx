import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "@/pages/GetStarted";
import Board from "@/pages/Board";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
