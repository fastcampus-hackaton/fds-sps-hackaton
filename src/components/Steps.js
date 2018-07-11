import React, { Component } from "react";

export default class Steps extends Component {
  static defaultProps = {
    steps: [
      "펫 이름이 뭐에요",
      "좀 더 소개해주세요",
      "펫을 위한 맞춤 결과에요"
    ],
    current: 0
  };
  render() {
    const { current, steps } = this.props;
    return (
      <div className="steps">
        {steps.map(
          (item, index) =>
            index < current ? (
              <div key={index} className="steps__item steps__item--before">
                <span className="steps__number">
                  <span className="icon">
                    <i className="fas fa-check" />
                  </span>
                </span>
                <span className="steps__title">{item}</span>
              </div>
            ) : index === current ? (
              <div key={index} className="steps__item steps__item--current">
                <span className="steps__number">{index + 1}</span>
                <span className="steps__title">{item}</span>
              </div>
            ) : (
              <div key={index} className="steps__item">
                <span className="steps__number">{index + 1}</span>
                <span className="steps__title">{item}</span>
              </div>
            )
        )}
      </div>
    );
  }
}
