import "./App.css";
import { useState } from "react";

function App() {
  const [domain, setDomain] = useState("naver.com");
  const [isDisabled, setIsDisabled] = useState(true);

  const domains = ["naver.com", "gmail.com", "hanmail.net"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <div>
          <input type="text" />
          <span>@</span>
          <input
            type="text"
            value={domain}
            disabled={isDisabled}
            onChange={(e) => setDomain(e.target.value)}
          />
          <select
            onChange={(e) => {
              const selectValue = e.target.value;
              if (selectValue === "") {
                setIsDisabled(false);
              } else {
                setIsDisabled(true);
              }

              setDomain(selectValue);
            }}
          >
            {domains.map((v) => {
              return (
                <option value={v} key={v}>
                  {v}
                </option>
              );
            })}
            <option value={""}>직접입력</option>
          </select>
        </div>
        <input
          type="password"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              e.target.style.background = "white";
            } else {
              e.target.style.background = "rgba(0, 123, 255, 0.1)";
            }
          }}
        />
        <button style={{ margin: "5px" }}>로그인</button>
      </div>
      <button>회원가입</button>
    </div>
  );
}

export default App;
