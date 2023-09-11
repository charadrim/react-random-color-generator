/*Design and develop a random color generator web application using React. This application will show a random color when a button is clicked:

-A button with the exact text Generate will cause a new color to be generated when it is clicked
-Once a color is generated, update the background color of a div which contains the exact text Generated Color: <background color hex code> (the background color and the hex code must match)*/

import randomColor from 'randomcolor';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function App() {
  const initialColor = randomColor();
  const [hexColor, setHexColor] = useState(initialColor);
  const colorChange = (newColor) => {
    setHexColor(newColor);
  };
  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          fontSize: '50px',
          color: hexColor,
        }}
      >
        {hexColor}
      </div>
      <br />
      <button onClick={() => setHexColor(randomColor())}>Generate</button>
    </>
  );
}
