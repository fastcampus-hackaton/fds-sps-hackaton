import React from "react";
import { Link } from "react-router-dom";

export default function BehaviorContentItem(props) {
  const { id, title, code } = props.value;
  return (
    <div className="edu-card is-shady">
      <div className="edu-card__thumbnail">
        <img
          src={`https://img.youtube.com/vi/${code}/sddefault.jpg`}
          alt={title}
        />
      </div>
      <div className="edu-card__title">
        <em>{title}</em>
      </div>
      <Link to={`/edu/${id}`} className="edu-card__button">
        교육 보기
      </Link>
    </div>
  );
}
