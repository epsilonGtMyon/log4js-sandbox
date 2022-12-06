import path from "node:path";
import url from "node:url";
import log4js from "log4js";
import { sub } from "./sub.js";

const thisFilePath = url.fileURLToPath(import.meta.url);
const sandboxRoot = path.resolve(thisFilePath, "..");
const log4jsConfigPath = path.resolve(sandboxRoot, "log4js.json");

// configureにはconfigオブジェクトもしくはjsonファイルへのパスを渡すことができる。
// ここではappendersとcategoriesを設定している。
// appenders は出力方法、ここでは標準出力とファイルを指定
// categoryはロガーの名前みたいなもの ここではdefaultだけ指定
// 特定のロガーだけに設定適用とかもできそう
log4js.configure(log4jsConfigPath);

const logger = log4js.getLogger("sandbox01");

function main() {
  logger.debug("hello sandbox01 debug!");
  logger.info("hello sandbox01 info!");
  logger.warn("hello sandbox01 warn!");

  sub();
}

main();
