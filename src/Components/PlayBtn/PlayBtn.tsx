import React, { CSSProperties } from "react";

import customStyle from "./PlayBtn.module.scss";
import PauseIcon from "../../assets/IMG/PauseIcon";
import PlayIcon from "../../assets/IMG/PlayIcon";
interface PlayBtnPropType {
  style?: CSSProperties;
}
const PlayBtn: React.FC<PlayBtnPropType> = ({ style }) => {
  const [play, setPlay] = React.useState<boolean>(true);

  const handleOnClick = () => {
    setPlay(!play);
  };
  return (
    <div
      onClick={handleOnClick}
      className={customStyle.PlayBtnContainer}
      style={style}
    >
      {play ? <PauseIcon /> : <PlayIcon />}
    </div>
  );
};

export default PlayBtn;
