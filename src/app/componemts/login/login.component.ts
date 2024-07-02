import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private fromBuilder:FormBuilder) {
    

    }
   

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
     email:['', [Validators.required, Validators.email]],
     pwd: ['', [Validators.required]]
  })


}
  
  login(){
    console.log("here user", this.loginForm.value)
  }
}
