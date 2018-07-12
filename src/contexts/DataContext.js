import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class DataProvider extends Component {
  state = {
    name: "",
    species: ["멍멍이", "야옹이"],
    kinds: {
      dogs: ["스피츠", "섀퍼드", "말티즈"],
      cats: ["코리안 숏컷", "아메리칸 숏컷", "페르시안"]
    },
    agesTerm: ["주", "개월", "살"],
    genders: ["암컷", "수컷"],
    weights: [
      {
        title: "말랐어요",
        body: "만졌을 때 지방이 없고 뼈가 느껴져요."
      },
      {
        title: "적당해요",
        body: "몸통이 얇고 적당해요. 지방으로 덮이고 갈비뼈가 느껴져요."
      },
      {
        title: "통통해요",
        body:
          "지방이 다소 많고 허리 아랫부분, 옆에서 본 복부는 거의 일자형이에요."
      },
      {
        title: "뚱뚱해요",
        body: "두꺼운 지방이 덮여서 갈비 뼈가 쉽게 만질 수 없어요."
      }
    ],
    feedKeywords: [
      "유기농",
      "프리미엄",
      "임신용",
      "다이어트",
      "모질개선용",
      "피부개선용",
      "뼈/관절 강화",
      "위/장 개선용",
      "습식"
    ],
    behaviorKeywords: [
      "제자리 점프",
      "땅 파기",
      "넘치는 식욕",
      "쓰레기통 뒤지기",
      "소심한 성격",
      "물건 물어뜯기",
      "아무데나 배변"
    ],
    myPet: {
      species: "",
      kind: "",
      gender: "",
      agesNum: 1,
      agesTerm: "",
      weight: 0
    },
    myOptions: {
      feeds: [],
      behaviors: []
    }
  };

  changeName = value => {
    this.setState({
      name: value
    });
  };

  changeSpecies = item => {
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        species: item,
        kind: ""
      }
    }));
  };

  changeKinds = item => {
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        kind: item
      }
    }));
  };

  changeGender = item => {
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        gender: item
      }
    }));
  };

  changeAgesTerm = item => {
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        agesTerm: item
      }
    }));
  };

  resetKeywords = stateName => {
    this.setState(prevState => ({
      myOptions: {
        ...prevState.myOptions,
        [stateName]: []
      }
    }));
  };

  addKeywords = (stateName, item) => {
    this.setState(prevState => ({
      myOptions: {
        ...prevState.myOptions,
        [stateName]: prevState.myOptions[stateName].concat(item)
      }
    }));
  };

  removeKeywords = (stateName, item) => {
    this.setState(prevState => ({
      myOptions: {
        ...prevState.myOptions,
        [stateName]: prevState.myOptions[stateName].filter(
          beforeItem => beforeItem !== item
        )
      }
    }));
  };

  changeAge = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        agesNum: value
      }
    }));
  };

  changeWeight = index => {
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        weight: index
      }
    }));
  };

  render() {
    const value = {
      ...this.state,
      onChangeName: this.changeName,
      onChangeSpecies: this.changeSpecies,
      onChangeKinds: this.changeKinds,
      onChangeGender: this.changeGender,
      onChangeAgesTerm: this.changeAgesTerm,
      onResetKeywords: this.resetKeywords,
      onAddKeywords: this.addKeywords,
      onRemoveKeywords: this.removeKeywords,
      onChangeAge: this.changeAge,
      onChangeWeight: this.changeWeight
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DataProvider, Consumer as DataConsumer };
