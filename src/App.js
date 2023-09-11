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
