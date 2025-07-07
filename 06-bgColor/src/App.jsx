import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('pink');

  return (
    <div
      className="w-full h-screen transition-colors duration-500 flex flex-col justify-between"
      style={{ backgroundColor: color }}
    >
      {/* Title in Center */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h1
          className="text-4xl font-bold drop-shadow-md"
          style={{ color: color === 'black' ? 'white' : 'black' }}
        >
          Selected Color: {color}
        </h1>
      </div>

      {/* Button Container at Bottom */}
      <div className="w-full flex flex-wrap justify-center gap-4 bg-white/20 backdrop-blur-sm p-4 shadow-inner rounded-t-2xl">
        <button
          onClick={() => setColor('red')}
          className="px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'red' }}
        >
          Red
        </button>

        <button
          onClick={() => setColor('blue')}
          className="px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'blue' }}
        >
          Blue
        </button>

        <button
          onClick={() => setColor('yellow')}
          className="px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'yellow' }}
        >
          Yellow
        </button>

        <button
          onClick={() => setColor('green')}
          className="px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'green' }}
        >
          Green
        </button>

        <button
          onClick={() => setColor('skyblue')}
          className="px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'skyblue' }}
        >
          Skyblue
        </button>

        <button
          onClick={() => setColor('silver')}
          className="px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'silver' }}
        >
          Silver
        </button>

        <button
          onClick={() => setColor('black')}
          className="px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition"
          style={{ backgroundColor: 'black' }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
