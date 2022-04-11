import { AbstractControl, ValidationErrors } from "@angular/forms";

export class oldPassword {
    static passwordCorrect(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== "123456")
                    resolve({ correct: false });
                else
                    resolve(null);
            }, 1000);
        })
    }
}