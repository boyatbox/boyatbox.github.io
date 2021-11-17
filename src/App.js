import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Post } from "./Post";
import { Posts } from "./Posts";
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/">
          <span className="header-span">🌷 nothing to commit, working tree clean</span>
        </Link>
      </header>
      <main className="app-main">
        {/* <article className="post-link">dsad</article>
        <article className="post-link">867867</article> */}
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
