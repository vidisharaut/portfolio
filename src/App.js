import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <NavBar/>
        <div className='App'>
        <Hero/>
        </div>
      </div>
    },
    {
      path: "/About",
      element: 
      <div>
        <NavBar/>
        <About/>
      </div>
    }, 
    {
      path: "/Projects",
      element: 
      <div>
        <NavBar/>
        <Projects/>
      </div>
    }, 
    {
      path: "/",
      element: 
      <div>
        <NavBar/>
        <Resume/>
      </div>
    }, 

  ]
)


function App() {
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
