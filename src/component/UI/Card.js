import React from 'react'
const Card = props => {
  const classes = `${props.css} bg-white flex flex-row md:mx-10 p-5 rounded-xl  shadow-lg `;
    return <div className={classes}>
      {props.children}
    </div>
};

export default Card