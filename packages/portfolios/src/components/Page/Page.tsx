import * as React from 'react';
import { useStyles } from './Page.style';
import { Lookup } from '../lookup/lookup';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';
import { Asset } from '../@types/interfaces';

export const Page: React.FunctionComponent = props => {
  const classes = useStyles();
  const [assets, setAssets] = React.useState({});

  const handleAssetSelection = (asset: Asset) => {
    setAssets({
      ...assets,
      [asset.symbol]: asset
    });
  };

  console.log({ assets });

  return (
    <div className={classes.root}>
      <header>
        <Heading className={classes.header} level={1}>
          Portfolios
        </Heading>
        <Lookup onSelect={handleAssetSelection} />
      </header>
    </div>
  );
};
