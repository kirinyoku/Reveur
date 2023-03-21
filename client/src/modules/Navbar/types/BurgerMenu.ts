export type PageInfo = {
  title: string;
  to: string;
};

export type BurgerMenuProps = {
  className?: string;
  anchor: 'left' | 'right' | 'top' | 'bottom';
  pages: PageInfo[];
};
