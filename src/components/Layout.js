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
      </header>
      <div className="contents">
        <Steps current={props.current} />
        {props.children}
      </div>
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
