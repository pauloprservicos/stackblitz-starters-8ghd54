import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormFieldModel } from './dynamic-form-field/dynamic-form-field.model';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormFieldComponent,
    MatButtonModule,
  ],
  templateUrl: './main.html',
})
export class App {
  myForm!: FormGroup;

  dynamicFormFields: DynamicFormFieldModel[] = [
    {
      id: 'favoriteMovies',
      label: 'Favorite Movies',
      type: 'select',
      selectMenuOptions: [
        {
          label: 'Star Wars',
          value: 'e7a9c049-1a85-4c5a-b755-1b0a5c4394a3',
        },
        {
          label: 'Lord of The Rings',
          value: 'd624c916-d6f7-487f-8b16-87a034de3e34',
        },
        {
          label: 'Shutter Island',
          value: 'cf7cb566-6d2b-4b6b-96a3-ae9fba2a47af',
        },
        {
          label: 'The Godfather',
          value: 'b19b3edc-32da-4684-a10f-6e019df00d9e',
        },
      ],
      validators: [Validators.required],
    },
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      validators: [Validators.required, Validators.email],
    },
    {
      id: 'firstname',
      label: 'Name',
      type: 'text',
      validators: [Validators.required],
    },
    {
      id: 'surname',
      label: 'Surname',
      type: 'text',
      validators: [Validators.required],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
    this.setupFormFields();
  }

  setupFormFields() {
    this.dynamicFormFields.forEach((formItem: DynamicFormFieldModel) => {
      let formControl;
      formControl = this.fb.control(formItem.value || '', formItem.validators);
      this.myForm.addControl(formItem.id, formControl);
    });
  }
}

bootstrapApplication(App, {
  providers: [importProvidersFrom([BrowserAnimationsModule])],
});
