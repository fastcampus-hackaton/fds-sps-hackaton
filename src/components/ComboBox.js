import React, { Component } from "react";

export default class ComboBox extends Component {
  static defaultProps = {
    styles: {}, // 스타일
    options: [], // 옵션
    selected: "", // 선택된 값
    defaultText: "", // 디폴트 텍스트
    onSelectItem: item => {} // 선택된 아이템
  };
  state = {
    visible: false,
    value: null
  };

  handleShow = () => {
    this.setState({
      visible: true
    });
    this.comboRef.current.focus();
  };
  handleClose = () => {
    this.setState({
      visible: false
    });
  };
  handleSelect = menu => {
    this.setState({
      value: menu,
      visible: false
    });
    this.props.onSelectItem(menu);
  };
  comboRef = React.createRef();

  render() {
    const { styles, options, defaultText, selected } = this.props;
    const { visible } = this.state;
    return (
      <div
        className="combobox"
        onBlur={this.handleClose}
        onFocus={this.handleShow}
        ref={this.comboRef}
        tabIndex={visible ? 1 : 0}
        style={styles}
      >
        <div
          className={
            selected
              ? "combobox-select"
              : "combobox-select combobox-select--default"
          }
          onClick={this.handleShow}
        >
          {selected
            ? selected
            : defaultText
              ? defaultText
              : "옵션을 선택해주세요"}
          <span className="icon">
            <i className="fas fa-angle-down" />
          </span>
        </div>
        {visible && (
          <div className="combobox-menu">
            {options.map(menu => (
              <div
                className={`combobox-menu__item ${
                  selected === menu ? "selected" : ""
                }`}
                key={menu}
                onClick={e => this.handleSelect(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
