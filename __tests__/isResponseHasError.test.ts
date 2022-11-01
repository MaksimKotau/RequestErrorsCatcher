import { IRequestError } from '../src/IRequestError';
import { isResponseHasError } from '../src/isResponseHasError';

describe('Test function isResponseHasError', () => {
    it('should return true when incoming data has a IRequestError type', () => {
        const incomingData: IRequestError<string> | Array<number> = {error: "You are not authorized", errorCode: 401, hasError: true }
        expect(isResponseHasError(incomingData)).toBeTruthy();
    })
    it('should return false when incoming data is not a IRequestError type', () => {
        const incomingData: IRequestError<string> | Array<string> = ['One', 'Two', 'Three'];
        expect(isResponseHasError(incomingData)).toBeFalsy();
    })
})