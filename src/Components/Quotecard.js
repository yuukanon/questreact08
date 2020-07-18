import React from 'react';

const Quotecard = (props) => {
  // console.log(props.quote[0])

  return(
    <div className="quote">
      <img src = {props.quote[0].image} alt="simpson" />
      <div className="card">
        <div>Character: {props.quote[0].character} 
          <p>Quote:{props.quote[0].quote} </p>
        </div>
      </div>
    </div>
  )
}

export default Quotecard;