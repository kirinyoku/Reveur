import ProductInteraction from './ProductInteraction';
import ProductPreview from './ProductPreview';

const Product = () => {
  const data = [
    'https://static.zara.net/photos///2023/V/0/1/p/1165/130/800/2/w/850/1165130800_1_1_1.jpg?ts=1675945134729',
    'https://static.zara.net/photos///2023/V/0/1/p/1165/130/800/2/w/850/1165130800_2_1_1.jpg?ts=1675945197886',
  ];

  return (
    <>
      <ProductPreview data={data} />
      <ProductInteraction />
    </>
  );
};

export default Product;
