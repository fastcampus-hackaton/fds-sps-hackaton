import React from "react";

export default function MainLayout(props) {
  return (
    <div className="main-layout">
      <section class="hero is-primary is-bold header">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">FastPET</h1>
          </div>
        </div>
      </section>
      <div className="layout-center">{props.children}</div>
      <footer class="footer">
        <div class="content has-text-centered">
          <div class="content has-text-centered">
            <p className="footer-copyright">&copy; 2018 FastCampus Hackaton</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
