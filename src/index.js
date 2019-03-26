import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AnimatedText } from "./AnimatedText";

function App() {
  return (
    <div className="App">
      <AnimatedText
        textColor="#A9A9A9"
        overlayColor="#fdc52c"
      >
        Alex Bennett
      </AnimatedText>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));