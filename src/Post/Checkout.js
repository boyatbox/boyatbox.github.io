import { bookmarks } from "../Data/BookmarkData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Checkout(props) {
  const filterBookmarks = bookmarks.filter((item) => item.link);
  return (
    <div>
      <div className="text-div">
        {/* <span>
          <svg
            fill="pink"
            width="16"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0L8.59 1.41L12.17 5H0V7H12.17L8.59 10.59L10 12L16 6L10 0Z"></path>
          </svg>
        </span> */}
        <section>
          <h4>What happens when we checkout a branch</h4>
          <ul>
            <li>It changes HEAD to point to the new branch ref</li>
            <li>Populates the Index with the snapshot of that commit</li>
            <li>Copies the contents of the Index into the Working Directory</li>
          </ul>
        </section>
        <section>
          <h4>Git Checkout Command</h4>
          <p>
            The git checkout command is used to switch branches and restore
            working tree files. It may be used on commits, branches, and files.
            It comes in handy when moving between multiple features in a single
            repository.
          </p>
          <table>
            <tbody>
              <tr>
                <td>git checkout branch-name</td>
                <td>
                  Checkout a branch to work on it. Files are copied from the
                  commit to index and working tree.
                </td>
              </tr>

              <tr>
                <td>git checkout commit-hash</td>
                <td>
                  Checkout a specific commit to inspect the content or make
                  discardable commit.
                </td>
              </tr>
              <tr>
                <td>git checkout main~2 file-name</td>
                <td>
                  Checkout a file from a specific commit. Local unstaged changes
                  to file is discarded.
                </td>
              </tr>
              <tr>
                <td>git checkout file-name</td>
                <td>
                  Checkout a file from index. Local unstaged changes to file is
                  discarded.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h4>Recover file from stage/index</h4>
          <ul>
            <li>
              Create a new repo. <span className="code">git init.</span>
            </li>
            <li>
              Create new file and add to index.
              <span className="code">git add file-name.</span>
            </li>
            <li>Delete the file from working dir.</li>
            <li>
              Recover file from stage.
              <span className="code">git checkout file-name</span>
            </li>
          </ul>
        </section>
        <section>
          <h4>Recover file from commit</h4>
          <ul>
            <li>Make some changes to a file in working directory.</li>
            <li>
              Run
              <span className="code">git checkout HEAD main.js</span> or{" "}
              <span className="code">git checkout main main.js</span>. File will
              be restored to the version present in the commit. Local changes to
              the file will be discarded.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
