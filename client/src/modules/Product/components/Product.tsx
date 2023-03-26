import ProductInteraction from './ProductInteraction';
import ProductPreview from './ProductPreview';
import useFetch from '../../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../../types/CardProps';

const Product = () => {
  const id = useParams().id;

  const { data, isLoading, isError } = useFetch<IProduct>(`/products/${id}?populate=*`);

  return (
    <>
      {data && <ProductPreview data={data} />}
      {data && <ProductInteraction data={data} />}
    </>
  );
};

export default Product;
