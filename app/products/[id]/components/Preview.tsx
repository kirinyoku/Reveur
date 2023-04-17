'use client';

import { useState } from 'react';

export default function Preview({ product }: { product: Product }) {
  const [selectedImg, setSelectedImg] = useState<'imgURL' | 'img2URL'>('imgURL');

  return (
    <aside className="flex gap-2">
      <div className="flex flex-col gap-2">
        <img
          className="max-h-40 object-cover object-top cursor-pointer"
          src={product.imgURL}
          alt=""
          onClick={() => setSelectedImg('imgURL')}
        />
        <img
          className="max-h-40 object-cover object-top cursor-pointer"
          src={product.img2URL}
          alt=""
          onClick={() => setSelectedImg('img2URL')}
        />
      </div>
      <div>
        <img
          className="w-auto max-h-[45rem] object-cover object-top"
          src={product[selectedImg]}
          alt="primary image"
        />
      </div>
    </aside>
  );
}
