import * as AWS from 'aws-sdk';
import { DataMapper } from '@aws/dynamodb-data-mapper';

export const PORTFOLIOS_TABLE = process.env.PORTFOLIOS_TABLE || 'portfolios-dev';
export const IS_OFFLINE = process.env.IS_OFFLINE;

const getDynamoDB = () => {
  if (IS_OFFLINE === 'true') {
    return new AWS.DynamoDB({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    });
  }

  return new AWS.DynamoDB({
    region: 'eu-west-1'
  });
};

export const dynamoDb = getDynamoDB();

export const mapper = new DataMapper({
  client: dynamoDb
});
