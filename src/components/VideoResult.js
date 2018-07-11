import React from "react";

export default class VideoResult extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>사회화 훈련 교육자료</h1>
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
    );
  }
}
