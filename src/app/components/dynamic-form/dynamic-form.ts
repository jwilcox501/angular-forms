import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm {
  protected fb: FormBuilder = new FormBuilder();
  protected form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    newsletter: [false],
  });

  protected submitted : boolean = false;

  protected onSubmit() {
    this.submitted = true;
    const values = this.form.getRawValue();
    Object.entries(values).forEach(([key, value]) => {
      console.log(key, value);
    })
    // console.log('Form data submitted is - ' + this.form.controls);
  }


}
