# devconnector

## Developer social media

1. Node - Express
1. React
1. MongoDB (Mongoose)

### Usage

Add `config` folder in project root. Insert `dev.env` file inside with following contents.

```bash
PORT=1337
MONGODB_URI='YOUR_DATABASE_URI'
JWT_SECRET='YOUR_JWT_SECRET'
```

Install dependencies

```bash
npm i
```

Run in development

```bash
npm run server # Dev server (:1337)
```

##### Note: Start your database server before running the application.
