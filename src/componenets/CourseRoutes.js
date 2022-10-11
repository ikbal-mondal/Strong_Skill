import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from './ShowQuiz';

const CourseRoutes = () => {
    const course = useLoaderData();
    const courseQuiz = course.data.questions ;
 
    return (
        <div>
            <h1>quiz total : {courseQuiz.length}</h1>
           {
            courseQuiz.map(quiz => <ShowQuiz
            key={quiz.id}
            quiz={quiz}
            ></ShowQuiz>)
           }
        </div>
    );
};

export default CourseRoutes;