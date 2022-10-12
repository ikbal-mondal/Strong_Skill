import React from 'react';
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ShowQuize.css'

const ShowQuiz = ({quiz,data}) => {
       
   
 
     const {options , question, correctAnswer } = quiz
      
  //  console.log(quiz);
     const ShowRightAnswer = () => {
          
      if(true){
        
        toast.success(correctAnswer, {autoClose:500});
        
      }

     }

    

     const handleRadioBox = (e) =>{
      
      if( correctAnswer === e){
        // console.log(correctAnswer);
     
          toast.success('correct answer', {autoClose: 500})
    

        
        
      } else {
       
        toast.error('incorrect answer', {autoClose:500})
      }

     }

  
    return (
           
        <div className="">
      
          <div className='border my-8 shadow-2xl shadow-slate-900 rounded-2xl p-5 bg-slate-800 '>
          
          <div className="flex  justify-between items-center">
          
          <div className="">
            <h1 className='text-xl m-2 text-white'>{question.slice(3, -4)}</h1>
            </div>
          <div className="">
          <EyeSlashIcon onClick={ShowRightAnswer} className="h-6 w-6 text-slate-400"/>
           </div>
           <ToastContainer />
         
          </div>
          
  <div className="form-control p-3 m-3 bg-slate-200 rounded custom-quiz-style">
  <label className="label cursor-pointer"  >
  <span className="label-text custom-size-quiz ">{options[0]}</span>
 <input type="radio"name="radio-4" className="radio radio-accent checkbox-primary" onClick={(e) => handleRadioBox(e.target.innerText)} />
</label>
</div>
  <div className="form-control p-3 m-3 bg-slate-200 rounded custom-quiz-style" >
  <label className="label cursor-pointer" onClick={(e) => handleRadioBox(e.target.innerText)}>
 <span className="label-text custom-size-quiz" >{options[1]}</span> 
 <input type="radio"   name="radio-4" className="radio radio-accent checkbox-primary" />
</label>
</div>
  <div className="form-control p-3 m-3 bg-slate-200 rounded custom-quiz-style" >
  <label className="label cursor-pointer" onClick={(e) => handleRadioBox(e.target.innerText)}>
 <span className="label-text custom-size-quiz" >{options[2]}</span> 
 <input type="radio"   name="radio-4" className="radio radio-accent checkbox-primary" />
</label>
</div>             
  <div className="form-control p-3 m-3 bg-slate-200 rounded custom-quiz-style">
  <label className="label cursor-pointer" onClick={(e) => handleRadioBox(e.target.innerText)}>
 <span className="label-text custom-size-quiz"  >{options[3]}</span> 
 <input type="radio"  name="radio-4" className="radio radio-accent checkbox-primary" />
</label>

</div>             
       
     </div>
        </div>
  

    );
};

export default ShowQuiz;