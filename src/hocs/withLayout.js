import React, { Component } from "react";
import Layout from "../components/Layout";

export default function withLayout(WrappedComponent) {
  return currentStep =>
    class extends Component {
      render() {
        return (
          <Layout current={currentStep}>
            <WrappedComponent {...this.props} />
          </Layout>
        );
      }
    };
}
