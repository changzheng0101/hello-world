import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";



export class UserNameValidators {
    static CanNotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    //异步验证
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            //成功时候用resolve返回结果
            //失败之后用reject返回结果
            setTimeout(() => {
                if (control.value === "changzheng")
                    resolve({ shouldBeUnique: true })
                else
                    resolve(null)
            }, 2000);
        })
    }
}