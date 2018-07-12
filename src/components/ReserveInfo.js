import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComboBox from "./ComboBox";
import ReserveOptions from "./ReserveOptions";
import withData from "../hocs/withData";

class ReserveInfo extends Component {
  static defaultProps = {
    name: "", // 이름
    species: [], // 반려동물 종류
    kinds: [], // 품종
    agesTerm: [], // 주/개월/살
    genders: [], // 암/수
    weights: [], // 체중
    feedKeywords: [], // 사료 키워드
    behaviorKeywords: [], // 이상행동 키워드
    myPet: {}, // 사용자 펫 정보
    myOptions: {}, // 사용자 선택 키워드
    onChangeKinds: item => {}, // 사용자 펫 종류
    onChangeSpecies: item => {}, // 사용자 펫 품종
    onChangeGender: item => {}, // 사용자 펫 성별
    onChangeAgesTerm: item => {}, // 사용자 펫 주/개월/연 여부 저장
    onChangeAge: e => {}, // 사용자 펫 나이의 숫자 정보 저장
    onResetKeywords: stateName => {}, // 선택 옵션 초기화
    onAddKeywords: (stateName, item) => {}, // 선택 옵션 추가
    onRemoveKeywords: (stateName, item) => {}, // 선택 옵션 삭제
    onChangeWeight: index => {} // 사용자 펫 체중 저장
  };

  render() {
    const {
      name,
      species,
      kinds,
      agesTerm,
      genders,
      weights,
      feedKeywords,
      behaviorKeywords,
      myPet,
      myOptions,
      onChangeSpecies,
      onChangeKinds,
      onChangeGender,
      onChangeAgesTerm,
      onResetKeywords,
      onAddKeywords,
      onRemoveKeywords,
      onChangeAge,
      onChangeWeight
    } = this.props;
    const inputVerify = Object.values(myPet).some(item => !item);
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
              onSelectItem={onChangeSpecies}
            />이며,
            <ComboBox
              options={myPet.species === "멍멍이" ? kinds.dogs : kinds.cats}
              defaultText={"품종을 선택해주세요"}
              selected={myPet.kind}
              onSelectItem={onChangeKinds}
            />
            에요.
          </div>
          <div className="reserve-section__paragraph">
            성별은
            <ComboBox
              options={genders}
              defaultText={"성별"}
              selected={myPet.gender}
              onSelectItem={onChangeGender}
            />이구요. 나이는
            <input
              style={{ width: "70px" }}
              className="reserve-input"
              type="number"
              min="0"
              value={myPet.agesNum}
              onChange={onChangeAge}
              required
            />
            <ComboBox
              options={agesTerm}
              defaultText={"주/개월/연"}
              selected={myPet.agesTerm}
              onSelectItem={onChangeAgesTerm}
            />
            정도 되었어요.
          </div>
        </section>
        <section className="reserve-section" ref={this.sectionRef}>
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
                    myPet.weight === index + 1 ? "weight-txt--current" : ""
                  }`}
                  onClick={() => onChangeWeight(index + 1)}
                >
                  <div className="weight-checkbox" />
                  <div className="weight-title">{item.title}</div>
                  <div className="weight-description">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {!inputVerify && (
          <React.Fragment>
            <section className="reserve-section">
              <h2 className="reserve-title">
                <em className="name">{name}</em>에 대한 교육을 준비하고 있어요,
                <br />혹시 더 알고 싶은 것이 있나요?
              </h2>
              <ReserveOptions
                title={
                  <React.Fragment>
                    <em className="name">{name}</em>에 대한 추천가이드를
                  </React.Fragment>
                }
                data={feedKeywords}
                selectedData={myOptions.feeds}
                onReset={() => onResetKeywords("feeds")}
                onAddSelect={item => onAddKeywords("feeds", item)}
                onRemoveSelect={item => onRemoveKeywords("feeds", item)}
              />
              <ReserveOptions
                title={
                  <React.Fragment>
                    <em className="name">{name}</em>의 이상행동에 대한 가이드를
                  </React.Fragment>
                }
                data={behaviorKeywords}
                selectedData={myOptions.behaviors}
                onReset={() => onResetKeywords("behaviors")}
                onAddSelect={item => onAddKeywords("behaviors", item)}
                onRemoveSelect={item => onRemoveKeywords("behaviors", item)}
              />
            </section>
            <section className="reserve-section">
              <h2 className="reserve-title">
                이제 <em className="name">{name}</em>의 가이드를 보러갈까요?
              </h2>
              <div className="reserve-button-box">
                <Link className="reserve-button" to="/oresult">
                  Go !!!
                </Link>
              </div>
            </section>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withData(ReserveInfo);
