import React from "react";

export const ProfileDetails = props => (
  <div>
    <div>
      <strong>First name:</strong> {props.profile.firstName}
    </div>
    <div>
      <strong>Last name:</strong> {props.profile.lastName}
    </div>
  </div>
);
