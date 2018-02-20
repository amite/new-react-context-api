import React, { Component } from "react";
import { render } from "react-dom";
import { loadProfile } from "./service";
import { PageWrapper } from "./PageWrapper";

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
    return <PageWrapper profile={this.state.profile} />;
  }
}

render(<App />, document.getElementById("root"));
