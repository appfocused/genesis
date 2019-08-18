## Setup

```bash
npm install
serverless dynamodb install
serverless offline start
serverless dynamodb migrate (this imports schema)
```

## Run offline DB

```
sls dynamodb start
```

## Run service offline

```bash
serverless offline start
```

### Run on the first setup

Create domains in Route53

```
sls create_domain --stage prod
sls create_domain --stage dev
```

### Local DynamoDB browser

https://github.com/aaronshaf/dynamodb-admin

```
dynamodb-admin
```

## Create a Todo

```
curl -X POST -H "Content-Type:application/json" http://localhost:3000/api/portfolios --data '{ "name": "Watchlist" }'

curl -X POST -H "Content-Type:application/json" https://api.appfocused.com/portfolios --data '{ "name": "Watchlist" }'
```

Example Result:

https://serverless.com/blog/api-gateway-multiple-services/
