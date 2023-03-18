import Navbar from './Navbar';
import Footer from './Footer';
import { Home, Product, Category } from '../pages';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products/:id',
        element: <Category />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
