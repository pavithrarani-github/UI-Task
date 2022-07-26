import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {
Contactform:any; UserName!:string; Email!:string;
submitted:boolean=false;
showModal!:boolean;

  constructor(private formBuilder:FormBuilder) { }
  show(){
    this.showModal=true;//Show-Hide modal
  }
  //Bootstrap modal close event
  hide(){
    this.showModal=false;
  }
//form data mapping
  ngOnInit(): void {
    this.Contactform=new FormGroup({
      UserName: new FormControl(""),
      Email: new FormControl("")
    });
    this.Contactform=this.formBuilder.group({
      UserName:['',[Validators.required,Validators.minLength(6)]],
      Email:['',[Validators.required,Validators.email]]
    });
  }
  //Get data from input fields
 get check() {
  return this.Contactform.controls;
 }
 OnSubmit(data:any){
  this.submitted=true;
  //stop here if form is invalid
  if(this.Contactform.valid){
   console.log(this.Contactform.value);
  }
  else{
    return;
  }
 if (this.submitted){
   this.showModal= false;
 }
  this.UserName=data.UserName;
  this.Email=data.Email;
 }
}
