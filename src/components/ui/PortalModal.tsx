import { Fragment, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
// import isBrowser from "../../src/utils/isBrowser";
import { createHtmlWrapper } from "../../utils/createHtmlWrapper";

interface PortalModalOptions {
  /**
   * execute when component mounts
   */
  onMount?: () => void;
  /**
   * execute when component unmounts
   */
  onUnmount?: () => void;
  /**
   * determine if the modal should be visible or not
   */
  isOpen?: boolean;
  /**
   * execute when component opens up
   */
  onOpen?: boolean;
  /**
   * if was false, won't close the modal if users clicked
   * escape button, default is true
   */
  useEscapeToClose?: boolean;
  /**
   * if was false, won't close the modal if users clicked
   * outside the modal
   */
  clickOutsideToClose?: boolean;
  /**
   * wrapperId which is the container of the children
   * * if wasn't found will create one with the same ID and append it after root element, if wasn't provided will create the default wrapper
   */
  wrapperId?: string;
  /**
   * React children to be rendered inside of this modal
   */
  children?: React.ReactNode;
}

/**
 * React-Helpers Component which gives control over the visiblity
 * of the children and mainly used to create a modals
 * outside the DOM hierarchy of the parent
 */
const PortalModal = ({
  useEscapeToClose = true,
  clickOutsideToClose = true,
  ...options
}: PortalModalOptions) => {
  const { wrapperId, children, isOpen } = options;
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
    null
  );
  useLayoutEffect(() => {
    let defaultWrapper: HTMLDivElement = createHtmlWrapper(
      "portal-modal-wrapper"
    );
    let wrapperEl: HTMLDivElement | any;
    if (wrapperId) {
      wrapperEl = document.getElementById(wrapperId); // try to get the element with this ID
      if (wrapperEl) {
        // if element was found, set it as the WrapperElement
        setWrapperElement(wrapperEl);
      }
      wrapperEl = createHtmlWrapper(wrapperId);
      setWrapperElement(wrapperEl);
    }
    if (!wrapperId) {
      setWrapperElement(defaultWrapper);
    }

    return () => {
      if (wrapperEl && wrapperEl.parentNode) {
        wrapperEl.parentNode.removeChild(wrapperEl);
      }
      if (defaultWrapper && defaultWrapper.parentNode) {
        defaultWrapper.parentNode.removeChild(defaultWrapper);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return (
    <Fragment>
      {isOpen === true ? createPortal(children, wrapperElement!) : null}
    </Fragment>
  );
};

export default PortalModal;
