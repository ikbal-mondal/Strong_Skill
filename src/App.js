// logo import this 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from "./layout/Main";
import Course from './componenets/Course';
import Recharts from './componenets/Recharts';
import Blog from './componenets/Blog';
import ErrorPage from './componenets/ErrorPage'
function App() {
  const router  = createBrowserRouter([
     {path:'/',
      element:<Main></Main>,

      children:[
       
        {path:'/',element:<Course></Course>},
        {path:'/course',element:<Course></Course>},
        {path:'/recharts', element:<Recharts></Recharts>},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/*', element:<ErrorPage></ErrorPage>}
        
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
