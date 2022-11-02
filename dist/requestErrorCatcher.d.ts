import { IRequestError } from './IRequestError';
export interface IRequestErrorCatcher<K, T> {
    /**
     * type of error from HTTP queries library
     * @template K
     */
    err: K;
    /**
     * function that extract type T from error K
     * @function
     * @template K
     * @template T
     * @param {K} err type of error from HTTP queries library
     * @returns {T} user defined error type
     */
    getErrorsFromRequest: (err: K) => T;
    /**
     * function that extract type T from error K
     * @function
     * @template K
     * @param {K} err type of error from HTTP queries library
     * @returns {number} HTTP status code
     */
    getErrorStatusCode: (err: K) => number;
    /**
     * function that will be executed each time on error
     * @function
     * @template K
     * @param {K} err type of error from HTTP queries library
     * @returns {void}
     */
    action?: (err: K) => void;
}
/**
 * function that catch all HTTP query errors
 * @function
 * @template K
 * @template T
 * @param {K} err type of error from HTTP queries library
 * @returns {T} user defined error type
 */
export declare function requestErrorCatcher<K, T>(props: IRequestErrorCatcher<K, T>): IRequestError<T>;
