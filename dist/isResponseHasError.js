"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResponseHasError = void 0;
/**
 * function that checks the response from the server for errors with responseErrorCatcher used
 * @function
 * @template T user defined error type
 * @template V the expected data type if there is no error.
 * @param {IRequestError<T> | V} data object returned by query with responseErrorCatcher used
 * @returns {boolean}
 */
function isResponseHasError(data) {
    return Boolean(data.hasError);
}
exports.isResponseHasError = isResponseHasError;
