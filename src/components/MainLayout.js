import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <section className="hero is-success is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div id="navbarMenuHeroC" className="navbar-menu">
                {/* <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-success is-inverted">
                      <span className="icon">
                        <i className="fab fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div> */}
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">FastPET</h1>
            <h2 className="subtitle">
              당신의 반려동물을 위한 교육 추천 가이드
            </h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a>0. 시작하기</a>
                </li>
                <li>
                  <a>1. PET 이름 등록</a>
                </li>
                <li>
                  <a>2. PET 정보 등록</a>
                </li>
                <li>
                  <a>3. 당신을 위한 가이드라인</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <div className="layout-center">{props.children}</div>
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="content has-text-centered">
            <p className="footer-copyright">&copy; 2018 FastCampus Hackaton</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
