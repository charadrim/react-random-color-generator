import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialColor = randomColor();
  const [hexColor, setHexColor] = useState(initialColor);
  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          fontSize: '50px',
          color: hexColor,
        }}
      >
        Generated Color: {hexColor}
      </div>
      <br />
      <button onClick={() => setHexColor(randomColor())}>Generate</button>
    </>
  );
}
