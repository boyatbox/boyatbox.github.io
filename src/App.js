import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Post } from "./Post/Bookmark";
import { Checkout } from "./Post/Checkout";
import { Home } from "./Home";
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/">
          {/* <span className="header-icon">🌷</span> */}
          <span className="header-span">
            nothing to commit, working tree clean
          </span>
        </Link>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Post />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
