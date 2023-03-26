export interface CardProps {
  card: IProduct;
}
export interface IProduct {
  id: number;
  attributes: Attributes;
  quantity?: number;
}
export interface Attributes {
  title: string;
  desc: string;
  currentPrice: number;
  oldPrice: number;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  type: string;
  img: Img;
  img2: Img;
  categories: Categories;
  sub_categories: SubCategories;
}

export interface Img {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes2;
}
export interface Attributes2 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  large: Large;
  medium: Medium;
  small: Small;
}

export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Img2 {
  data: Data2;
}

export interface Data2 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats2 {
  thumbnail: Thumbnail2;
  large: Large2;
  medium: Medium2;
  small: Small2;
}

export interface Thumbnail2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Large2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Medium2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Small2 {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Categories {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes4;
}

export interface Attributes4 {
  title: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SubCategories {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: Attributes5;
}

export interface Attributes5 {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
