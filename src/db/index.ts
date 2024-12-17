import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from '../db/schema';
  
export const db = drizzle(process.env.DATABASE_URL!);

type User = {
  name: string;
  age: number;
  email: string;
}


export async function addUser(user: User) {
  await db.insert(usersTable).values(user);
  console.log('New user created!')
}

export async function getUsers() {
  const users = await db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  return users;
}

