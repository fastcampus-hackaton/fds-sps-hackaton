import React from "react";
import { Link } from "react-router-dom";

export default class VideoResult extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-wrapper">
          <div className="home-content box">
            <div>당신의 반려견을 위한</div>
            <div>교육 추천 가이드를 받으세요.</div>
            <Link to="/result">
              <a className="button home-button is-primary is-outlined">
                시작하기
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
