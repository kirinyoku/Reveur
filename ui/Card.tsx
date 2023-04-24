'use client';

import Link from 'next/link';

type CardProps = {
  product: Product;
};

export default function Card({ product }: CardProps) {
  return (
    <Link className="grid-item" href={`/products/${product.id}`}>
      <div>
        <div className="w-full h-[26rem] overflow-hidden relative mb-2">
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-white text-teal-700 p-1 z-[4] text-sm font-semibold">
              New Season
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute z-[3] hover:z-[2]"
            src={product.imgURL}
            alt="primary"
          />
          <img
            className="w-full h-full object-cover absolute z-[2] hover:z-[3]"
            src={product.img2URL}
            alt="secondary"
          />
        </div>
        <h3 className="text-xl font-base">{product.title}</h3>
        <div className="flex gap-3 text-lg">
          {product.oldPrice !== 0 && (
            <del className="text-gray-700 line-through">${product.oldPrice.toFixed(2)}</del>
          )}
          <strong className="font-semibold">${product.currentPrice.toFixed(2)}</strong>
        </div>
      </div>
    </Link>
  );
}
