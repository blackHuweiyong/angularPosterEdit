import { FormGroup } from '@angular/forms';

export function markDirtyControl(formGroup: FormGroup) {
  for(const key of Object.keys(formGroup.controls)) {
    formGroup.controls[key].markAsDirty();
    formGroup.controls[key].updateValueAndValidity();
  }
}
