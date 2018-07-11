import React from "react";
import { Link } from "react-router-dom";

import Steps from "./Steps";

export default function Layout(props) {
  return (
    <React.Fragment>
      <header className="header">
        <h1 className="logo">
          <Link to="/">FastPet</Link>
        </h1>
        <span className="sub-title">
          당신의 반려동물을 위한 교육 추천 가이드
        </span>
      </header>
      <div className="contents-step">
        <Steps current={props.current} />
      </div>
      <div className="contents">{props.children}</div>
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="content has-text-centered">
            <p className="footer-copyright">&copy; 2018 FastCampus Hackaton</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
