import { bookmarks } from "../Data/BookmarkData";
export function Checkout(props) {
  const filterBookmarks = bookmarks.filter((item) => item.link);
  return (
    <div>
      <div className="text-div">
        <span>
          <svg
            fill="pink"
            width="16"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z"></path>
          </svg>
        </span>
        <span style={{ marginLeft: "1rem" }}>
          When you checkout a branch, it changes HEAD to point to the new branch
          ref, populates your Index with the snapshot of that commit, then
          copies the contents of the Index into your Working Directory.
        </span>
      </div>
    </div>
  );
}
