import React, { useState } from "react";
import Dialog from "./dialog";

const FirstPage = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div className="mainPage">
      {show ? (
        <button
          className="btn"
          onClick={() => {
            setModal(true);
            setShow(false);
          }}
        >
          Click Me
        </button>
      ) : null}
      {modal && <Dialog />}
    </div>
  );
};

export default FirstPage;
