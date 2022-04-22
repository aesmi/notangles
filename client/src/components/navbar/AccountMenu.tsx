import React, { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { AccountCircle, Logout } from '@mui/icons-material';
import { ListItem, Menu, MenuItem, Tooltip } from '@mui/material';

import { styled } from '@mui/system';

import { ShowModalButton } from './CustomModal';

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const AccountMenu: React.FC = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchor);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <Tooltip title="Profile">
        <ShowModalButton
          onClick={handleClick}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AccountCircle />
        </ShowModalButton>
      </Tooltip>
      <Menu
        anchorEl={menuAnchor}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            mt: 1,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 16,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <StyledLink to="/logout">
          <MenuItem>
            <ListItem>
              <Logout fontSize="small" />
            </ListItem>
            Logout
          </MenuItem>
        </StyledLink>
      </Menu>
    </>
  );
};

export default AccountMenu;
