import { IRequestError } from '../src/IRequestError';
import { IRequestErrorCatcher, requestErrorCatcher } from '../src/requestErrorCatcher';

describe('Test requestErrorCatcherFunction', () => {
    it('should return error when response is errored', () => {
        const errorMessage = "Internal server error";
        const errorStatusCode = 503;
        type UserDefinedErrorType = { message: string }
        type FetchingErrorType = { message: string, code: number, body: Record<string, string> }
        const incomingErrorData: FetchingErrorType = { body: {}, code: errorStatusCode, message: errorMessage };
        const props: IRequestErrorCatcher<FetchingErrorType, UserDefinedErrorType> = {
            err: incomingErrorData,
            getErrorsFromRequest: (data: FetchingErrorType) => ({ message: data.message }),
            getErrorStatusCode: (data: FetchingErrorType) => data.code
        }
        const result = requestErrorCatcher(props);
        const expectedResult: IRequestError<UserDefinedErrorType> = { hasError: true, error: { message: errorMessage }, errorCode: errorStatusCode }
        expect(result).toEqual(expectedResult);
    })
    it('should call action function on error', () => {
        const mockFunction = jest.fn();
        const errorMessage = "Internal server error";
        const errorStatusCode = 503;
        type UserDefinedErrorType = { message: string }
        type FetchingErrorType = { message: string, code: number, body: Record<string, string> }
        const incomingErrorData: FetchingErrorType = { body: {}, code: errorStatusCode, message: errorMessage };
        const props: IRequestErrorCatcher<FetchingErrorType, UserDefinedErrorType> = {
            err: incomingErrorData,
            getErrorsFromRequest: (data: FetchingErrorType) => ({ message: data.message }),
            getErrorStatusCode: (data: FetchingErrorType) => data.code,
            action: mockFunction
        }
        requestErrorCatcher(props);
        expect(mockFunction.mock.calls.length).toBe(1);
    })
})