import Button from "./Button";
import { useEffect } from "react";

const ButtonGrid = () => {
  const handleKeyDown = (event) => {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((item) => item.blur());

    const button = document.getElementById(event.key.toUpperCase());
    button.classList.add("is-active");
    button.click();
  };

  const handleKeyUp = (event) => {
    const button = document.getElementById(event.key.toUpperCase());
    button.classList.remove("is-active");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyUp", handleKeyUp);
    };
  }, []);

  return (
    <div id="button-grid" tabIndex={-1}>
      <Button text="Q" source="Q.mp3" />
      <Button text="W" source="W.mp3" />
      <Button text="E" source="E.mp3" />
      <Button text="A" source="A.mp3" />
      <Button text="S" source="S.mp3" />
      <Button text="D" source="D.mp3" />
      <Button text="Z" source="Z.mp3" />
      <Button text="X" source="X.mp3" />
      <Button text="C" source="C.mp3" />
    </div>
  );
};

export default ButtonGrid;
