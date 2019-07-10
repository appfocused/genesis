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

## Create a Todo

```
curl -X POST -H "Content-Type:application/json" http://localhost:3000/api/portfolios --data '{ "name": "Watchlist" }'
```

Example Result:
