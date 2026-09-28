import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({
  isOpen,
  closeModalWindow,
  submitModalWindow,
  title,
  content,
}) {
  const [value, setValue] = useState("");
  return (
    isOpen &&
    ReactDOM.createPortal(
      <div className="Modal">
        <div className="modal-content">
          <div>{title}</div>
          <div>
            <form>
              <input
                onChange={(e) => setValue(e.target.value)}
                placeholder={content}
              />
              <div>
                <button type="button" onClick={() => closeModalWindow()}>
                  Close
                </button>
                <button type="button" onClick={() => submitModalWindow(value)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    )
  );
}
export default Modal;
