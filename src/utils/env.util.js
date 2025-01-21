import { config } from "dotenv";
// import argsUtil from "./args.util.js";

// const { env } = argsUtil;

const path = "./.env.dev";
config({ path }); 

const envUtil = {
  PORT: process.env.PORT,
  MONGO_LINK: process.env.MONGO_LINK,
  SECRET_KEY: process.env.SECRET_KEY
};

export default envUtil;