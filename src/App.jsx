import { useState, createContext } from "react";
import ButtonGrid from "./components/ButtonGrid";
import SettingsPanel from "./components/SettingsPanel";

export const SettingsContext = createContext();

const App = () => {
  const [power, setPower] = useState(true);
  const [displayPanel, setDisplayPanel] = useState("");
  const [kit, setKit] = useState("Heater Kit");
  const [volume, setVolume] = useState(100);

  return (
    <SettingsContext.Provider
      value={{
        powerContext: [power, setPower],
        displayPanelContext: [displayPanel, setDisplayPanel],
        kitContext: [kit, setKit],
        volumeContext: [volume, setVolume],
      }}
    >
      <div id="app-container">
        <h1 id="title">Reactive Drum Machine</h1>
        <div id="drum-machine" className="card">
          <ButtonGrid />
          <SettingsPanel />
        </div>
        <h1 id="signature">By Ayaan Danish</h1>
      </div>
    </SettingsContext.Provider>
  );
};

export default App;
