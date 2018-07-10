import React, { Component } from "react";

const { Provider, Consumer } = React.createContext;

class DataProvider extends Component {
  state = {
    input: {
      specie: "", // 멍멍이 / 고양이
      kind: "", // 품종: 셰퍼드, 진돗개 / 페르시안, 코숏
      gender: "", // 암 / 수
      old: "",
      weight: 0, // 0 - 5[저체중 - 비만]
      dogs: {
        kinds: {
          shepard: "셰퍼드 이렇게 키워주세요",
          maltese: "말티즈 이렇게 키워주세요",
          chihuahua: "치와와 이렇게 키워주세요"
        },
        olds: {
          week_1: "1주차에 뭐 해주세요",
          month_1: "1개월에 뭐 해주세요",
          year_1: "1년에 뭐 해주세요."
        }
      },
      cats: {
        kinds: {
          persian: "페르시안은 이렇게 키워주세요",
          koreanshot: "코숏은 이렇게 키워주세요"
        },
        olds: {
          week_1: "1주차에 뭐 해주세요",
          month_1: "1개월에 뭐 해주세요",
          year_1: "1년에 뭐 해주세요."
        }
      },
      feeds: {}
    }
  };
  render() {
    const value = {
      ...this.state
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DataProvider, Consumer as DataConsumer };
