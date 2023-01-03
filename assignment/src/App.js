import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
