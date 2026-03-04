const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.floor(Math.random() * 9 + 1));
  const [second, setSecond] = useState(Math.floor(Math.random() * 9 + 1));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(`${value} 정답`);
      setFirst(Math.floor(Math.random() * 9 + 1));
      setSecond(Math.floor(Math.random() * 9 + 1));
      setValue("");
    } else {
      setResult(`${value} 오답, 정답은 ${first * second}`);
      setValue("");
    }
    inputEl.current.focus();
  };

  return (
    <React.Fragment>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </React.Fragment>
  );
};

module.exports = GuGuDan;
