import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  url: text('url').notNull(),
  imageUrl: text('image_url'),
  category: text('category'),
  orderIndex: integer('order_index').default(0),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});