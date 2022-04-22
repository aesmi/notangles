import React from 'react';
import { Link } from 'react-router-dom';

import { Login as LoginIcon } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import { ShowModalButton } from './CustomModal';
import AccountMenu from './AccountMenu';

const Login: React.FC = () => {
  /* const [userData, setuserData] = useState(null);

  useEffect(() => {
    fetch('/')
      .then((res) => res.json())
      .then((userData) => setuserData(userData.user));
  }, []); */

  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <Tooltip title="Profile">
          <AccountMenu />
        </Tooltip>
      ) : (
        <Tooltip title="Login">
          <Link to="/login">
            <ShowModalButton>
              <LoginIcon />
            </ShowModalButton>
          </Link>
        </Tooltip>
      )}
    </>
  );
};

export default Login;
