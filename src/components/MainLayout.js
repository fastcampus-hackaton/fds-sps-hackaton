import React from "react";

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <header className="header">헤더입니당</header>
      <div className="layout-center">{props.children}</div>
      <footer className="footer">푸터입니당</footer>
    </div>
  );
}
