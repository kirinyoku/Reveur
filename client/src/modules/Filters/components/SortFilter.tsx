import { useState } from 'react';

const SortFilter = () => {
  const [sort, setSort] = useState<'asc' | 'desc' | null>(null);

  return (
    <div>
      <h2 className="text-xl font-medium mb-2">Sort by</h2>
      <div>
        <input
          className="mb-2"
          type="radio"
          id="asc"
          value="asc"
          name="price"
          onChange={(e) => setSort('asc')}
        />
        <label className="ml-2" htmlFor="asc">
          Price (Lower first)
        </label>
      </div>
      <div>
        <input
          className="mb-2"
          type="radio"
          id="desc"
          value="desc"
          name="price"
          onChange={(e) => setSort('desc')}
        />
        <label className="ml-2" htmlFor="desc">
          Price (Highest first)
        </label>
      </div>
    </div>
  );
};

export default SortFilter;
