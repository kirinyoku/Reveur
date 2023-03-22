import { useState } from 'react';
import { ProductPreviewProps } from '../types/ProductPreview';

const ProductPreview = ({ data }: ProductPreviewProps) => {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <aside className="flex gap-2 flex-grow-[1] shrink basis-0">
      <div className="flex flex-col gap-2 flex-grow-[1] shrink basis-0 ">
        {data.map((item, index) => {
          return (
            <img
              className="w-full h-36 object-cover object-top cursor-pointer"
              src={item}
              alt="variant of item"
              onClick={() => setSelectedImg(index)}
            />
          );
        })}
      </div>
      <div className="flex-grow-[5] shrink basis-0">
        <img
          className="w-full max-h-[50rem] object-cover object-top"
          src={data[selectedImg]}
          alt="primary image"
        />
      </div>
    </aside>
  );
};

export default ProductPreview;
