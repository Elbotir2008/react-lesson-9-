import axios from "axios";
import React, { useEffect, useState } from "react";
import { memo } from "react";
import NewsList from "./NewsList";
import OneNew from "./OneNew";
import { NavLink, Route, Routes } from "react-router-dom";
const News = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedContacts, setSearchedContacts] = useState([]);
  const fetchAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/news");
      const data = await res.data;
      setNews(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setSearchedContacts(news);
  }, []);
  useEffect(() => {
    fetchAllPosts();
  }, []);
  useEffect(() => {
    setSearchedContacts(
      news.filter((news) =>
        news.description.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCard = () => {
    localStorage.setItem("cardId", JSON.stringify(news.id));
  };
  // localStorage.clear();

  return (
    <div className="container">
      <div className="news-title">
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
        <h1>Our Latest Posts</h1>
      </div>
      <div className="new-cards">
        {news.map((nw) => (
          <div className="card" key={nw.id} onClick={handleCard}>
            <h4>{nw.id}</h4>
            <NavLink to="/new">
              <div className="img">
                <h3>{nw.category}</h3>
              </div>
            </NavLink>
            <p className="description">{nw.description}</p>
            <div className="flex-class">
              <p>{nw.date}</p>
              <p>Floyd Miles</p>
            </div>
          </div>
        ))}
      </div>
      <NewsList news={searchedContacts} />
      <OneNew handleCard={handleCard} />
    </div>
  );
};

export default memo(News);
