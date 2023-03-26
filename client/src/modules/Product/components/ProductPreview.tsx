import { useState } from 'react';
import { ProductProps } from '../types/Product';

const UPLOAD_URL = import.meta.env.VITE_UPLOAD_URL;

const ProductPreview = ({ data }: ProductProps) => {
  const [selectedImg, setSelectedImg] = useState<'img' | 'img2'>('img');

  return (
    <aside className="flex gap-2 flex-grow-[1] shrink basis-0">
      <div className="flex flex-col gap-2 flex-grow-[1] shrink basis-0 ">
        <img
          className="w-full h-36 object-cover object-top cursor-pointer"
          src={UPLOAD_URL + data.attributes.img.data.attributes.url}
          alt=""
          onClick={() => setSelectedImg('img')}
        />
        <img
          className="w-full h-36 object-cover object-top cursor-pointer"
          src={UPLOAD_URL + data.attributes.img2.data.attributes.url}
          alt=""
          onClick={() => setSelectedImg('img2')}
        />
      </div>
      <div className="flex-grow-[5] shrink basis-0">
        <img
          className="w-full max-h-[50rem] object-cover object-top"
          src={UPLOAD_URL + data.attributes[selectedImg].data.attributes.url}
          alt="primary image"
        />
      </div>
    </aside>
  );
};

export default ProductPreview;
