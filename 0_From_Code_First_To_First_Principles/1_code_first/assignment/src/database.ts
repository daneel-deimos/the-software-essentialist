import { Pool, PoolClient } from "pg";
import { PrismaClient } from "@prisma/client";

export interface UserData {
  id?: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

const prisma = new PrismaClient();
export let client:PoolClient;

export const connectToDatabase = async () => {

    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        console.error('DATABASE_URL environment variable not set.');
        process.exit(1);
    }

    try {
        const pool = new Pool({ connectionString: databaseUrl })
        client = await pool.connect();
        
        console.info('Connected to PostgreSQL');
    } catch (err) {
      console.error('Error connecting to PostgreSQL', err);
    }
}

export const userExists = async (userId: string): Promise<boolean> => {
  const user = await prisma.users.findUnique({
    where: { id: Number(userId) },
    select: { id: true },
  });
  return !!user;
};

export const insertUser = async ({ email, username, firstName, lastName }: UserData) => {
  await prisma.users.create({
    data: {
      email,
      username,
      firstname: firstName,
      lastname: lastName,
      password: (Math.random() * 1000).toString(),
    },
  });
};

export const updateUser = async (userId: number, { email, username, firstName, lastName }: UserData) => {
  await prisma.users.update({
    where: { id: userId },
    data: { email, username, firstname: firstName, lastname: lastName },
  });
};