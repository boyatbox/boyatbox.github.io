import { bookmarks } from "./Data/Bookmarks";
export function Post(props) {
  return (
    <div>
      <ul style={{ fontSize: "1.2rem" }}>
        {bookmarks.map((item, index) => {
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
