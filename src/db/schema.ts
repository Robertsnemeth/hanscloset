import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const imagesTable = pgTable("images", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  url: varchar({ length: 255 }),
  description: varchar({ length: 255 }).notNull(),
});
