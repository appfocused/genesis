import { embed } from '@aws/dynamodb-data-mapper';
import { table, attribute, hashKey, rangeKey } from '@aws/dynamodb-data-mapper-annotations';
import { PORTFOLIOS_TABLE } from '../config';

interface TableIndexes {
  pk: string;
  sk: string;
  data: string;
}

@table(PORTFOLIOS_TABLE)
export class Portfolio implements TableIndexes {
  @hashKey()
  pk: string; // portfolioId

  @rangeKey()
  sk: string; // userId

  @attribute()
  data: string; // portfolioName

  @attribute()
  ccy?: string;

  @attribute()
  createdAt?: Date;
}
