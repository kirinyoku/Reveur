import Footer from '../../Footer';
import Navbar from '../../Navbar';
import { HomePage, ProductPage, CategoryPage } from '../../../pages';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/products/:id',
        element: <CategoryPage />,
      },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
