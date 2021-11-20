import { Link } from "react-router-dom";
import { PostData } from "./Data/PostData";
export function Home(props) {
  const filterPostdata = PostData.filter((item) => item?.id);
  return (
    <div>
      {filterPostdata.map((val, idx) => {
        return (
          <Link to={`/${val.text.toLowerCase()}`}>
            <article className="post-link">
              <span className="post-link-icon">{val.icon}</span>
              <span> {val.text}</span>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

//arrow svg->
// <svg
//   fill="crimson"
//   width="16"
//   height="12"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z"></path>
// </svg>
