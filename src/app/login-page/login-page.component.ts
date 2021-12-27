import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userForm !: FormGroup;
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name:['',Validators.required],
      email:['',Validators.required,[Validators.minLength(9)]],
      password:['',Validators.required,[Validators.minLength(5)]],
      Contact:['',Validators.required]

    });
    

  }

 


}
