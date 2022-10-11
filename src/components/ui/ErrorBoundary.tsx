import React, { Fragment, PureComponent } from "react";
import SHADOWS from "../../utils/ui.uitls";

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Component used to handle error boundries, Will show the user an error component when any error happens
 * * Should Use It In Your Root Component
 */
export default class ErrorBoundry extends PureComponent<
  ErrorBoundaryProps,
  { hasError: boolean }
> {
  // Used PureComponent To Prevent Re-Render Multi Times Without any reasonable reason to render!
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Fragment>{this.props.fallback}</Fragment>;
    }
    return this.props.children;
  }
}
