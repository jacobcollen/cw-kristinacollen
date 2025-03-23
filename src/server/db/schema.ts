import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  pgTable,
  serial,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `jcbcollen_${name}`);

export const news = createTable(
  "news",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    title: varchar("title", { length: 256 }).notNull(),
    text: text("text").notNull(),
    imageUrl: text("image_url"),
    link: text("link"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (news) => ({
    titleIndex: index("news_title_idx").on(news.title),
  }),
);

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(), // Viktigt att ID är definierat!
  username: varchar("username", { length: 256 }).notNull(),
  passwordHash: text("password_hash").notNull(),
  role: varchar("role", { length: 50 }).notNull(),
});

