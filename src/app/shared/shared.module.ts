import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { SearchComponent } from './search/search.component';
@NgModule({
  imports: [
    CommonModule,
    ToastModule
  ],
  declarations: [SearchComponent],
  exports:[ToastModule,SearchComponent]
})
export class SharedModule { }            
