import { drizzle } from 'drizzle-orm/postgres-js';
import * as dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config();

const connectionString = process.env.DATABASE_URL!;

// Import postgres using require for CommonJS compatibility
const postgres = require('postgres');

// Create the connection
const client = postgres(connectionString);

// Create the database instance
export const db = drizzle(client, { schema });
