import React from 'react';

const Card = (props) => {
    let { city, temperature } = props;
    return(
        <article className="dt w-100 bb b--black-05 pb2 mt2">
          <div className="dt w4 v-mid">
            {city}
          </div>
          <div className="dtc v-mid pl3">
            Temperature {temperature} C
          </div>
        </article>
    );
};

export default Card;
