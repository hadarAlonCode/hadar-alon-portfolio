import React from 'react';

const Loader = props => {
    return (
        <div className="loader__conatiner">
        <div className="dot-loader"></div>
        <div className="dot-loader dot-loader--2"></div>
        <div className="dot-loader dot-loader--3"></div>
      </div>
    );
};


export default Loader;