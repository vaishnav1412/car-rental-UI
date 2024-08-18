import React from 'react';
import '../components/spinner.css'; 

const TerminalLoader = () => {
  return (
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">Status</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="text">Creating Caar</div>
    </div>
  );
};

export default TerminalLoader;
