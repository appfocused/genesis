import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div>
    Welcome to the finance app.
    <br />
    <Link to="portfolios">Portfolios</Link>
  </div>
);
