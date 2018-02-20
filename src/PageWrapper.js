import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProfileWrapper } from "./ProfileWrapper";

export const PageWrapper = props => (
  <div className="container">
    <Header />
    <ProfileWrapper profile={props.profile} />
    <Footer />
  </div>
);
