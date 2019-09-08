import axios from 'axios';
import { endpoints } from '../utils/api-utils';

interface CreatePortfolioData {
  name: string;
  ccy: string;
}

export const createPortfolioService = (data: CreatePortfolioData) => {
  const url = endpoints.portfolios;
  return axios({
    method: 'POST',
    url,
    data
  });
};

export const getPortfoliosService = () => {
  const url = endpoints.portfolios;
  return axios({
    method: 'GET',
    url
  }) as Promise<any>;
};

export const deletePortfolioService = (portfolioId: string) => {
  const url = `${endpoints.portfolios}/${portfolioId}`;
  return axios({
    method: 'DELETE',
    url
  }) as Promise<any>;
};
