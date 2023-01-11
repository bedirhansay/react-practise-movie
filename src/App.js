import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/Watched" element={<Watched />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
