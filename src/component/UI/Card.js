import React from 'react'
const Card = props => {
  const classes = `${props.css} bg-white flex flex-col md:flex-row md:mx-1 p-5 rounded-xl shadow-lg `;
    return <div className={classes}>
      {props.children}
    </div>
};

export default Card