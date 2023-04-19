'use client';

import Link from 'next/link';
import IconLogout from '@mui/icons-material/Logout';
import { Avatar, IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import type { ReactNode } from 'react';

type ProfileMenuProps = {
  user: {
    id?: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    role: 'USER' | 'ADMIN';
  };
};

export default function ProfileMenu({ user }: ProfileMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let profilePicture: ReactNode;

  if (user.image) {
    profilePicture = <Avatar src={user.image} />;
  } else {
    profilePicture = <Avatar>{user.name?.slice(0, 1)}</Avatar>;
  }

  return (
    <>
      <Tooltip title="Account profile">
        <IconButton size="small" onClick={handleClick}>
          {profilePicture}
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} onClick={handleClose}>
        <MenuItem onClick={handleClose}>
          <div className="flex gap-2 items-center">
            <span>{profilePicture}</span>
            <span>{user.name}</span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <button>Profile</button>
        </MenuItem>
        {user.role === 'ADMIN' && (
          <MenuItem onClick={handleClose}>
            <Link href="/admin">Admin Panel</Link>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose}>
          <button onClick={() => signOut()} className="flex gap-2 items-center w-full">
            <IconLogout fontSize="small" />
            <span>Log out</span>
          </button>
        </MenuItem>
      </Menu>
    </>
  );
}
