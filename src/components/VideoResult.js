import React from "react";
import { Link } from "react-router-dom";
import withData from "../hocs/withData";

class VideoResult extends React.Component {
  static defaultProps = {
    kindsEdu: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { kindsEdu, contentsId } = this.props;
    const videoContents = kindsEdu.find(
      item => item.id === parseInt(contentsId, 10)
    );
    return (
      <div className="video-wrapper">
        <div className="box is-shady">
          <h1 className="title is-3">{videoContents.title}</h1>
          <div className="edu-video">
            <iframe
              id="ytplayer"
              title="dog-edu"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${videoContents.code}`}
              frameBorder="0"
            />
          </div>
          <div>
            <p>{videoContents.body}</p>
          </div>
          <Link to="/oresult" className="button is-primary is-outlined">
            이전 가이드라인 보러가기
          </Link>
        </div>
      </div>
    );
  }
}

export default withData(VideoResult);
