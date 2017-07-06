import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  

  addDeptForm: FormGroup;
  name = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  addDepartment () {
     this.DepartmentService.addDepartment(this.addDeptForm.value).subscribe(
         res => {
        this.addDeptForm.reset();
        this.toast.setMessage('Department added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  constructor(private DepartmentService: DepartmentService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
     this.addDeptForm = this.formBuilder.group({
      name: this.name,
      description: this.description
    });
  }



}
