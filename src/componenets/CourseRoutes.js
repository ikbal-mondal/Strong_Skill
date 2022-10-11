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
             <div className="">
            <h1 className='text-2xl font-semibold text-center'>Quiz of {name}</h1>
          </div>
           <div className="w-8/12 mx-auto">
           {
            courseQuiz.map(quiz => <ShowQuiz
            key={quiz.id}
            quiz={quiz}
            data={data}
            ></ShowQuiz>)
           }
           </div>
        </div>
    );
};

export default CourseRoutes;