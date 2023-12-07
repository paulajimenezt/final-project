import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HorseAdminPage from "./pages/HorseAdminPage";
import { HorseProvider } from "./context/HorseContext";

function App() {
  return (
    <HorseProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/horse-admin" element={<HorseAdminPage />} />
        </Routes>
      </Router>
    </HorseProvider>
  );
}

export default App;
