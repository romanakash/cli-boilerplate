import commander from "commander";
import axios from "axios";
import fs from "fs";

const API = axios.create({
  baseURL: "http://example.com"
});

API.interceptors.request.use(config => {
  return config;
});

const program = new commander.Command();

program.parse(process.argv);

export function cli(args) {
  console.log(program.args);
}
