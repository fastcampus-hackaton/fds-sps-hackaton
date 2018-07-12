import React from "react";
import Slider from "react-slick";
import withData from "../hocs/withData";
class OptionResult extends React.Component {
  static defaultProps = {
    name: "", // 이름
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
  state = {
    conditions: ["저체중", "정상체중", "과체중", "비만"] // 체형
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    // const { name, myPet, myOptions } = this.props;
    // ---- 임시
    const name = "콩이";
    const myPet = {
      species: "멍멍이",
      kind: "스피츠",
      gender: "암컷",
      agesNum: 12,
      agesTerm: "주",
      weight: 2
    };
    const myOptions = {
      feeds: ["b9"],
      behaviors: []
    };
    // ---- 임시
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    const foodSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    const weight = this.state.conditions[myPet.weight - 1];
    return (
      <section className="result-section">
        <h2 className="result-title">
          당신의 <em className="name">{name}</em>를 위한 교육 자료를 찾았어요.
        </h2>
        <div className="result-info">
          <div className="dog-img">
            <img
              src="https://cdn.glitch.com/8cd2401d-8e94-412c-9cda-525965fe1496%2F%EC%8A%A4%ED%94%BC%EC%B8%A0.png?1531287472926"
              alt="dog"
            />
          </div>
          <div className="dog-info">
            <span className="dog-info__input dog-info__input--em">{name}</span>의
            품종은 <span className="dog-info__input">{myPet.kind}</span>이고{" "}
            {""}
            <span className="dog-info__input">
              {myPet.agesNum} {myPet.agesTerm}
            </span>{" "}
            <span className="dog-info_input">{weight}</span>입니다.
          </div>
        </div>
        <div className="guideline">
          <div className="box is-shady">
            <h3 className="title">{myPet.kind}</h3>
            <p>
              <span>"{myPet.kind}"</span> 는 예민함을 선천적으로 가지고 태어나
              후천적 요인으로 인해 변화되어 형성되는 성격이 다양합니다. <br />
              폐쇄성이 강하게 자랄 수 있으니 일생 동안 산책이나 애견카페 등의
              꾸준한 사회성 훈련이 필요합니다.
            </p>
            <p>
              확실히 교육시키지 않으면 잘 물기 때문에 상당히 주의하여야 하며
              교육이 필요합니다.
            </p>
            <p>
              털이 가는 편이라 잘 날리고 빠지는 양도 많기 때문에 털을 자주
              빗어주세요.
            </p>
          </div>
        </div>
        <section className="suggest-section">
          <h3 className="title">{myPet.kind} 맞춤 교육을 추천해드려요.</h3>
          <div>
            <Slider {...settings}>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절1</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절2</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절3</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절4</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절5</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절6</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
            </Slider>
          </div>
        </section>
        <div className="guideline">
          <div className="box is-shady">
            <h2 className="title">
              {myPet.agesNum} {myPet.agesTerm}
            </h2>
            <p>종합백신(DHPPL)과 코로나 장염 예방접종이 필요한 시기입니다.</p>
            <p>
              생후 5주 - 7주는 사회화기입니다. 사람들과 교감이 시작되며 사회화에
              중요한 시기로 손길에 긍정적으로 반응할 수 있도록 해주세요.
            </p>
            <p>
              어미와 격리하는 최적기 입니다. 건사료를 모견과 분리하여
              급여해주세요.
            </p>
            <p>
              자견들 사이 서열싸움이 시작됩니다. 개별식기에 먹이를 급여해주세요.
              양질의 사료를 1일 3-4회 급여해주세요.
            </p>
          </div>
        </div>
        <section className="suggest-section">
          <h3 className="title">
            {myPet.agesNum} {myPet.agesTerm} 추천교육
          </h3>
          <div>
            <Slider {...settings}>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절1</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절2</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절3</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절4</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절5</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box is-shady">
                  <figure className="image">
                    <img
                      alt=""
                      src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </figure>
                  <p className="title">산책 예절6</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button is-primary is-outlined">교육하러 가기</a>
                </article>
              </div>
            </Slider>
          </div>
        </section>
        <div className="guideline">
          <div className="box is-shady">
            <h2 className="title">{weight}입니다.</h2>
            <p>
              일반적으로 큰 개는 성인 체중에 도달하는 데 더 오래 걸립니다. 작은
              개들은 약 10 개월 째에 거의 완전히 자라는 반면, 정말로 큰 개는 1
              년 반 정도 될 때까지 계속 자랄 것입니다.
            </p>
            <p>
              강아지가 먹는 음식은 자라기에 매우 중요합니다. 강아지에게 필요한
              영양소가 모두 들어있는 균형 잡힌 식단을 제공하고 있는지
              확인하십시오.
            </p>
            <p>
              강아지가 체중이 증가하지 않으면 수의사에게 연락하는 것이 가장
              좋습니다.
            </p>
          </div>
        </div>
        {!!myOptions.feeds.length && (
          <section className="suggest-section">
            <h3 className="title">
              <em className="name">{name}</em>를 위한 맞춤 사료를
              추천해보았어요.
            </h3>
            <div>
              <Slider {...foodSettings}>
                <div className="tile is-parent ">
                  <article className="tile is-child food-box is-shady">
                    <figure className="image">
                      <img
                        alt=""
                        src="https://www.costco.co.kr/medias/sys_master/images/ha4/hbe/9867682938910.jpg"
                      />
                    </figure>
                    <p className="title">뉴트리소스 어덜트 애견사료</p>
                    <p className="subtitle">52,900원</p>
                    <a className="button is-primary is-outlined">
                      사료사러 가기
                    </a>
                  </article>
                </div>
                <div className="tile is-parent ">
                  <article className="tile is-child food-box is-shady">
                    <figure className="image">
                      <img
                        alt=""
                        src="https://www.costco.co.kr/medias/sys_master/images/h87/ha0/9867731370014.jpg"
                      />
                    </figure>
                    <p className="title">
                      커클랜드 시그니춰 프리미엄 애견 사료
                    </p>
                    <p className="subtitle">47,900원</p>
                    <a className="button is-primary is-outlined">
                      사료사러 가기
                    </a>
                  </article>
                </div>
                <div className="tile is-parent test">
                  <article className="tile is-child food-box is-shady">
                    <figure className="image">
                      <img
                        alt=""
                        src="https://www.costco.co.kr/medias/sys_master/images/h95/h9c/9867682316318.jpg"
                      />
                    </figure>
                    <p className="title">뉴트리소스 라지브리드 퍼피 애견사료</p>
                    <p className="subtitle">47,990원</p>
                    <a className="button is-primary is-outlined">
                      사료사러 가기
                    </a>
                  </article>
                </div>
                <div className="tile is-parent test">
                  <article className="tile is-child food-box is-shady">
                    <figure className="image">
                      <img
                        alt=""
                        src="https://www.costco.co.kr/medias/sys_master/images/h6e/h71/9867682381854.jpg"
                      />
                    </figure>
                    <p className="title">
                      뉴트리소스 애견사료, 그레인프리 치킨
                    </p>
                    <p className="subtitle">39,990원</p>
                    <a className="button is-primary is-outlined">
                      사료사러 가기
                    </a>
                  </article>
                </div>
              </Slider>
            </div>
          </section>
        )}
        {!!myOptions.behaviors.length && (
          <div className="suggest-section">
            <h3 className="title is-3">
              <em className="name">{name}</em>를 위한 이상행동 가이드를 찾았어요
            </h3>
            <div>
              <div className="test behavior"> test </div>
              <div className="test behavior"> test </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default withData(OptionResult);
