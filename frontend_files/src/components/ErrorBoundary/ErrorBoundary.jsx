// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-start gap-3">
          <FiAlertTriangle className="text-xl mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Something went wrong</h3>
            <p className="text-sm">Please refresh the page or try again later.</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-2 text-sm bg-white border border-red-200 px-3 py-1 rounded hover:bg-red-100"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}