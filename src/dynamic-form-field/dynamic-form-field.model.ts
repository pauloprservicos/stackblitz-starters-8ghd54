import { ValidatorFn } from '@angular/forms';

export type DynamicFormFieldModelType = 'text' | 'select';

export interface SelectMenuOption {
  label: string;
  value: string;
}

export interface DynamicFormFieldModel {
  id: string;
  label: string;
  type: DynamicFormFieldModelType;
  selectMenuOptions?: SelectMenuOption[];
  value?: string | SelectMenuOption[]; // default value of the dynamic field
  validators?: ValidatorFn[];
}
