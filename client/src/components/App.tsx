import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <span>Home</span>,
  },
  {
    path: '/products/:id',
    element: <span>Category</span>,
  },
  {
    path: '/product/:id',
    element: <span>Product</span>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
