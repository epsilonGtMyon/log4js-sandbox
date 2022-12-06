import log4js from "log4js";
const logger = log4js.getLogger("sub");

function sub() {
  logger.debug("hello sub debug!");
  logger.info("hello sub info!");
  logger.warn("hello sub warn!");
}

export { sub };
