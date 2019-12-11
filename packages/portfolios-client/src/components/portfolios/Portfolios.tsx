import * as React from 'react';
import { Typography, Button } from '@appfocused/ui-components/dist/es';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerEntity } from '../../store/types';
import { PortfolioModel } from '../../store/portfolios/reducers';
import { AppState } from '../../store/store';
import { createAction, ActionTypes, PortfolioActions } from '../../store/portfolios/dux';
import { confirmAction } from '../Confirm/ConfirmationService';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './portfolios.module.css';

export const Portfolios: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(createAction(ActionTypes.Fetch));
  }, []);

  const { isLoading, data } = useSelector<AppState, ReducerEntity<PortfolioModel>>(
    state => state.portfoliosReducer
  );

  const handleDelete = async ({ id, name }: PortfolioModel) => {
    const isConfirmed = await confirmAction({
      confirmationText: `Delete "${name}" portfolio?`,
      confirmButtonText: 'Delete'
    });

    if (isConfirmed) {
      dispatch(createAction(ActionTypes.Delete, { id }));
    }
  };

  return (
    <>
      <Typography variant="h2" className={styles.header}>
        Portfolios
      </Typography>
      {isLoading && <Typography>Loading...</Typography>}
      <Paper className={styles.paper}>
        <Table aria-label="portfolio table" size="small" className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Portfolio name</TableCell>
              <TableCell align="right">Symbols</TableCell>
              <TableCell align="right">Market Value</TableCell>
              <TableCell align="right">Day Chg</TableCell>
              <TableCell align="right">Day Chg %</TableCell>
              <TableCell align="right">Total Chg</TableCell>
              <TableCell align="right">Total Chg %</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(portfolio => (
              <TableRow key={portfolio.name}>
                <TableCell component="th" scope="row">
                  {portfolio.name}
                </TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">
                  <Button intent="danger" size="small" onClick={() => handleDelete(portfolio)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};
