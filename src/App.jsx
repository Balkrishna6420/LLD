import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Team from "./components/Team";
import About from "./components/About";

function App() {
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-300 flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
