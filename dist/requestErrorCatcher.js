"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestErrorCatcher = void 0;
const isFunction = (func) => typeof func === 'function';
/**
 * function that catch all HTTP query errors
 * @function
 * @template K
 * @template T
 * @param {K} err type of error from HTTP queries library
 * @returns {T} user defined error type
 */
function requestErrorCatcher(props) {
    const { err, getErrorsFromRequest, getErrorStatusCode, action } = props;
    if (isFunction(action)) {
        action(err);
    }
    return {
        hasError: true,
        error: getErrorsFromRequest(err),
        errorCode: getErrorStatusCode(err)
    };
}
exports.requestErrorCatcher = requestErrorCatcher;
