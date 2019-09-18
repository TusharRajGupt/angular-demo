import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export const matchValidator: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
    const p1 = form.get('password');
    const p2 = form.get('retypePassword');
    // return p1 && p2 && p1.value !== p2.value ? { match: true } : null;
    let error = null;
    if (p1 && p2) {
        if (p1.value !== p2.value) {
            error = { match: true };
        }
    }
    return error;
};
