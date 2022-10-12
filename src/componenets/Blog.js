import React from 'react';

const Blog = () => {
    return (
        
        <div className="">
            <div className='mt-2'>
                <img  className="mx-auto rounded-lg shadow-2xl shadow-slate-600" src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png" alt="" />
            </div>
            <div className='w-10/12 mx-auto'>
         <div className="border my-10 p-5">
            <h1 className='text-4xl my-4 font-semibold '>What is the purpose of the react router ?</h1>
            <p className='my-3 text-xl'>
            The Router in React JS is a pure JavaScript package that allows you to use React to create complicated client-side apps. Initially launched in 2013, it has become one of the most prominent routing libraries in today's online applications.

           <p className='text-xl my-3'>
           React Router makes it simple to manage the URL and state of your application. You specify all of the potential URL patterns in your app and which UI component should be displayed for each one using React Router. This Router decreases the amount of code an app requires to maintain its state and makes adding new features more accessible.
           </p>
            </p>
         </div>

         <div className="border my-10 p-5">
            <h1 className='text-4xl my-4 font-semibold'>What is the purpose of the react router ?</h1>
            <p className='text-xl my-3'>
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

           Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
            </p >
         </div>

         <div className="border my-10 p-5">
            <h1 className='text-4xl my-4 font-semibold'>What is useRef Hook?</h1>
            <p className='text-xl my-3'>
            As told above, useRef is a hook introduced with other hooks in React version 16.8 and is mainly used for creating a reference of the DOM element or directly accessing it inside a functional component. 

            <p className='text-xl my-3'>
            But don't think even for a second that it's the only thing this hook is capable of as it can even be used for storing mutable values across different rerenders of the component. 
              Like every other hook in React, we have to first import this hook at the very top level as per the rules of hooks and then only we can use it in our apps. 
            </p>
            </p>
         </div>


        </div>
        </div>
    );
};

export default Blog;