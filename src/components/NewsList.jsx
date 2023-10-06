import React from "react";

const NewsList = ({ news }) => {
  return (
    <div className="d-flex gap-3 py-3">
      {news.map((ns) => (
        <div className="card" key={ns.id}>
          <div className="img">
            <h3>{ns.category}</h3>
          </div>
          <p className="description">{ns.description}</p>
          <div className="flex-class">
            <p>{ns.date}</p>
            <p>Floyd Miles</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
