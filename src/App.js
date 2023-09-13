import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const initialColor = randomColor();
  const newColor = randomColor();
  const boxSize = '400px';
  const [color, setColor] = useState(initialColor);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: boxSize,
          height: boxSize,
          fontSize: '30px',
          color: '#000',
          textShadow: '2px 2px 4px #fff',
          backgroundColor: newColor,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Generated Color:
        <br />
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {newColor}
        </div>
      </div>
      <button
        style={{ marginTop: '20px' }}
        onClick={() => {
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}
