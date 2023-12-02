// config/index.ts
import dotenv from "dotenv";

dotenv.config();

const config = {
  NOTION_PORTFOLIO_DATABASE_ID:
    process.env.NEXT_PUBLIC_NOTION_PORTFOLIO_DATABASE_ID,
  NOTION_BLOG_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID,
  NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
};

export default config;
