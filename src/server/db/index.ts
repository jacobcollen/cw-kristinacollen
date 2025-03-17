// index.ts
import { drizzle } from "drizzle-orm/vercel-postgres";
import { createPool } from "@vercel/postgres";
import { env } from "~/env";

import * as schema from "./schema";

const pool = createPool({
  connectionString: env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
