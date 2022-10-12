import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShawCourse from './ShowCourse'
import Header from '../componenets/Header/Header';


const Course = () => {
    const courses = useLoaderData([])
     const course = courses.data;
     
    return (
        <div>
            <Header></Header>
           <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 w-8/12 mx-auto my-5">
           {
                course.map(course => <ShawCourse
                key={course.id}
                course={course}
                ></ShawCourse>)
            }
           </div>
        </div>
    );
};

export default Course;