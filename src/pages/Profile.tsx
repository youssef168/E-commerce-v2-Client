import React from "react";
import NavLayout from "../layouts/NavLayout";
import { requestHelpers } from "../lib";

const Profile = () => {
  requestHelpers.getData("http://localhost:8000/auth/me/");
  return (
    <NavLayout>
      <div>Profile</div>
    </NavLayout>
  );
};

export default Profile;
