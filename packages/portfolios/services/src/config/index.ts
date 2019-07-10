import * as AWS from 'aws-sdk';

export const PORTFOLIOS_TABLE = process.env.PORTFOLIOS_TABLE || '';
export const IS_OFFLINE = process.env.IS_OFFLINE;

const getDynamoDB = () => {
  if (IS_OFFLINE === 'true') {
    return new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    });
  }

  return new AWS.DynamoDB.DocumentClient();
};

export const dynamoDb = getDynamoDB();
