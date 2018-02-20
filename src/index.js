import React, { Component } from "react";
import { render } from "react-dom";
import { loadProfile } from "./service";
import { PageWrapper } from "./PageWrapper";
import { ProfileProvider } from "./ProfileContext";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    loadProfile().then(profile => this.setState({ profile }));
  }

  render() {
    return (
      <ProfileProvider value={this.state.profile}>
        <PageWrapper />
      </ProfileProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
