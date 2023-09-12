import randomColor from 'randomcolor';
import { useState } from 'react';
import tinycolor from 'tinycolor2';

export default function App() {
  const initialColor = randomColor();
  const [hexColor, setHexColor] = useState(initialColor);
  const textColor = tinycolor(hexColor).isLight() ? '#000' : '#fff';

  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          fontSize: '50px',
          color: textColor,
          backgroundColor: hexColor,
        }}
      >
        Generated Color: {hexColor}
      </div>
      <br />
      <button onClick={() => setHexColor(randomColor())}>Generate</button>
    </>
  );
}
