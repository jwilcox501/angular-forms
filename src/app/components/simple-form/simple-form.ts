import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  imports: [
    FormsModule,
  ],
  templateUrl: './simple-form.html',
  styleUrl: './simple-form.css',
})
export class SimpleForm {

  protected name: string = '';
  public displayName: string = '';
  protected onSubmit(){
    this.displayName = this.name;
  }
}
