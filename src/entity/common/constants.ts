import { config } from "dotenv";
config();

export const NOTION_KEY = process.env.NOTION_KEY as string;
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID as string;
