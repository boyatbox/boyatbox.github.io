import { Link } from "react-router-dom";

export function Posts(props) {
  return (
    <div>
      <Link to="/post">
        <article className="post-link">⭐ Bookmark</article>
      </Link>
    </div>
  );
}
