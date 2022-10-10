import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShawCourse from './ShowCourse'
const Course = () => {
    const courses = useLoaderData([])
     const course = courses.data;
      console.log(course);
    return (
        <div>
            <h2>this is a home ar course {course.length}</h2>
           <div className="grid grid-cols-2 gap-6 w-10/12 mx-auto my-5 ">
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