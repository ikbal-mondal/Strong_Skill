import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from './ShowQuiz';

const CourseRoutes = () => {
    const course = useLoaderData();
    const courseQuiz = course.data.questions ;
 
    return (
        <div>
            <h1>quiz total : {courseQuiz.length}</h1>
           <div className="w-8/12 mx-auto">
           {
            courseQuiz.map(quiz => <ShowQuiz
            key={quiz.id}
            quiz={quiz}
            ></ShowQuiz>)
           }
           </div>
        </div>
    );
};

export default CourseRoutes;