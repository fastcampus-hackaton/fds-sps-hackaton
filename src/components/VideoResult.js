import React from "react";

export default class VideoResult extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h1>산책예절 교육자료</h1>
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
            <p>반려동물의 산책 교육이 궁금하셨죠?</p>
            <p>지금 제대로 된 산책 예절 교육을 확인해보세요.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
