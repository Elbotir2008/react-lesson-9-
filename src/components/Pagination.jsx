import axios from "axios";
import React, { memo, useEffect, useState } from "react";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // PAGINATION
  let limit = 10;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/news?_page=${page}&_limit=${limit}`
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/news");
        setAllPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllPosts();
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.id} {post.title}
          </li>
        ))}
        <div>
          {arrBtns?.map((item) => (
            <button key={item} onClick={() => setPage(item)}>
              {item}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default memo(Posts);
