
import React from 'react';
import { Link } from 'react-router-dom';
const ShowCourse = ({course}) => {
    const {logo,name,total  , id } = course;


 
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-2xl">
   <figure><img className='w-1/2 bg-slate-600 rounded-xl my-4' src={logo} alt="Shoes" /></figure>
   <div className="card-body ">
    <div className="flex justify-evenly">
     <h2 className="card-title text-2xl ">Name: {name}</h2>
     <div className="">
     <p className=' text-lg font-semibold'> Total : {total}</p>
     </div>

    </div>
    <div className="card-actions justify-end">
      <Link to={`/course/${id}`} className='mx-auto'><button  className="btn btn-primary px-16 ">Buy Now</button></Link>
    </div>
  </div>
   </div>
        </div>
    );
};

export default ShowCourse;