import React from 'react';

export type CartProps = {
  open: boolean;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
};
