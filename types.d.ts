type SubCategory = {
  id?: string;
  title: string;
  categories?: Category[];
};

type Category = {
  id?: string;
  title: string;
  sub_categories?: SubCategory[];
};

type Product = {
  id: string;
  title: string;
  description: string;
  brand: string;
  imgURL: string;
  img2URL: string;
  currentPrice: number;
  oldPrice: number;
  isNew: boolean | string;
  type: 'NORMAL' | 'FEATURED' | 'TRENDING';
  sub_categories?: SubCategory[];
  categories?: Category[];
};

type CartProduct = {
  id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  size: string;
  quantity: number;
};
