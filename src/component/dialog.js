import React from "react";

const Dialog = () => {
  function handler(event) {
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    }
  }

  return (
    <>
      <div className="container">
        <h2>Please enter your OTP</h2>
        <div className="userInput">
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
            onChange={handler}
            onFocus={(e) => e.target.select()}
          />

          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
            onChange={handler}
            onFocus={(e) => e.target.select()}
          />

          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
            onChange={handler}
            onFocus={(e) => e.target.select()}
          />

          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
            onChange={handler}
            onFocus={(e) => e.target.select()}
          />

          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
            onChange={handler}
            onFocus={(e) => e.target.select()}
          />

          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
            onChange={handler}
            onFocus={(e) => e.target.select()}
          />
        </div>
        <button onClick={() => alert("Phone number verified!")}>
          Verify Phone Number
        </button>
      </div>
    </>
  );
};
export default Dialog;
