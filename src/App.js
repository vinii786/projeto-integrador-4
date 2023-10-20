import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import LoginPage from "./components/Login/LoginPage";

export default function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);