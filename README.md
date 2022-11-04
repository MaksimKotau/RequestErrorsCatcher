# RequestErrorsCatcher

This is a very simple TypeScript library for easy error handling when making requests to the API.

Here is a simple example of usage:


```ts
import axios, { AxiosError } from 'axios';
import { requestErrorCatcher } from "request-error-catcher";

export interface IPublicAPIResponse {
  count: number;
  entries: {
    API: string;
    Description: string,
    Auth: string,
    HTTPS: boolean,
    Cors: "yes" | "no",
    Link: string,
    Category: string
  }[]
}

export interface IErrorType {
  message: string;
  timestamp: string;
}

export async function getPublicAPIsWithAxios() {
  return axios.get<IPublicAPIResponse>('https://api.publicapis.org/entries')
    .then((response) => response.data)
    .catch((err: AxiosError) => requestErrorCatcher<AxiosError, IErrorType>({
      err,
      getErrorsFromRequest: (err) => ({
        message: err.message,
        timestamp: new Date().toUTCString()
      }),
      getErrorStatusCode: (err) => parseInt(err.code)
    }))
}
```

Further, when you call this function in your code, it will be easy for you to determine if there are errors in the result of the request.

```ts
import {isResponseHasError} from 'request-error-catcher';
import {getPublicAPIsWithAxios} from './axios';

async function fetchData(){
    const axiosData = await getPublicAPIsWithAxios();
    if (!isResponseHasError(axiosData)){
        console.log(`Axios fetched data count: ${axiosData.count}`)
    }else{
        console.log(`Axios fetched data with error ${axiosData.errorCode}`)
    }
}
```
