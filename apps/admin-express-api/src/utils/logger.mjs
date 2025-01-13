import debug from "debug";

export const Namespace = {
  SERVER: "server",
  DATABASE: "database",
  API: "api",
  AUTH: "auth"
};

export default function logger(namespace, msg) {
  if (!Object.values(Namespace).includes(namespace)) {
    throw new Error("invalid debug namespace");
  }

  const logger = debug(`app:${namespace}`);

  return logger(msg);
}
