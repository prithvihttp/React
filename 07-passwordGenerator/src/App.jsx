import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={}[]~`*/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-700 rounded-2xl shadow-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-orange-400">
          🔐 Password Generator
        </h1>

        <div className="flex rounded-lg overflow-hidden shadow-lg">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full p-3 text-lg bg-gray-800 text-white outline-none"
            placeholder="Generated password"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 text-sm font-semibold transition"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-white">
          <div className="flex items-center justify-between">
            <label className="text-sm">
              Password Length:{" "}
              <span className="font-semibold text-orange-300">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-1/2 accent-orange-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="text-sm">
              Include Numbers
            </label>
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500 w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="characterInput" className="text-sm">
              Include Symbols
            </label>
            <input
              type="checkbox"
              id="characterInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500 w-5 h-5"
            />
          </div>
        </div>

        <div className="text-center text-xs text-gray-300">
          Built with 💙 using React & TailwindCSS
        </div>
      </div>
    </div>
  );
}

export default App;