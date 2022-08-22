import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  topics=['angular','react','java'];
  ProductForm!:FormGroup;
  listData:any;

  constructor(private formBuilder :FormBuilder,
    private router:Router,
    private route:ActivatedRoute ) {
      this.listData=[];
      this.ProductForm=this.formBuilder.group({
        id:["",Validators.required],
        name:["",Validators.required],
        email:["",Validators.required],
        phone:["",Validators.required],
        course:["",Validators.required]
  
      })

     }
     public submit() :void{
      this.listData.push(this.ProductForm.value);
      console.log(this.listData);
    }

  ngOnInit() {
    
  }
  
  
}
