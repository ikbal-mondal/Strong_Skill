import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
        <div className='bg-slate-900'>
          <div className="navbar  w-full shadow-2xl shadow-slate-300 ">
  <div className="w-11/12 mx-auto ">
  <div className="flex-1 ">
    <Link className=" normal-case font-semibold text-2xl text-white">Strong Skill</Link>
  </div>
  <div className="flex-none " >
    <ul className="menu menu-horizontal p-0">
      <Link className='mx-2 font-semibold text-white' to='/course'>Course</Link>
      <Link className='mx-2 font-semibold text-white' to='/recharts'>Recharts</Link>
      <Link className='mx-2 font-semibold text-white' to='/blog'>Blog</Link>
    </ul>
  </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;