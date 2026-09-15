import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Team from "./components/Team";
import About from "./components/About";
import { useState } from "react";
import Accordion from "./components/Accordian";
import Comments from "./components/comments/Comment";
import ImageSlider from "./components/image-Slider/ImageSlider";
import Pagination from "./components/pagination/Pagination";
import LiveChat from "./components/live-chat/LiveChat";
import SearchUi from "./components/search-ui/SearchUi";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-300 flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/accordian">Accordian </a>
          <a href="/about">About </a>
          <a href="/image-slider">Image Slider </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
          <a href="/pagination">Pagination</a>
          <a href="/comments">Comments</a>
          <a href="/live-chat">LiveChat</a>
          <a href="/search-ui">SearchUi</a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en" className="bg-black text-white">
            English
          </option>
          <option value="hi" className="bg-black text-white">
            Hindi
          </option>
          <option value="sp" className="bg-black text-white">
            Spanish
          </option>
          <option value="ru" className=" bg-black text-white">
            Russian
          </option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About lang={lang} />}></Route>
          <Route path="/image-slider" element={<ImageSlider />}></Route>
          <Route path="/accordian" element={<Accordion />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/live-chat" element={<LiveChat />}></Route>
          <Route path="/search-ui" element={<SearchUi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
