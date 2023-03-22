import { useState } from 'react';

const PriceFilter = () => {
  const [maxPrice, setMaxPrice] = useState<number>(500);

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Filter by price</h2>
        <div>
          <span>1</span>
          <input
            className="mb-2 mx-2"
            type="range"
            min="1"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <span>{maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
