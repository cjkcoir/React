// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
import axios from "axios";

function FetchDataAxiosUseEffect() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/familydb")
      .then((res) => {
        console.log(res);
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="container">
      <h4 className="text-primary">Fetch Data by useFeect</h4>

      <table className="table table-bordered table-hover">
        <thead className="table-primary">
          <th>ID</th>
          <th>Name</th>
          <th> Role</th>
        </thead>
        <tbody>
          {posts.map((post, i) => {
            return (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FetchDataAxiosUseEffect;
