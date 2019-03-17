# RSS-READER

An RSS feed reader

## Steps to Setup

1. Install dependencies with `npm install`
2. Create a file called `.env` in the root of the project and add the following variables

```bash
NODE_ENV="[production || development]"
HOST="[YOUR_APP_HOST || localhost]"
PORT="[THE_PORT_YOU'RE_RUNNING_YOUR_APP_ON || 3000]"
DATABASE_HOST="[YOUR_MONGODB_HOST || mongodb://localhost:27017/]"
DATABASE_NAME="[YOUR_MONGODB_DATABASE_NAME || whatever_you_want]"
```

3. Run Server with `npm start`