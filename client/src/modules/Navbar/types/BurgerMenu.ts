export type BurgerMenuProps = {
  className?: string;
  anchor: 'left' | 'right' | 'top' | 'bottom';
  pages: { title: string; to: string }[];
};
