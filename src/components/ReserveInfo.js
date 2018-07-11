import React, { Component } from "react";
import ComboBox from "./ComboBox";
import withData from "../hocs/withData";

class ReserveInfo extends Component {
  static defaultProps = {
    name: "" // 이름
  };

  state = {
    brand: "브랜드",
    species: ["멍멍이", "야옹이"],
    kinds: {
      dogs: ["스피츠", "섀퍼드", "말티즈"],
      cats: ["코리안 숏컷", "아메리칸 숏컷", "페르시안"]
    },
    agesTerm: ["주", "개월", "연"],
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
    myPet: {
      species: "",
      kind: "",
      gender: "",
      agesNum: 1,
      agesTerm: "",
      weight: 1
    }
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
  handleChangeAge = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        agesNum: value
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
  handleChangeWeight = index => {
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        weight: index
      }
    }));
  };

  render() {
    const { name } = this.props;
    const { species, kinds, agesTerm, genders, weights, myPet } = this.state;
    return (
      <div className="reserve-info">
        <section className="reserve-section">
          <h2 className="reserve-title">
            이름이 좋네요, <em className="name">{name}</em>의 특징은 뭐에요?
          </h2>
          <div className="reserve-section__paragraph">
            <em className="name">{name}</em>는
            <ComboBox
              options={species}
              defaultText={"반려동물"}
              selected={myPet.species}
              onSelectItem={this.changeSpecies}
            />이며,
            <ComboBox
              options={myPet.species === "멍멍이" ? kinds.dogs : kinds.cats}
              defaultText={"품종을 선택해주세요"}
              selected={myPet.kind}
              onSelectItem={this.changeKinds}
            />
            에요.
          </div>
          <div className="reserve-section__paragraph">
            성별은
            <ComboBox
              options={genders}
              defaultText={"성별"}
              selected={myPet.gender}
              onSelectItem={this.changeGender}
            />이구요. 나이는
            <input
              style={{ width: "70px" }}
              className="reserve-input"
              type="number"
              min="0"
              value={myPet.agesNum}
              onChange={this.handleChangeAge}
              required
            />
            <ComboBox
              options={agesTerm}
              defaultText={"주/개월/연"}
              selected={myPet.agesTerm}
              onSelectItem={this.changeAgesTerm}
            />
            정도 되었어요.
          </div>
        </section>
        <section className="reserve-section">
          <h2 className="reserve-title">
            <em className="name">{name}</em>에 대해서 조금 더 자세히 말해줄래요?
          </h2>
          <div className="reserve-form__paragraph">
            그리고 <em className="name">{name}</em>은/는...
          </div>
          <div
            className={`reserve-weight reserve-weight--${
              myPet.species === "야옹이" ? "cat" : "dog"
            }`}
          >
            {weights.map((item, index) => (
              <div
                className={`reserve-weight__item weight-${index}`}
                key={index}
              >
                <div className="weight-photo" />
                <div
                  className={`weight-txt ${
                    myPet.weight === index ? "weight-txt--current" : ""
                  }`}
                  onClick={() => this.handleChangeWeight(index)}
                >
                  <div className="weight-checkbox" />
                  <div className="weight-title">{item.title}</div>
                  <div className="weight-description">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="reserve-section">
          <h2 className="reserve-title">
            <em className="name">{name}</em>에 대한 교육을 준비하고 있어요,
            <br />혹시 더 알고 싶은 것이 있나요
          </h2>
          <section className="reserve-option">
            <h3 className="reserve-option__title">
              <div className="reserve-switch reserve-switch--on" />
              <em className="name">{name}</em>의 맞춤사료를 추천 받고 싶어요
            </h3>
          </section>
          <section>
            <h3 className="reserve-option__title">
              <div className="reserve-switch" />
              <em className="name">{name}</em>의 맞춤사료를 추천 받고 싶어요
            </h3>
          </section>
        </section>
      </div>
    );
  }
}

export default withData(ReserveInfo);
