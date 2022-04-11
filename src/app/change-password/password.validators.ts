import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    static isPasswordCorrect(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '123456')
                    resolve({ inCorrect: true })
                else
                    resolve(null)
            }, 1000);
        });
    }


    static matchPassword(control: AbstractControl): ValidationErrors| null{
        let newPassword = control.get('newPassword')?.value;
        let confirmPassword = control.get('confirmPassword')?.value;

        if(newPassword !== confirmPassword)
            return {notMatch:true}

        return null;
    }
}