import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((ppl)=> <article className='person' key={ppl.id}>
      <img src={ppl.image} alt={ppl.name}/>
      <div>
        <h4>{ppl.name}</h4>
        <p>{ppl.age}</p>
      </div>
      </article>)}
    </>
  );
};

export default List;
