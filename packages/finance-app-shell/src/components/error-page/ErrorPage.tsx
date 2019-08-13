import * as React from 'react';

import { Heading } from '@appfocused/ui-components/dist/es';
import { Page } from '../page';

export const ErrorPage: React.FunctionComponent = () => {
  return (
    <Page>
      <Heading>Page not found</Heading>
    </Page>
  );
};
