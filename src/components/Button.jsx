import PropTypes from "prop-types";
import { SettingsContext } from "../App";
import { useContext } from "react";

const drumMapping = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick n' Hat",
  X: "Kick",
  C: "Closed HH",
};

const pianoMapping = {
  Q: "Chord 1",
  W: "Chord 2",
  E: "Chord 3",
  A: "Shaker",
  S: "Open HH",
  D: "Closed HH",
  Z: "Punchy Kick",
  X: "Side Stick",
  C: "Snare",
};

const Button = ({ text, source }) => {
  const { powerContext, displayPanelContext, kitContext, volumeContext } =
    useContext(SettingsContext);

  const [, setDisplayPanel] = displayPanelContext;
  const [power] = powerContext;
  const [kit] = kitContext;
  const [volume] = volumeContext;

  const playAudio = (e) => {
    if (kit === "Heater Kit") setDisplayPanel(drumMapping[e.target["id"]]);
    else setDisplayPanel(pianoMapping[e.target["id"]]);

    const audio = e.target.childNodes[1];
    audio.pause();
    audio.volume = volume / 100;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <button
      className={`drum-pad ${!power ? "disabled" : ""}`}
      disabled={!power}
      onClick={playAudio}
      id={text}
      tabIndex={-1}
      style={{ gridArea: { text } }}
    >
      {text}
      <audio
        src={`https://github.com/AyaanDanish/DrumMachine-React/raw/main/src/audio/${encodeURI(kit)}/${source}`}
        itemType="audio/mpeg"
        id={`${text}-sound`}
      ></audio>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Button;
