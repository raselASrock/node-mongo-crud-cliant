
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import {RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import Update from './components/Update';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
