import React, { useEffect, useState } from "react";
import axios from "axios";

export async function getStaticProps() {
  // Fetch data from an API or any other data source
  const { data } = await axios.get("http://localhost:4000");

  // Return the fetched data as props
  return {
    props: {
      data: data.data,
    },
  };
}

const list = ({ data }) => {
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
          {data.map((post, idx) => (
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
