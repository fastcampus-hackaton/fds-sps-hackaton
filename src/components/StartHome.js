import React from "react";
import { Link } from "react-router-dom";

export default class VideoResult extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 100);
  }

  render() {
    return (
      <div className="home">
        <div className="home-wrapper">
          <div className="home-content box">
            <div>당신의 반려동물을 위한</div>
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
