import React, { Component } from "react";
import ComboBox from "./ComboBox";

class Reserve extends Component {
  state = {
    visible: true,
    brand: "브랜드",
    species: ["멍멍이", "고양이"],
    kinds: {
      dogs: ["스피츠", "섀퍼드", "말티즈"],
      cats: ["코리안 숏컷", "아메리칸 숏컷", "페르시안"]
    },
    agesTerm: ["주", "개월", "연"],
    genders: ["암컷", "수컷"],
    weights: [
      "많이 말랐어요",
      "조금 말랐어요",
      "적당해요",
      "통통해요",
      "뚱뚱해요"
    ],
    myPet: {
      name: "",
      species: "",
      kind: "",
      gender: "",
      agesNum: 1,
      agesTerm: "",
      weight: 2
    }
  };
  handleChangeName = e => {
    const value = e.target.value;
    this.setState(prevState => ({
      myPet: {
        ...prevState.myPet,
        name: value
      }
    }));
  };
  handleContinue = () => {
    this.setState({
      visible: true
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
    const {
      visible,
      brand,
      species,
      kinds,
      agesTerm,
      genders,
      weights,
      myPet
    } = this.state;
    return (
      <div>
        <h2 className="reserve-title">
          안녕하세요. {brand}가 당신의 반려동물의 맞는 교육가이드를 추천
          해드릴게요.<br />
          당신의 반려동물을 소개 해줄래요?
        </h2>
        <form className="reserve-form">
          <label htmlFor="reserve-name">
            내 반려동물의 이름은
            <input
              name="name"
              id="reserve_name"
              type="text"
              value={myPet.name}
              onChange={this.handleChangeName}
              autoComplete="off"
              required
            />
            에요.
          </label>
          {!visible ? (
            <button
              type="button"
              onClick={this.handleContinue}
              disabled={myPet.name ? false : true}
            >
              조금 더 소개할까요?
            </button>
          ) : (
            <React.Fragment>
              <section className="reserve-info">
                <h3 className="reserve-form__title">
                  이름이 좋네요, {myPet.name}의 특징은 뭐에요?
                </h3>
                <div className="reserve-form__field">
                  <div className="reserve-form__paragraph">
                    {myPet.name}는
                    <ComboBox
                      options={species}
                      defaultText={"반려동물을 선택해주세요"}
                      selected={myPet.species}
                      onSelectItem={this.changeSpecies}
                    />이며,
                    <ComboBox
                      options={
                        myPet.species === "멍멍이" ? kinds.dogs : kinds.cats
                      }
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
                      defaultText={"성별을 선택해주세요"}
                      selected={myPet.gender}
                      onSelectItem={this.changeGender}
                    />이구요. 나이는
                    <input
                      type="number"
                      min="0"
                      value={myPet.agesNum}
                      onChange={this.handleChangeAge}
                      required
                    />
                    <ComboBox
                      options={agesTerm}
                      selected={myPet.agesTerm}
                      onSelectItem={this.changeAgesTerm}
                    />
                    정도 되었어요.
                  </div>
                </div>
              </section>
              <section className="reserve-option">
                <h3 className="reserve-form__title">
                  {myPet.name}에 대해서 조금 더 자세히 말해줄래요?
                </h3>
                <div className="reserve-form__paragraph">
                  그리고 {myPet.name}은/는...
                </div>
                <div
                  className={`reserve-weight reserve-weight--${myPet.species}`}
                >
                  {weights.map((item, index) => (
                    <div className={`weight-${index}`} key={index}>
                      <div className="weight-photo" />
                      <div
                        className="weight-txt"
                        onClick={() => this.handleChangeWeight(index)}
                      >
                        <div
                          className={`weight-checkbox ${myPet.weight ===
                            index && "weight-checkbox--current"}`}
                        />
                        <span className="text">{item}</span>
                      </div>
                    </div>
                  ))}
                  {/* <label htmlFor="weight-0" className="">
                    <input id="weight-0" name="weight" type="radio" />
                    <div className="weight-photo" />
                    <span className="text">많이 말랐어요</span>
                  </label>
                  <label htmlFor="weight-1">
                    <input id="weight-1" name="weight" type="radio" />
                    <div className="weight-photo" />
                    <span className="text">조금 말랐어요</span>
                  </label>
                  <label htmlFor="weight-2">
                    <input id="weight-2" name="weight" type="radio" />
                    <div className="weight-photo" />
                    <span className="text">적당해요</span>
                  </label>
                  <label htmlFor="weight-3">
                    <input id="weight-3" name="weight" type="radio" />
                    <div className="weight-photo" />
                    <span className="text">통통해요</span>
                  </label>
                  <label htmlFor="weight-4">
                    <input id="weight-4" name="weight" type="radio" />
                    <div className="weight-photo" />
                    <span className="text">뚱뚱해요</span>
                  </label> */}
                </div>
              </section>
            </React.Fragment>
          )}
        </form>
      </div>
    );
  }
}

export default Reserve;
