import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { endpoints } from '../utils/api-utils';
import { PortfolioModel } from '../store/portfolios/reducers';

interface CreatePortfolioData {
  name: string;
  ccy: string;
}

export const createPortfolioService = (data: CreatePortfolioData): AxiosPromise<PortfolioModel> => {
  const url = endpoints.portfolios;
  return axios({
    method: 'POST',
    url,
    data
  });
};

export const getPortfoliosService = (): AxiosPromise<PortfolioModel[]> => {
  const url = endpoints.portfolios;
  return axios({
    method: 'GET',
    url
  });
};

export const deletePortfolioService = (portfolioId: string): AxiosPromise<PortfolioModel> => {
  const url = `${endpoints.portfolios}/${portfolioId}`;
  return axios({
    method: 'DELETE',
    url
  });
};
