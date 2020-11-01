import React from "react";
import "./ErrorBoundary.scss";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div class="wrapper">
        <div class="box">
        <h1>500</h1>
        <p>Sorry, page broken.</p>
        <p>&#58;&#40;</p>
        <p><a href="/">Try again!</a></p>
        </div>
        </div>
      );
    }
    return this.props.children;
  }
}