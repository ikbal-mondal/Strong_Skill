import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from './ShowQuiz';

const CourseRoutes = () => {
    const course = useLoaderData();
  
    const courseQuiz = course.data.questions ;
    const data = course.data
     const {name} = data
    return (
        <div>
             <div className="my-6">
            <h1 className='text-4xl font-semibold text-center'>Quiz of {name}</h1>
          </div>
           <div className="w-10/12 mx-auto ">
           {
            courseQuiz.map((quiz,index) => <ShowQuiz
            key={quiz.id}
            quiz={quiz}
           index={index}
            ></ShowQuiz>)
           }
           </div>
        </div>
    );
};

export default CourseRoutes;