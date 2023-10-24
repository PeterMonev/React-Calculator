import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={ <Blog/>} />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
