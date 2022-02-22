import { Pool } from "pg";

const connectionString = 'postgres://uekxwfcn:4yZe9bvEYpmtsGMQawRQJnAumuMFlYii@kesavan.db.elephantsql.com/uekxwfcn';
const db = new Pool({connectionString});

export default db;