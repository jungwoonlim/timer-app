import { connect } from "react-redux";
import Timer from "./presenter";

const mapStateToProps = state => {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
};

export default connect(mapStateToProps)(Timer);
