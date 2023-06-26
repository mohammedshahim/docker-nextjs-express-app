import React, { useEffect, useState } from "react";
import axios from "axios";

const list = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:4000");
    setPosts(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              USER ID
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              USER CODE
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>TITLE</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, idx) => (
            <tr key={idx}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {post.userId}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {post.id}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {post.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default list;
