import React, { Component } from "react";
import { Link } from "react-router-dom";
import withData from "../hocs/withData";

class ReserveName extends Component {
  static defaultProps = {
    name: "", // 이름
    onChangeName: () => {} // 이름 바꾸는 함수
  };
  handleChangeName = e => {
    const value = e.target.value;
    this.props.onChangeName(value);
  };

  render() {
    const { name } = this.props;
    return (
      <section className="reserve-section">
        <h2 className="reserve-title">
          안녕하세요. "브랜드"가 당신의 반려동물에 맞는 <br />교육가이드를 추천
          해드릴게요.
          <em className="reserve-title__em">
            당신의 반려동물을 소개 해줄래요?
          </em>
        </h2>
        <label htmlFor="reserve-name">
          내 반려동물의 이름은
          <input
            className="reserve-input"
            name="name"
            id="reserve_name"
            type="text"
            value={name}
            onChange={this.handleChangeName}
            autoComplete="off"
            required
          />
          에요.
        </label>
        {name && (
          <div className="reserve-button-box">
            <Link className="reserve-button" to="/step/2">
              조금 더 소개할까요?
            </Link>
          </div>
        )}
      </section>
    );
  }
}

export default withData(ReserveName);
