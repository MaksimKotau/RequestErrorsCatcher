export interface IRequestError<T> {
    hasError: boolean;
    error: T;
    errorCode: number;
}
