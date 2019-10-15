import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

public loginForm: FormGroup | null =null;
public email: FormControl | null =null;
public password: FormControl | null =null;

public formErrors = {
"email": "",
"password": ""
}
public validationMessages = {
  "email": {
    "required": "Pole ob",
     "pattern": " fffffff"
  },
  "password": {
    "required":  "Pole ob",
    "minLength": "dddddddd"

  }
  }


  constructor() { }
// private fb: FormBuilder
  ngOnInit() {
    // this.loginForm =  this.fb.group({
    //  email : [Validators.required, Validators.email],
    // password:[Validators.required, Validators.minLength(6)]
    // }) 


    this.createFormControls();
    this.createForm();
    this.onValueChange();
  }
  
public onSubmit(loginForm: FormGroup): void {
  console.log(loginForm);
}

private createFormControls(): void {
  this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
}
private createForm(): void {    
  this.loginForm = new FormGroup({
  email: this.email ,
  password: this.password
});
}

private onValueChange(data?: any): void  {
  if (!this.loginForm) {
    return;
  }

  const form = this.loginForm;

  for(let field in this.formErrors) {
    this.formErrors[field] = "";

    const control =form.get(field);


  }




}

}
