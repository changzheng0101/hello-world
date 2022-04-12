import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('an error happened');
        console.log(error);
        console.log('I am in use......');
    }
}