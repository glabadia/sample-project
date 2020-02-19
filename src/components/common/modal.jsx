import React from "react";

const Modal = ({ handleClose, show, content }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {content}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
