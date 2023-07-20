import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { SettingsContext } from "../App";

const SettingsPanel = () => {
  const { powerContext, displayPanelContext, kitContext, volumeContext } =
    useContext(SettingsContext);

  const [power, setPower] = powerContext;
  const [displayPanel, setDisplayPanel] = displayPanelContext;
  const [kit, setKit] = kitContext;
  const [volume, setVolume] = volumeContext;

  useEffect(() => {
    setDisplayPanel("");
  }, [power, kit, setDisplayPanel]);

  useEffect(() => {
    setDisplayPanel("🔊: " + volume);
  }, [setDisplayPanel, volume]);

  return (
    <div id="settings-panel">
      <button
        id="power-button"
        className={`my-toggle  ${!power ? "toggled" : ""}`}
        onClick={() => setPower((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faPowerOff} id="power-icon" />
      </button>

      <div className={`display-panel ${!power ? "disabled" : ""}`}>
        {displayPanel}
      </div>

      <div className={`volume-panel ${!power ? "disabled" : ""}`}>
        <input
          id="volume-slider"
          type="range"
          min={0}
          max={100}
          defaultValue={100}
          onChange={(e) => setVolume(e.target.value)}
          disabled={!power}
        />
      </div>

      <button
        id="kit-button"
        disabled={!power}
        className={`my-toggle ${kit === "Smooth Piano Kit" ? "toggled" : ""} ${
          !power ? "disabled" : ""
        }`}
        onClick={() =>
          setKit((prev) =>
            prev === "Heater Kit" ? "Smooth Piano Kit" : "Heater Kit"
          )
        }
      >
        {kit}
      </button>
    </div>
  );
};

export default SettingsPanel;
