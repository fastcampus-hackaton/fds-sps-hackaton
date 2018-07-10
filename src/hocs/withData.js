import React, { Component } from "react";
import { DataConusmer } from "../contexts/DataContext";

export default function withData(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <DataConusmer>
          {value => <WrappedComponent {...value} {...this.props} />}
        </DataConusmer>
      );
    }
  };
}
