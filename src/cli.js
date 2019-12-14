import commander from "commander";
import axios from "axios";
import fs from "fs";

const program = new commander.Command();

program.parse(process.argv);

export function cli() {
  console.log(program.args);
}

const API = axios.create({
  baseURL: "http://example.com"
});
