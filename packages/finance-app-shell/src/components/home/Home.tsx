import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@appfocused/ui-components/dist/es';

export const Home = () => (
  <div>
    <Typography variant="body2">Welcome to finance app!</Typography>
    <br />
    <Link to="portfolios">
      <Typography variant="body2">Portfolios</Typography>
    </Link>
  </div>
);
