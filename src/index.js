import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://www.reddit.com/r/reactjs.json").then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <table border="1" cellSpacing="0">
        <tr>
          <th align="left">Title</th>
          <th>Score</th>
          <th>Comments</th>
        </tr>
        {posts.map(post => (
          <tr key={post.id}>
            <td>
              <a href={post.url}>{post.title}</a>
            </td>
            <td>{post.score}</td>
            <td>{post.num_comments}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));
