import React from "react";
import { ProfileDetails } from "./ProfileDetails";

export const ProfileWrapper = props => (
  <div className="main">
    <h1>Profile details</h1>
    <ProfileDetails profile={props.profile} />
  </div>
);
