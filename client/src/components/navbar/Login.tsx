import React from 'react';
import styled from 'styled-components';

import { IconButton, Tooltip } from '@material-ui/core';
// Replace Input with Login icon after mui v5 upgrade
import { Input } from '@material-ui/icons';

const LoginButton = styled(IconButton)`
  margin-right: 5px;
`;

const Login: React.FC = () => {
  return (
    <>
      <Tooltip title="Login">
        <LoginButton color="inherit">
          <Input />
        </LoginButton>
      </Tooltip>
    </>
  );
};

export default Login;
