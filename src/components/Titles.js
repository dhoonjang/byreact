import React from "react";
import { Link } from "react-router-dom";

const Titles = ({ titles }) => {
  return (
    <div>
      <ul>
        {titles.map(title => (
          <li>
            <Link to={`/post/${title.id}`} key={title.id}>
              {title.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Titles;
