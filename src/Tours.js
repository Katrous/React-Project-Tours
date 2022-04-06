import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
  return (<section>
    <div className="title">
      <h2> Our Tours </h2>
      <div className='underline'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>
        })}
      </div>
    </div>
  </section>);
};

export default Tours;
