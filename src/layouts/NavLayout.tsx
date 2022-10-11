import React, { Fragment, ReactNode } from "react";
import Navbar from "../components/Navbar";

const NavLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

/**
 * <NavLayout>
 *  <div>asdasd</div>
 * </NavLayout>
 */

export default React.memo(NavLayout);
