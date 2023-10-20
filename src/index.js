import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Login from "./components/containerLogin/Login";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teste" element={<Login />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);