export interface IPromiseError<T = string> {
  hasError: boolean;
  errorCode?: number;
  error?: T;
}
