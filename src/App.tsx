import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "@/pages/GetStarted";
import Board from "@/pages/Board";
import { ThemeProvider } from "@/components/theme-provider"
import Faq from "@/pages/faq/Faq";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/board" element={<Board />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
