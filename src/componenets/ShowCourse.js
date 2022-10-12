
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import './ShowCoure.css'

const ShowCourse = ({course}) => {
    const {logo,name,total  , id } = course;


 
    return (
        <div className='bg-gray-400 rounded-2xl'>
            <div className="card card-compact  bg-base-100 shadow-2xl custom-style">
   <figure><img className='w-1/2 bg-lime-300 rounded-xl my-4 custom-css-overly ' src={logo} alt="" /></figure>
   <div className="card-body ">
    <div className="flex justify-evenly items-center shadow-2xl my-2">
     <h2 className="card-title text-xl ">{name}</h2>
     <div className="">
     <p className=' text-lg font-semibold'> Quiz: {total}</p>
     </div>
   
    </div>
    <div className="card-actions justify-center">
      <Link to={`/course/${id}`} className=''><button  className="btn btn-primary custom-hover ">Start Practice 
      <ArrowRightCircleIcon className="h-6 w-6 text-green-600"/>
       </button></Link>
    </div>
    
  </div>
   </div>
        </div>
    );
};

export default ShowCourse;