import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type CartState = {
  products: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (product: CartProduct) => void;
  resetCart: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      products: [],
      addToCart: (product) =>
        set((state) => {
          const item = state.products.find(
            (item) => item.id === product.id && item.size === product.size,
          );
          if (item) {
            item.quantity += product.quantity;
            return state;
          } else {
            return { products: [...state.products, product] };
          }
        }),
      removeFromCart: (product) =>
        set((state) => {
          return {
            products: state.products.filter(
              (item) => item.id + item.size !== product.id + product.size,
            ),
          };
        }),
      resetCart: () =>
        set((state) => {
          return {
            products: [],
          };
        }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCartStore;
