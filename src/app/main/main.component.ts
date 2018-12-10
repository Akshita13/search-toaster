import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  constructor(public toastr: ToastsManager,vcr:ViewContainerRef) { 
   this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess()
  {
    console.log("success");
    
  this.toastr.success('success');
  }

  showError()
  {
    this.toastr.error('error');
  }


  search(value)
  {
    console.log("abc");
    
  }
 

}
