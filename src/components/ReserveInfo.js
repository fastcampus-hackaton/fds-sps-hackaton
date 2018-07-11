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
    weights: ["말랐어요", "적당해요", "통통해요", "뚱뚱해요"],
    myPet: {
      species: "",
      kind: "",
      gender: "",
      agesNum: 1,
      agesTerm: "",
      weight: 2
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
            이름이 좋네요, {name}의 특징은 뭐에요?
          </h2>
          <div className="reserve-form__field">
            <div className="reserve-form__paragraph">
              {name}는
              <ComboBox
                styles={{ width: "150px" }}
                options={species}
                defaultText={"멍멍이/고양이"}
                selected={myPet.species}
                onSelectItem={this.changeSpecies}
              />이며,
              <ComboBox
                styles={{ width: "200px" }}
                options={myPet.species === "멍멍이" ? kinds.dogs : kinds.cats}
                defaultText={"품종을 선택해주세요"}
                selected={myPet.kind}
                onSelectItem={this.changeKinds}
              />
              에요.
            </div>
            <div className="reserve-form__paragraph">
              성별은
              <ComboBox
                options={genders}
                defaultText={"성별"}
                selected={myPet.gender}
                onSelectItem={this.changeGender}
              />이구요. 나이는
              <input
                style={{ width: "50px" }}
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
          </div>
        </section>
        <section className="reserve-section">
          <h2 className="reserve-title">
            {name}에 대해서 조금 더 자세히 말해줄래요?
          </h2>
          <div className="reserve-form__paragraph">그리고 {name}은/는...</div>
          <div className={`reserve-weight reserve-weight--${myPet.species}`}>
            {weights.map((item, index) => (
              <div className={`weight-${index}`} key={index}>
                <div className="weight-photo" />
                <div
                  className="weight-txt"
                  onClick={() => this.handleChangeWeight(index)}
                >
                  <div
                    className={`weight-checkbox ${myPet.weight === index &&
                      "weight-checkbox--current"}`}
                  />
                  <span className="text">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default withData(ReserveInfo);
