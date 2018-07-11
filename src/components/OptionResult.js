import React from "react";
import Slider from "react-slick";

export default class OptionResult extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className="wrapper">
        <div className="info">
          <div className="dog-img">
            <img
              src="https://cdn.glitch.com/8cd2401d-8e94-412c-9cda-525965fe1496%2F%EC%8A%A4%ED%94%BC%EC%B8%A0.png?1531287472926"
              alt="dog"
            />
          </div>
          <div className="dog-info">
            <span className="dog-info_input">퐁퐁이</span>의 품종은{" "}
            <span className="dog-info_input">스피츠</span>이고 {""}
            <span className="dog-info_input">3살</span>이며{" "}
            <span className="dog-info_input">마른체형</span>을 가지고 있어요.
          </div>
        </div>
        <div className="guideline">
          <div className="box">
            <h2 className="title is-3">Standard Guide</h2>
            <h3 className="title is-4">스피츠</h3>
            <p>
              <span>`스피츠`</span> 는 예민함을 선천적으로 가지고 태어나 후천적
              요인으로 인해 변화되어 형성되는 성격이 다양합니다.
            </p>
            <p>
              폐쇄성이 강하게 자랄 수 있으니 일생 동안 산책이나 애견카페 등의
              꾸준한 사회성 훈련이 필요합니다.
            </p>
            <p>
              확실히 교육시키지 않으면 잘 물기 때문에 상당희 주의하여야 하며
              교육이 필요합니다.
            </p>
            <p>
              털이 가는 편이라 잘 날리고 빠지는 양도 많기 때문에 털을 자주
              빗어주세요.
            </p>
          </div>
        </div>
        <div className="suggest-section">
          <h2 className="title is-3">스피츠 맞춤 교육을 추천해드려요.</h2>
          <div>
            <Slider {...settings}>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절1</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절2</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절3</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절4</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절5</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절6</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
            </Slider>
          </div>
        </div>
        <div className="guideline">
          <div className="box">
            <h2 className="title is-3">6주차</h2>
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
        <div className="suggest-section">
          <h2 className="title is-3">6주차 추천교육</h2>
          <div>
            <Slider {...settings}>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절1</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절2</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절3</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절4</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절5</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절6</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
            </Slider>
          </div>
        </div>
        <div className="guideline">
          <div className="box">
            <h2 className="title is-3">마른체형이에요.</h2>
            <p>먹이를 조금만 더 주셔도 괜찮아요 스피츠는 항상 배고프답니다.</p>
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
        <div className="suggest-section">
          <h2 className="title is-3">
            퐁퐁이를 위한 맞춤 사료를 추천해보았어요.
          </h2>
          <div>
            <Slider {...settings}>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절1</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절2</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절3</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절4</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절5</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
              <div className="tile is-parent test">
                <article className="tile is-child box">
                  <figure className="image">
                    <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </figure>
                  <p className="title">산책 예절6</p>
                  <p className="subtitle">Fri 27 Nov 2016</p>
                  <a className="button">Buy Tickets</a>
                </article>
              </div>
            </Slider>
          </div>
        </div>
        <div className="suggest-section">
          <h2 className="title is-3">
            퐁퐁이를 위한 이상행동 가이드를 찾았어요
          </h2>
          <div>
            <div className="test behavior"> test </div>
            <div className="test behavior"> test </div>
          </div>
        </div>
      </div>
    );
  }
}
