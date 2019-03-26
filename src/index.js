import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AnimatedText } from "./AnimatedText";

function App() {
  return (
    <div className="App">
      <AnimatedText
        textColor="#565656"
        overlayColor="#90ee90"
      >
        Alex Bennett
      </AnimatedText>
      <p>Move Cursor over name for effect.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));