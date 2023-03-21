import { ReactNode, ReactElement } from 'react';

export type LinkProps = {
  to: string;
  children: ReactNode | ReactElement;
};
