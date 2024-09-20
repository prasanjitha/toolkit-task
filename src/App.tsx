import './App.css';
import SignIn from './components/login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/template/Root';
import Home from './components/home/home';

const router = createBrowserRouter([

  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    children: [
      { index: true, element: <SignIn /> },
      {
        path: 'home',
        element: <Home />
      },
    ]
  },

]);

function App() {
  return (
 <RouterProvider router={router}/>
  );
}

export default App;
