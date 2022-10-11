import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
        <div className='bg-slate-200'>
          <div className="navbar  w-10/12 mx-auto ">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">Strong Skill</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <Link className='mx-3 text-xl font-semibold' to='/course'>Course</Link>
      <Link className='mx-3 text-xl font-semibold' to='/recharts'>Recharts</Link>
      <Link className='mx-3 text-xl font-semibold' to='/blog'>Blog</Link>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;