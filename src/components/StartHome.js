import React from "react";
import { Link } from "react-router-dom";

export default class StartHome extends React.Component {
  // componentDidMount() {
  //   window.scrollTo(0, 100);
  // }

  render() {
    return (
      <div className="home">
        <h1 className="logo">
          <Link to="/">FastPet</Link>
        </h1>
        <div className="home-wrapper">
          <div className="home-content">
            <h2 className="home-content__title">
              당신의 반려동물을 위한<br />교육 추천 가이드를 받으세요.
            </h2>
            <p className="home-content__txt">
              맞춤 교육 가이드를 통해<br />
              편리하게 제공되는 교육법을 확인하세요.
            </p>
            <Link to="/reserve/1" className="home-button">
              시작하기
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
