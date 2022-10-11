import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
}

/**
 * `Modal` a jsx element which gives you the ability to control the visibility of the children
 * * this modal doesn't break the snapshot testing
 * @returns
 */
const Modal: React.FC<ModalProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      {open && <React.Fragment>{children}</React.Fragment>}
    </React.Fragment>
  );
};

export default Modal;
