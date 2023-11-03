import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
