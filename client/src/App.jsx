import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HorseAdminPage from "./pages/HorseAdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/horse-admin" element={<HorseAdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
