import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShawCourse from './ShowCourse'
const Course = () => {
    const courses = useLoaderData([])
     const course = courses.data;
     
    return (
        <div>
           <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 w-8/12 mx-auto my-5 ">
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