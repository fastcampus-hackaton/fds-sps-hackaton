import React from "react";
import Slider from "react-slick";
import withData from "../hocs/withData";
import BehaviorContentCard from "../components/BehaviorContentCard";
import EduContentCard from "../components/EduContentCard";

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
    },
    eduContents: []
  };
  state = {
    conditions: ["저체중", "정상체중", "과체중", "비만"] // 체형
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { name, myPet, myOptions, eduContents } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const foodSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const weight = this.state.conditions[myPet.weight - 1];
    const kindEdu = eduContents.filter(item => item.type === "kind");
    const ageEdu = eduContents.filter(item => item.type === "age");
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
            <span className="dog-info__input">{weight}</span>입니다.
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
              {kindEdu.map(item => (
                <div key={item.id} className="slider-card">
                  <EduContentCard value={item} />
                </div>
              ))}
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
              {ageEdu.map(item => (
                <div key={item.id} className="slider-card">
                  <EduContentCard value={item} />
                </div>
              ))}
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
                    <a
                      className="button is-primary is-outlined"
                      href="https://www.costco.co.kr/Nutri-Source/Nutri-Source-Adult-Dog-Food-1496kg/p/509237"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      className="button is-primary is-outlined"
                      href="https://www.costco.co.kr/Baby-KidsToysPets/Pet-Supplies/Dog-Food/Kirkland-Signature-Premium-Dog-Food-1587kg/p/470974"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      className="button is-primary is-outlined"
                      href="https://www.costco.co.kr/Baby-KidsToysPets/Pet-Supplies/Dog-Food/Nutri-Source-Large-Breed-Puppy-Food-136kg/p/509235"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      className="button is-primary is-outlined"
                      href="https://www.costco.co.kr/Nutri-Source/Nutri-Source-Dog-Food-Grain-Free-Chicken-68kg/p/509238"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            <Slider {...settings} slidesToShow={2}>
              {behaviorContents.map(item => (
                <div key={item.id} className="slider-card">
                  <BehaviorContentCard value={item} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </section>
    );
  }
}

export default withData(OptionResult);

const behaviorContents = [
  {
    id: 1,
    title: "땅 파기",
    thumbnail:
      "https://cdn.glitch.com/ca1a21f1-ee2b-46c3-8bf9-c61e117b92c6%2Fdig_dog-min.jpg?1531364851068",
    body:
      "강아지는 자신만의 공간을 만들 때나 지루함을 느낄 때 종종 땅을 파는 행동을 보이곤 합니다.\n무조건 혼내기보다는 행동의 원인을 파악하는 것이 중요하며, 그에 대한 대처 방안을 마련해야 됩니다.\n심심해서 그런 것이면 산책이나 장난감으로 지루함을 달래주고 녀석의 특별한 공간을 만들어주는 것도 방법입니다."
  },
  {
    id: 2,
    title: "물건 물어뜯기",
    thumbnail:
      "https://cdn.glitch.com/ca1a21f1-ee2b-46c3-8bf9-c61e117b92c6%2Fmess_dog-min.jpg?1531364851167",
    body:
      "시기가 지났음에도 강아지가 전선이나 가구, 신발 등을 물어 뜯어 못 쓰게 되는 경우가 종종 있습니다.\n하지만 가장 큰 이유는 '관심'이 필요하기 때문입니다.\n양말 같은 생활용품으로 놀아주는 것을 자제하고 전용 장난감으로 놀아주는 것을 권합니다. 껌을 주는 것도 좋은 방법입니다."
  },
  {
    id: 3,
    title: "asdfasdfasdf",
    thumbnail:
      "https://cdn.glitch.com/ca1a21f1-ee2b-46c3-8bf9-c61e117b92c6%2Fdig_dog-min.jpg?1531364851068",
    body: "dumy"
  }
];
