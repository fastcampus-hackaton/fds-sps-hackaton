import React from "react";

export default function BehaviorContentItem(props) {
  const { title, thumbnail, body } = props.value;
  return (
    <div className="behavior-card">
      <div className="behavior-card__top">
        <em className="behavior-card__title">{title}</em>
        <div className="behavior-card__thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
      </div>
      <p className="behavior-card__txt">{body}</p>
    </div>
  );
}
