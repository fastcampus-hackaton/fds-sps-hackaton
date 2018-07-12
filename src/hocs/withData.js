import React, { Component } from "react";
import { DataConsumer } from "../contexts/DataContext";

export default function withData(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <DataConsumer>
          {value => <WrappedComponent {...value} {...this.props} />}
        </DataConsumer>
      );
    }
  };
}
