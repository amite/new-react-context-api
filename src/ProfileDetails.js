import React from "react";
import { ProfileConsumer } from "./ProfileContext";

export const ProfileDetails = props => (
  <ProfileConsumer>
    {context => {
      return (
        <div>
          <div>
            <strong>First name:</strong> {context.firstName}
          </div>
          <div>
            <strong>Last name:</strong> {context.lastName}
          </div>
        </div>
      );
    }}
  </ProfileConsumer>
);
