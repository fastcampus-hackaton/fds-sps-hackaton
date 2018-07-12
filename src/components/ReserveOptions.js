import React, { Component } from "react";

class ReserveOptions extends Component {
  static defaultProps = {
    title: {}, // 컴포넌트
    data: [], // 키워드 목록
    selectedData: [], // 선택된 키워드 목록
    onReset: () => {}, // 옵션을 disabled할 때 선택된 데이터를 리셋하는
    onRemoveSelect: () => {},
    onAddSelect: () => {}
  };
  state = {
    visible: true
  };
  handleOff = () => {
    this.setState({
      visible: false
    });
    this.props.onReset();
  };
  handleOn = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const {
      title,
      data,
      selectedData,
      onRemoveSelect,
      onAddSelect
    } = this.props;
    const { visible } = this.state;
    return (
      <section className="reserve-option">
        <h3 className="reserve-option__title">
          {title}
          <span className="reserve-option__button-box">
            <button
              className={`reserve-option__button ${
                !visible ? "reserve-option__button--disabled" : ""
              }`}
              onClick={this.handleOn}
            >
              받고 싶어요
            </button>/
            <button
              className={`reserve-option__button ${
                visible ? "reserve-option__button--disabled" : ""
              }`}
              onClick={this.handleOff}
            >
              싶지 않아요
            </button>
          </span>
        </h3>
        <div className="reserve-keywords">
          {data.map(
            (item, index) =>
              selectedData.includes(item) ? (
                <button
                  key={index}
                  className="reserve-keywords__item reserve-keywords__item--selected"
                  disabled={!visible}
                  onClick={() => onRemoveSelect(item)}
                >
                  {item}
                </button>
              ) : (
                <button
                  key={index}
                  className="reserve-keywords__item"
                  disabled={!visible}
                  onClick={() => onAddSelect(item)}
                >
                  {item}
                </button>
              )
          )}
        </div>
      </section>
    );
  }
}

export default ReserveOptions;
