type card = {
  id: number;
  img: string;
  img2: string;
  title: string;
  oldPrice?: number;
  currentPrice: number;
  isNew?: boolean;
};

export type CardProps = {
  card: card;
};
