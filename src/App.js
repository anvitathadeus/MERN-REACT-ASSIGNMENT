import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);

  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }

  return (
    <center>
    <div className="main">
      <div className="file">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea onChange={change}
        style={{ width: '300px', padding: '10px', marginBottom: '10px', height: '100px' }}></textarea >

        <div id="word-counter">Word count: {count}</div>
      </div>
    </div>
    </center>
  );
};

export default App;
