import dotenv from "dotenv";
dotenv.config();

const Config = {
  api: process.env.REACT_APP_API,
  socket: process.env.REACT_APP_SOCKET,
  production: process.env.REACT_APP_PRODUCTION,
  dev: process.env.REACT_APP_DEV,
};

export default Config;
