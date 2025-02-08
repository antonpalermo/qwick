import Logger from "./logger.mjs";

export default class BackendError extends Error {
  /**
   * Creates an instance of BackendError.
   *
   * @param {"server" | "api" | "auth" | "database"} [type="server"] - The type of error.
   * @param {string} message - The error message.
   * @param {Object} [options] - Additional options for the error.
   */
  constructor(type, message, options) {
    super(message, options);
    Logger(type, message);
    Error.captureStackTrace(this, BackendError);
  }
}
