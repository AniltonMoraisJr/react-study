import React from 'react';

const Points = (props) => {
    return (
      <button className="btn btn-primary points" name="points" onClick={props.buttonClick}>Points</button>
    );
} 

export default Points;
