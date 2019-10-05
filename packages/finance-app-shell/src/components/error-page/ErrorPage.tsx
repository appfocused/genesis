import * as React from 'react';

import { Typography } from '@appfocused/ui-components/dist/es';
import { Page } from '../page';

export const ErrorPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Typography variant="h1">Page not found</Typography>
    </Page>
  );
};
