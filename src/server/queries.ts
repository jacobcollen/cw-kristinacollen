import { eq } from "drizzle-orm";
import { db } from "./db";
import { users } from "./db/schema";
import "server-only";
import * as bcryptjs from "bcryptjs";

export const getNews = async () => {
  return await db.query.news.findMany();
};

export const getUserByUsername = async (username: string) => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.username, username))
    .limit(1);
  
  return user[0] ?? null;
};

export const createAdminUser = async () => {
  const hashedPassword = await bcryptjs.hash("adminPassword", 10);
  await db.insert(users).values({
    username: "mamma",
    passwordHash: hashedPassword,
    role: "admin",
  });
};
