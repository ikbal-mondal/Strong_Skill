import React from 'react';

const ShowQuiz = ({quiz}) => {
     const {options , question} = quiz
    
    return (
       
        <div className='border my-5 shadow-2xl rounded-2xl p-5 '>
             <h1>{question}</h1>
     <div className="form-control">
     <label className="label cursor-pointer">
    <span className="label-text">{options[0]}</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
 </div>
     <div className="form-control">
     <label className="label cursor-pointer">
    <span className="label-text">{options[1]}</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
 </div>
     <div className="form-control">
     <label className="label cursor-pointer">
    <span className="label-text">{options[2]}</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
 </div>
            
          
          
        </div>
    );
};

export default ShowQuiz;