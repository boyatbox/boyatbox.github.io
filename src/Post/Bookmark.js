import { bookmarks } from "../Data/BookmarkData";
export function Post(props) {
  const filterBookmarks = bookmarks.filter((item) => item.link);
  return (
    <div>
      <ul style={{ margin: 0 }}>
        {filterBookmarks.map((item, index) => {
          return (
            <li key={index} style={{ paddingBottom: "10px" }}>
              <a href={item.link} target="_blank">
                {item?.text ? item.text : item.link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
