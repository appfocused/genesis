import * as React from 'react';
import { useStyles } from './Page.style';
import { Lookup } from '../lookup/lookup';
import Typography from '@appfocused/ui-components/dist/es/components/Typography';
import { Asset } from '../@types/interfaces';
import { CreatePortfolio } from '../create-portfolio';
import { Portfolios } from '../portfolios';

export const Page: React.FunctionComponent = props => {
  const classes = useStyles();
  const [assets, setAssets] = React.useState({});

  const handleAssetSelection = (asset: Asset) => {
    setAssets({
      ...assets,
      [asset.symbol]: asset
    });
  };

  return (
    <div className={classes.root}>
      <header>
        <Typography variant="h1">Portfolioz</Typography>
        <CreatePortfolio />
        <Portfolios />
        <Lookup onSelect={handleAssetSelection} />
      </header>
    </div>
  );
};
