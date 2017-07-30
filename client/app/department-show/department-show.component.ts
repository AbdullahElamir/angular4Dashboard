import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { ToastComponent } from '../shared/toast/toast.component';
@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.scss']
})
export class DepartmentShowComponent implements OnInit {

  isLoading = true;
  /*$scope.pageSize,$scope.currentPage*/

  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  idDepartment;

 
  deleteItem(id) {
    this.idDepartment =id;
  }

  deleteItemConfirm(){
   
    this.DepartmentService.deleteDepartment(this.idDepartment).subscribe(
        res => {
          this.getDepartment();
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
    );
    
  }


 


  getDepartment() {
    console.log("ddd");
    this.DepartmentService.getDepartment().subscribe(
      data => {
        this.allItems = data;
        this.setPage(1);
      },
      error => 
        console.log(error),
      () => this.isLoading = false
    );
  }



  constructor(private DepartmentService: DepartmentService,
              public toast: ToastComponent        
             ) { 
    this.getDepartment();
  }

  ngOnInit() {
  }




  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      // get pager object from service
      this.pager = this.DepartmentService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }























}
