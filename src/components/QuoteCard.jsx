import React from 'react';
import { useContext , useEffect } from 'react';
import QuoteContext from '../context/QuoteContext';
import {getData} from '../context/QuoteActions';

const QuoteCard = () => {

  const {quoteData, dispatch} = useContext(QuoteContext)

 
  const handleFetch  = async() => {
  const data = await getData();
  dispatch({
    type : "GET_QUOTE",
    payload : data,
  });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if(!quoteData){
    return <div className="container d-flex align-items-center justify-content-center">
    <div class="spinner-border text-primary" role="status">
     <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  }
  return (
    <div className='card my-5 p-5 rounded-0 shadow-dark'>
        <h1 className="card-title">{quoteData.content}</h1>
        <p className="text-secondary">{quoteData.author}</p>
       <span>
       <span className="badge text-bg-primary rounded-0">{quoteData.tags}</span>
       </span>
       <button className="btn btn-dark w-100 rounded-0 my-5" onClick={handleFetch}>Get New Quote</button>
    </div>
  );
}

export default QuoteCard;
