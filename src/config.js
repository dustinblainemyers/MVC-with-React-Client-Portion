import dotenv from "dotenv";
dotenv.config();

const Config = {
  api: process.env.REACT_APP_API,
  socket: process.env.REACT_APP_SOCKET,
};

export default Config;
