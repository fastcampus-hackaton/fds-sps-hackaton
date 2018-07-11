import React from "react";

export default class VideoResult extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="video-wrapper">
        <div className="box is-shady">
          <h1 className="title is-3">사회화 훈련 교육자료</h1>
          <div className="edu-video">
            <iframe
              id="ytplayer"
              title="dog-edu"
              type="text/html"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/BngCfZoanbA"
              frameborder="0"
            />
          </div>
          <div>
            <p>반려동물의 사회화 훈련 교육이 궁금하셨죠?</p>
            <p>지금 제대로 된 사회화 훈련 교육을 확인해보세요.</p>
          </div>
        </div>
      </div>
    );
  }
}
