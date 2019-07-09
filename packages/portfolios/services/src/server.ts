import app from './app';
const serverless = require('serverless-http');

export const handler = serverless(app as any);
