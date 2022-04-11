import { AbstractControl, ValidationErrors } from "@angular/forms";



export class UserNameValidators {
    static CanNotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0)
            return { cannotContainSpace: true };
        return null;
    }
}