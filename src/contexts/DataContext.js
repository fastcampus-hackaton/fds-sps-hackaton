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
    },
    kindsEdu: [
      {
        id: 1,
        code: "iX4mGr25h8o",
        title:
          "[강아지 훈련] 짖는 강아지 훈련 part.2 / 배변교육 / 카밍시그널 l 펫을부탁해",
        body:
          "짖는 강아지 훈련 part.1 잘 보셨나요?? 이제 더 이상 짖음문제로 스트레스 받지 마세요! 영상보고 따라하면 끝이거든요. 화제의 세미나 영상 그 두번째! 바로 시작합니다."
      },
      {
        id: 2,
        code: "QgT13KndSLE",
        title: "[보듬교육] 1부｜초보 보호자를 위한 강아지의 첫 1년 세미나",
        body:
          "행복한 하루 하루를 꿈꾸며 입양한 내 강아지와의 좌충우돌 1년! 어떻게 하면 사회화 시기를 잘 보내고 건강한 강아지로 성장할 수 있을지 강형욱 훈련사님의 실질적인 조언이 펼쳐집니다."
      },
      {
        id: 3,
        code: "Zb5zD9BGfXk",
        title: "[보듬 용쌤의 Tip] 산책 예절 교육을 위한 팁",
        body: "산책예절"
      },
      {
        id: 4,
        code: "kDtSGxpekNc",
        title: "[보듬교육] 2부｜초보 보호자를 위한 강아지의 첫 1년 세미나",
        body: ""
      },
      {
        id: 5,
        code: "3sysIjGyxXE",
        title: "[강형욱의 견종백과] 푸들 편 1부",
        body:
          "강형욱 훈련사님과 보호자님의 생활 밀착형 견종 수다! ‘강형욱의 견종백과’"
      }
    ],
    ageEdu: [
      {
        id: 1,
        code: "a92VMQxfRN0",
        title: "강아지의 성장주기 및 예방접종의 필요성",
        body: `에듀펫 반려동물문화교실 교육센터 : 서울시 서초구 양재천로 123 (양재천 카페거리)
          교육내용 
          1. B2C - 반려견 사회화훈련 / 문제행동교정 / 그룹클래스
          2. B2G - 서울시 / 여성가족부 등 반려동물 직업 위탁훈련 
          3. CSR - 테라피독양성 / 동물매개활동 / 유기견 입양매칭
          
          문의전화 : 02-577-6884
          제휴제안 : yoleyole@hanmail.net 
          대표강사 : 권혁필
          `
      },
      {
        id: 2,
        code: "GUhaUdqy9hc",
        title: "[개스맨] 광견병에 대한 대한 모든 것과 예방접종 하는 법!ㅣ반해",
        body: `우리 아이들 꼭꼭 맞아야 하는
          법으로 규제하고 있는 예방접종이 있어요!
          그건 바로 광견병 예방접종이에요~ `
      },
      {
        id: 3,
        code: "j0MG9-abUUU",
        title: "(개스맨) 강아지 사료양 계산법! 보호자님은 꼭 보세요! | 반해",
        body: `사료양을 표준보다 적게주면 면역력이 감소하고
        그렇다해서 많이 주게되면 살이 쪄서 비만이 되어요.`
      },
      {
        id: 4,
        code: "T_6GlRKUwfI",
        title: "[Q&A] 사료를 급하게 먹는 강아지 - 서지형 클리커트레이너",
        body: `"무엇이든 물어보시개~"
        사료만 부었다하면 게눈감추듯 사라지는 사료!`
      },
      {
        id: 5,
        code: "JQjxR0fpNxA",
        title: "세상에 나쁜 개는 없다 - 밥 안 먹는 개 쌤_#002",
        body: `공식 홈페이지 : http://home.ebs.co.kr/baddog/main
        밥 안 먹는 개 쌤`
      }
    ]
  };

  initializeData = () => {
    this.setState({
      name: "",
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
    });
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
      onStartReserve: this.initializeData,
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
