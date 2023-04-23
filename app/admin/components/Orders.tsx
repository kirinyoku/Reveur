'use client';

import fetcher from '@/helpers/fecther';
import { useQuery } from '@tanstack/react-query';

export default function Orders() {
  const { data: orders, isLoading } = useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: () => fetcher('orders'),
  });

  return (
    <section className="w-full bg-white px-8 py-2 my-4 shadow-md text-slate-700">
      {isLoading && <h2 className="text-center text-3xl font-medium">Loading orders...</h2>}
      {orders ? (
        <>
          <h2 className="text-center text-3xl font-medium">Orders</h2>
          <ul>
            {orders.map((order) => (
              <li
                className="border-b border-slate-500 mb-2 text-sm md:text-base overflow-hidden"
                key={order.id}>
                <div className="grid">
                  <span className="uppercase">
                    <span className="font-medium">order id:</span> {order.id}
                  </span>
                  <span className="uppercase">
                    <span className="font-medium">stripe id:</span> {order.stripeID}
                  </span>
                </div>
                <h3 className="uppercase font-medium">Products:</h3>
                {order.products.map((product) => (
                  <li className="flex flex-wrap gap-2" key={product.id}>
                    <h4>{product.title}</h4>
                    <p className="uppercase">size: {product.size}</p>
                    <p className="uppercase">{`quantity: ${product.quantity}`}</p>
                  </li>
                ))}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="text-center text-3xl font-medium">There are no orders</h2>
      )}
    </section>
  );
}
