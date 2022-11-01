import { IRequestError } from './IRequestError';

/**
 * function that checks the response from the server for errors with responseErrorCatcher used
 * @function
 * @template T user defined error type
 * @template V the expected data type if there is no error.
 * @param {IRequestError<T> | V} data object returned by query with responseErrorCatcher used
 * @returns {boolean}
 */
export function isResponseHasError<T, V>(
  data: IRequestError<T> | V
): data is IRequestError<T> {
  return Boolean((data as IRequestError<T>).hasError);
}
